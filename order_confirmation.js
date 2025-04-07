// VLAMB E-commerce - Order Confirmation Page JavaScript

// Get products data if available, or use fallback
const productData = typeof getAllProducts === 'function' ? getAllProducts() : [];

document.addEventListener("DOMContentLoaded", () => {
    // Display welcome message if user is logged in
    const username = localStorage.getItem("username");
    const welcomeMessage = document.getElementById("welcome-message");
    
    if (username && welcomeMessage) {
        welcomeMessage.textContent = `Welcome, ${username}!`;
    }
    
    // Get order details from localStorage
    const orderDetails = JSON.parse(localStorage.getItem("lastOrder"));
    
    if (!orderDetails) {
        // If there's no order details, redirect to home
        showNotification("No order information found!");
        setTimeout(() => {
            window.location.href = "index.html";
        }, 3000);
        return;
    }
    
    displayOrderInfo(orderDetails);
    displayOrderItems(orderDetails.items);
    displaySuggestedProducts();
});

// Display order information
function displayOrderInfo(orderDetails) {
    // Set order number
    const orderNumberElement = document.querySelector("#order-number span");
    if (orderNumberElement) {
        orderNumberElement.textContent = orderDetails.orderNumber;
    }
    
    // Set order date
    const orderDateElement = document.querySelector("#order-date span");
    if (orderDateElement) {
        orderDateElement.textContent = new Date().toLocaleDateString();
    }
    
    // Set customer name
    const customerNameElement = document.getElementById("customer-name");
    if (customerNameElement) {
        customerNameElement.textContent = localStorage.getItem("username") || "Guest";
    }
    
    // Set delivery date (estimated 3-5 business days from now)
    const deliveryDateElement = document.getElementById("delivery-date");
    if (deliveryDateElement) {
        const today = new Date();
        const deliveryDate = new Date(today);
        deliveryDate.setDate(today.getDate() + 5); // Add 5 days
        deliveryDateElement.textContent = deliveryDate.toLocaleDateString();
    }
    
    // Set totals
    document.getElementById("confirmation-subtotal").textContent = `$${orderDetails.subtotal.toFixed(2)}`;
    document.getElementById("confirmation-shipping").textContent = orderDetails.shipping === 0 ? "FREE" : `$${orderDetails.shipping.toFixed(2)}`;
    document.getElementById("confirmation-tax").textContent = `$${orderDetails.tax.toFixed(2)}`;
    
    // Set discount if applicable
    if (orderDetails.discount && orderDetails.discount > 0) {
        const discountRow = document.getElementById("discount-row");
        discountRow.style.display = "flex";
        document.getElementById("confirmation-discount").textContent = `-$${orderDetails.discount.toFixed(2)}`;
    }
    
    // Set total
    document.getElementById("confirmation-total").textContent = `$${orderDetails.total.toFixed(2)}`;
}

// Display ordered items
function displayOrderItems(items) {
    const orderItemsContainer = document.getElementById("order-items");
    
    if (!items || items.length === 0) {
        orderItemsContainer.innerHTML = "<p>No items found in this order.</p>";
        return;
    }
    
    let itemsHTML = "";
    
    items.forEach(item => {
        itemsHTML += `
            <div class="order-item">
                <div class="order-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="order-item-details">
                    <h4>${item.name}</h4>
                    <p class="order-item-category">${item.category}</p>
                </div>
                <div class="order-item-price">
                    <span>$${item.price.toFixed(2)}</span>
                    <span class="order-item-quantity">Qty: ${item.quantity || 1}</span>
                </div>
            </div>
        `;
    });
    
    orderItemsContainer.innerHTML = itemsHTML;
}

// Display suggested products based on ordered items
function displaySuggestedProducts() {
    const suggestionsContainer = document.querySelector(".suggestion-products");
    
    if (!productData || productData.length === 0) {
        suggestionsContainer.innerHTML = "<p>No product suggestions available.</p>";
        return;
    }
    
    // Get random 3 products from the catalog
    const randomProducts = [...productData]
        .sort(() => 0.5 - Math.random()) // Shuffle array
        .slice(0, 3); // Get first 3 items
    
    let suggestionsHTML = "";
    
    randomProducts.forEach(product => {
        suggestionsHTML += `
            <div class="suggestion-product hover-lift">
                <div class="suggestion-product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="suggestion-product-details">
                    <h4>${product.name}</h4>
                    <p class="suggestion-product-price">$${product.price.toFixed(2)}</p>
                </div>
                <a href="products.html" class="suggestion-view-btn">View Product</a>
            </div>
        `;
    });
    
    suggestionsContainer.innerHTML = suggestionsHTML;
}

// Show notification
function showNotification(message) {
    // Look for existing notification element, or create one if it doesn't exist
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

    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove("show");
    }, 3000);
}