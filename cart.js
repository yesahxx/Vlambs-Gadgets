const productData = typeof getAllProducts === 'function' ? getAllProducts() : [];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.addEventListener("DOMContentLoaded", () => {
    const cartHeader = document.querySelector('.cart-header');
    if (cartHeader) {
        cartHeader.classList.add('animated');
    }
    
    loadCart();
    initCartControls();
    updateOrderSummary();
    document.getElementById("cart-items").addEventListener("change", updateOrderSummary);
});

function loadCart() {
    const cartItems = document.getElementById("cart-items");
    const emptyCartMessage = document.querySelector('.empty-cart-message');
    
    cartItems.innerHTML = "";

    if (cart.length === 0) {
        if (emptyCartMessage) {
            emptyCartMessage.style.display = "flex";
        } else {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart fa-3x"></i>
                    <h3>Your cart is empty</h3>
                    <p>Looks like you haven't added anything to your cart yet.</p>
                    <a href="products.html" class="cta-button">Start Shopping</a>
                </div>
            `;
        }
        
        updateOrderSummary();
        return;
    }
    
    if (emptyCartMessage) {
        emptyCartMessage.style.display = "none";
    }

    cart.forEach((product, index) => {
        const item = document.createElement("div");
        item.className = "cart-item hover-lift";
        item.style.animationDelay = `${index * 0.1}s`;
        
        item.innerHTML = `
            <div class="cart-item-select">
                <input type="checkbox" class="checkout-checkbox" data-index="${index}" data-price="${product.price}">
            </div>
            <div class="cart-item-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="cart-item-details">
                <h3>${product.name}</h3>
                <div class="cart-item-meta">
                    <span class="cart-item-category">${product.category}</span>
                    <span class="cart-item-id">SKU: VLAMB-${product.id}</span>
                </div>
                <p class="cart-item-description">${product.description ? product.description.substring(0, 80) + '...' : ''}</p>
            </div>
            <div class="cart-item-price">
                <span class="price">$${product.price.toFixed(2)}</span>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn decrease" data-index="${index}"><i class="fas fa-minus"></i></button>
                <span class="quantity">1</span>
                <button class="quantity-btn increase" data-index="${index}"><i class="fas fa-plus"></i></button>
            </div>
            <div class="cart-item-actions">
                <button class="remove-button" onclick="removeFromCart(${index})">
                    <i class="fas fa-trash"></i> Remove
                </button>
            </div>
        `;
        
        cartItems.appendChild(item);
    });

    adjustGrid();
    initQuantityControls();
}

function initCartControls() {
    const selectAllBtn = document.getElementById("select-all");
    if (selectAllBtn) {
        let allSelected = false;
        
        selectAllBtn.addEventListener("click", function() {
            const checkboxes = document.querySelectorAll('.checkout-checkbox');
            allSelected = !allSelected;
        
            checkboxes.forEach(checkbox => {
                checkbox.checked = allSelected;
            });
        
            updateOrderSummary();
            selectAllBtn.innerHTML = allSelected ? 
                '<i class="fas fa-times-square"></i> Unselect All' : 
                '<i class="fas fa-check-square"></i> Select All';
        });
    }
    
    const removeSelectedBtn = document.getElementById("remove-selected");
    if (removeSelectedBtn) {
        removeSelectedBtn.addEventListener("click", function() {
            let selectedIndexes = [];
        
            document.querySelectorAll(".checkout-checkbox:checked").forEach(checkbox => {
                selectedIndexes.push(parseInt(checkbox.getAttribute("data-index")));
            });
        
            if (selectedIndexes.length === 0) {
                showNotification("No items selected for removal.");
                return;
            }
        
            selectedIndexes.sort((a, b) => b - a);
            
            selectedIndexes.forEach(index => {
                cart.splice(index, 1);
            });
            
            localStorage.setItem("cart", JSON.stringify(cart));
            loadCart();
        
            showNotification(`${selectedIndexes.length} item(s) removed from the cart.`);
            
            if (selectAllBtn) {
                selectAllBtn.innerHTML = '<i class="fas fa-check-square"></i> Select All';
            }
        });
    }
    
    const checkoutBtn = document.getElementById("checkout-btn");
    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", checkout);
    }
    
    const promoBtn = document.querySelector('.promo-apply-btn');
    if (promoBtn) {
        promoBtn.addEventListener('click', function() {
            const promoInput = document.querySelector('.promo-input');
            const promoCode = promoInput.value.trim();
            
            if (promoCode === '') {
                showNotification('Please enter a promo code.');
                return;
            }
            
            if (promoCode) {
                localStorage.setItem('promoCode', promoCode);
                localStorage.setItem('discountPercent', '10');
                updateOrderSummary();
                showNotification(`Promo code "${promoCode}" applied! 10% discount added.`);
                promoInput.value = '';
            }
        });
    }
}

function initQuantityControls() {

    document.querySelectorAll('.quantity-btn.decrease').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            const quantityElement = this.nextElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            
            if (quantity > 1) {
                quantityElement.textContent = --quantity;
                updateItemSubtotal(index, quantity);
            }
        });
    });
    
    document.querySelectorAll('.quantity-btn.increase').forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            const quantityElement = this.previousElementSibling;
            let quantity = parseInt(quantityElement.textContent);
            
            quantityElement.textContent = ++quantity;
            updateItemSubtotal(index, quantity);
        });
    });
}

function updateItemSubtotal(index, quantity) {
    if (index >= 0 && index < cart.length) {
        const product = cart[index];
        const priceElement = document.querySelectorAll('.cart-item')[index].querySelector('.price');
        const newSubtotal = product.price * quantity;
        priceElement.textContent = `$${newSubtotal.toFixed(2)}`;
        const checkbox = document.querySelectorAll('.checkout-checkbox')[index];
        checkbox.setAttribute('data-price', newSubtotal);
        
        updateOrderSummary();
    }
}

function updateOrderSummary() {
    const checkboxes = document.querySelectorAll(".checkout-checkbox");
    let subtotal = 0;
    let itemCount = 0;
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            subtotal += parseFloat(checkbox.getAttribute("data-price"));
            itemCount++;
        }
    });
    
    const shipping = subtotal > 0 ? (subtotal > 50 ? 0 : 5.99) : 0;
    const shippingCost = document.getElementById("shipping-cost");
    if (shippingCost) {
        shippingCost.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
    }
    
    const tax = subtotal * 0.0825;
    const taxAmount = document.getElementById("tax-amount");
    if (taxAmount) {
        taxAmount.textContent = `$${tax.toFixed(2)}`;
    }
    
    const discountPercent = localStorage.getItem('discountPercent');
    let discount = 0;
    
    if (discountPercent) {
        discount = subtotal * (parseInt(discountPercent) / 100);
        
        const summaryContainer = document.querySelector('.order-summary');
        if (summaryContainer && !document.querySelector('.discount-row')) {
            const discountRow = document.createElement('div');
            discountRow.className = 'summary-row discount-row';
            discountRow.innerHTML = `
                <span>Discount (${discountPercent}%):</span>
                <span id="discount-amount">-$${discount.toFixed(2)}</span>
            `;
            
            const divider = summaryContainer.querySelector('.summary-divider');
            summaryContainer.insertBefore(discountRow, divider);
        } else if (document.querySelector('.discount-row')) {
            document.getElementById('discount-amount').textContent = `-$${discount.toFixed(2)}`;
        }
    }
    
    const total = subtotal + shipping + tax - discount;
    
    const subtotalElement = document.getElementById("subtotal-price");
    const totalElement = document.getElementById("total-price");
    
    if (subtotalElement) {
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    }
    
    if (totalElement) {
        totalElement.textContent = `$${total.toFixed(2)}`;
    }
    
    const checkoutBtn = document.getElementById("checkout-btn");
    if (checkoutBtn) {
        checkoutBtn.textContent = itemCount > 0 ? 
            `Checkout (${itemCount} item${itemCount !== 1 ? 's' : ''})` : 
            'Checkout';
        checkoutBtn.disabled = itemCount === 0;
    }
}

function removeFromCart(index) {
    const product = cart[index];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    
    loadCart();
    updateOrderSummary();
    
    showNotification(`"${product.name}" has been removed from your cart.`);
}

function adjustGrid() {
    const cartItems = document.getElementById("cart-items");
    
    if (cart.length <= 2) {
        cartItems.classList.add('small-cart');
    } else {
        cartItems.classList.remove('small-cart');
    }
}

function checkout() {
    const loggedInUser = localStorage.getItem("username");

    if (!loggedInUser) {
        showNotification("You must be signed in to checkout.");
        return;
    }

    const checkboxes = document.querySelectorAll(".checkout-checkbox:checked");
    if (checkboxes.length === 0) {
        showNotification("Please select at least one product to checkout!");
        return;
    }

    const totalElement = document.getElementById("total-price");
    const total = parseFloat(totalElement.textContent.replace('$', '')) || 0;

    if (total === 0) {
        showNotification("Your cart is empty!");
        return;
    }

    const orderNumber = Math.floor(Math.random() * 10000000);
    
    showNotification(`Order #${orderNumber} placed successfully! Total: $${total.toFixed(2)}`);

    let selectedItems = [];
    let selectedIndexes = [];
    
    checkboxes.forEach(checkbox => {
        const index = parseInt(checkbox.getAttribute("data-index"));
        selectedIndexes.push(index);
        
        const itemElement = document.querySelectorAll('.cart-item')[index];
        const quantity = parseInt(itemElement.querySelector('.quantity').textContent) || 1;
        const item = {...cart[index], quantity: quantity};
        selectedItems.push(item);
    });

    selectedIndexes.sort((a, b) => b - a);
    
    const subtotal = parseFloat(document.getElementById("subtotal-price").textContent.replace('$', '')) || 0;
    const shippingText = document.getElementById("shipping-cost").textContent;
    const shipping = shippingText === 'FREE' ? 0 : parseFloat(shippingText.replace('$', '')) || 0;
    const tax = parseFloat(document.getElementById("tax-amount").textContent.replace('$', '')) || 0;
    
    let discount = 0;
    const discountElement = document.getElementById("discount-amount");
    if (discountElement) {
        discount = parseFloat(discountElement.textContent.replace('-$', '')) || 0;
    }
    
    const orderDetails = {
        orderNumber: orderNumber.toString(),
        date: new Date().toISOString(),
        items: selectedItems,
        subtotal: subtotal,
        shipping: shipping,
        tax: tax,
        discount: discount,
        total: total
    };
    
    localStorage.setItem("lastOrder", JSON.stringify(orderDetails));
    
    selectedIndexes.forEach(index => {
        cart.splice(index, 1);
    });
    
    localStorage.removeItem('promoCode');
    localStorage.removeItem('discountPercent');
    
    localStorage.setItem("cart", JSON.stringify(cart));
    
    setTimeout(() => {
        window.location.href = "order_confirmation.html";
    }, 1500);
}

function showNotification(message) {
    let notification = document.getElementById('notification');
    let notificationMessage = document.getElementById('notification-message');
    
    if (!notification) {
        notification = document.createElement("div");
        notification.id = "notification";
        notification.className = "notification";
        
        notificationMessage = document.createElement("p");
        notificationMessage.id = "notification-message";
        
        notification.appendChild(notificationMessage);
        document.body.appendChild(notification);
    }
    
    notificationMessage.innerText = message;
    notification.classList.add("show");

    setTimeout(() => {
        notification.classList.remove("show");
    }, 3000);
}
