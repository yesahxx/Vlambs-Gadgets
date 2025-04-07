let productData = typeof getAllProducts === 'function' ? getAllProducts() : products;
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const categoryText = document.getElementById("category-text");
const welcomeMessage = document.getElementById("welcome-message");
const featuredProductsContainer = document.getElementById("featured-products");

function loadDefaultProducts() {
    let savedProducts = localStorage.getItem("defaultProducts");

    if (savedProducts) {
        displayProducts(JSON.parse(savedProducts));
    } else {
        let shuffledProducts = [...productData].sort(() => 0.5 - Math.random());
        let selectedProducts = shuffledProducts.slice(0, 6); 
        localStorage.setItem("defaultProducts", JSON.stringify(selectedProducts));
        displayProducts(selectedProducts);
    }
    
    if (featuredProductsContainer) {
        loadFeaturedProducts();
    }
}

function loadFeaturedProducts() {
    if (!featuredProductsContainer) return;
    
    const featuredItems = [];
    const categories = ["Laptop", "Phone", "Camera", "Speaker"];
    
    categories.forEach(category => {
        const categoryProducts = productData.filter(p => p.category === category);
        if (categoryProducts.length > 0) {
            featuredItems.push(categoryProducts.sort((a, b) => b.price - a.price)[0]);
            
            if (categoryProducts.length > 1) {
                featuredItems.push(categoryProducts.sort((a, b) => b.price - a.price)[1]);
            }
        }
    });
    
    featuredItems.forEach(product => {
        let item = document.createElement("div");
        item.className = "product hover-lift";
        item.innerHTML = `
            <a href="product_specs.html?id=${product.id}" class="product-link">
                <div class="product-img-container">
                    <img src="${product.image}" alt="${product.name}" class="product-img">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-description">${product.description.substring(0, 80)}...</p>
                    <p class="price">$${product.price.toFixed(2)}</p>
                </div>
            </a>
        `;
        featuredProductsContainer.appendChild(item);
    });
    
    initFeaturedSlider();
}

function initFeaturedSlider() {
    const slider = document.getElementById('featured-products');
    const paginationContainer = document.querySelector('.pagination-dots');
    const prevButton = document.getElementById('prev-featured');
    const nextButton = document.getElementById('next-featured');
    
    if (!slider || !paginationContainer || !prevButton || !nextButton) return;
    
    const totalProducts = slider.children.length;
    const productsPerPage = getProductsPerPage();
    const totalPages = Math.ceil(totalProducts / productsPerPage);
    let currentPage = 0;
    
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('div');
        dot.className = i === 0 ? 'dot active' : 'dot';
        dot.setAttribute('data-index', i);
        dot.addEventListener('click', () => {
            goToPage(i);
        });
        paginationContainer.appendChild(dot);
    }
    
    prevButton.addEventListener('click', () => {
        goToPage(currentPage - 1);
    });
    
    nextButton.addEventListener('click', () => {
        goToPage(currentPage + 1);
    });
    
    updateSlider();
    
    function getProductsPerPage() {
        if (window.innerWidth < 768) {
            return 1; 
        } else if (window.innerWidth < 992) {
            return 2; 
        } else if (window.innerWidth < 1200) {
            return 3; 
        } else {
            return 4;
        }
    }
    
    function updateSlider() {
        const slideWidth = document.querySelector('.product').offsetWidth;
        const gap = 32;
        const translateX = -(currentPage * (slideWidth + gap) * productsPerPage);
        
        slider.style.transform = `translateX(${translateX}px)`;
    
        prevButton.style.opacity = currentPage === 0 ? '0.5' : '1';
        prevButton.style.pointerEvents = currentPage === 0 ? 'none' : 'auto';
    
        nextButton.style.opacity = currentPage >= totalPages - 1 ? '0.5' : '1';
        nextButton.style.pointerEvents = currentPage >= totalPages - 1 ? 'none' : 'auto';
    
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentPage);
        });
    }
    
    
    function goToPage(pageIndex) {
        if (pageIndex < 0) {
            pageIndex = 0;
        } else if (pageIndex >= totalPages) {
            pageIndex = totalPages - 1;
        }
        
        currentPage = pageIndex;
        updateSlider();
    }
    
    window.addEventListener('resize', () => {
        const newProductsPerPage = getProductsPerPage();
        if (productsPerPage !== newProductsPerPage) {
            const productsPerPage = newProductsPerPage;
            const newTotalPages = Math.ceil(totalProducts / productsPerPage);
            
            if (currentPage >= newTotalPages) {
                currentPage = newTotalPages - 1;
            }
            
            paginationContainer.innerHTML = '';
            for (let i = 0; i < newTotalPages; i++) {
                const dot = document.createElement('div');
                dot.className = i === currentPage ? 'dot active' : 'dot';
                dot.setAttribute('data-index', i);
                dot.addEventListener('click', () => {
                    goToPage(i);
                });
                paginationContainer.appendChild(dot);
            }
            
            updateSlider();
        }
    });
}

function loadSavedProducts() {
    let savedCategory = localStorage.getItem("selectedCategory");
    let savedProducts = localStorage.getItem("filteredProducts");

    if (savedCategory && savedProducts) {
        displayProducts(JSON.parse(savedProducts));
        updateCategoryText(savedCategory);
        highlightActiveCategory(savedCategory);
    } else {
        loadDefaultProducts(); 
    }
}

function displayProducts(filteredProducts) {
    const productList = document.getElementById("product-list");
    if (!productList) return; 
    
    productList.innerHTML = "";

    if (filteredProducts.length === 0) {
        productList.innerHTML = "<p class='empty-message'>No products available in this category.</p>";
        return;
    }

    filteredProducts.forEach((product, index) => {
        let item = document.createElement("div");
        item.className = "product hover-lift";
        item.style.animationDelay = `${index * 0.1}s`;
        
        const rating = (Math.random() * (5 - 4) + 4).toFixed(1);
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        
        let starsHTML = '';
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                starsHTML += '<i class="fas fa-star"></i>';
            } else if (i === fullStars && hasHalfStar) {
                starsHTML += '<i class="fas fa-star-half-alt"></i>';
            } else {
                starsHTML += '<i class="far fa-star"></i>';
            }
        }
        
        let badge = '';
        if (product.price > 999) {
            badge = '<div class="product-badge premium">Premium</div>';
        } else if (product.price < 200) {
            badge = '<div class="product-badge sale">Sale</div>';
        } else {
            badge = `<div class="product-badge">${product.category}</div>`;
        }

        item.innerHTML = `
            ${badge}
            <div class="product-img-container">
                <img class="product-img" src="${product.image}" alt="${product.name}">
                <div class="product-overlay">
                    <button onclick="viewSpecs(${product.id})" class="quick-view-btn">
                        <i class="fas fa-eye"></i> Quick View
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.category}</div>
                <h2 class="product-title">${product.name}</h2>
                <div class="product-rating">
                    <div class="stars">${starsHTML}</div>
                    <span class="rating-count">${rating}</span>
                </div>
                <p class="product-description">${product.description.substring(0, 80)}${product.description.length > 80 ? '...' : ''}</p>
                <div class="product-price-row">
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <div class="stock-status"><i class="fas fa-check-circle"></i> In Stock</div>
                </div>
                <div class="button-container">
                    <button onclick="addToCart(${product.id})" class="add-to-cart">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <button onclick="viewSpecs(${product.id})" class="view-specs">
                        <i class="fas fa-info-circle"></i> Details
                    </button>
                </div>
            </div>
        `;
        productList.appendChild(item);
    });
}

function viewSpecs(productId) {
    window.location.href = `product_specs.html?id=${productId}`;
}

function filterProducts(category) {
    let filteredProducts;
    
    if (category === "all") {
        filteredProducts = [...productData];
    } else {
        filteredProducts = productData.filter(p => p.category === category);
    }
    
    displayProducts(filteredProducts);
    localStorage.setItem("selectedCategory", category);
    localStorage.setItem("filteredProducts", JSON.stringify(filteredProducts));

    updateCategoryText(category);
    highlightActiveCategory(category);
}

function updateCategoryText(category) {
    if (!categoryText) return;
    
    if (category === "all") {
        categoryText.innerHTML = "All Products <span class='category-count'>(" + productData.length + " items)</span>";
    } else {
        const count = productData.filter(p => p.category === category).length;
        categoryText.innerHTML = category + " <span class='category-count'>(" + count + " items)</span>";
    }
}

function highlightActiveCategory(category) {
    document.querySelectorAll(".category-btn").forEach(button => {
        button.classList.remove("active");
        if (button.dataset.category === category) {
            button.classList.add("active");

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    });
}

// Cart
function updateCartCount() {
    const cartCountElements = document.querySelectorAll(".cart-count, #cart-count");
    if (cartCountElements.length === 0) return;
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartCountElements.forEach(element => {
        element.innerText = cart.length;
    });
}

function addToCart(id) {
    const product = typeof getProductById === 'function' 
        ? getProductById(id) 
        : productData.find(p => p.id === id);
        
    if (!product) return;
    
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    showNotification(`${product.name} has been added to your cart!`);
    
    document.querySelectorAll(".cart-count").forEach(element => {
        element.classList.add("cart-pulse");
        setTimeout(() => element.classList.remove("cart-pulse"), 500);
    });
}

function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex(product => product.id === id);
    
    if (index !== -1) {
        const removedProduct = cart[index];
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        return removedProduct;
    }
    
    return null;
}

// Notification
function showNotification(message) {
    const existingNotification = document.getElementById('notification');
    if (existingNotification) {
        existingNotification.classList.remove("show");
        setTimeout(() => {
            if (existingNotification.parentNode) {
                existingNotification.parentNode.removeChild(existingNotification);
            }
        }, 400);
    }
    const notification = document.createElement("div");
    notification.id = "notification";
    notification.className = "notification";
    notification.innerHTML = message;
    
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.classList.add("show");
    }, 10);
    setTimeout(() => {
        notification.classList.remove("show");
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 400);
    }, 4000);
}

function initAuth() {
    console.log("Initializing authentication...");
    const signInBtn = document.getElementById("sign-in-btn");
    const modal = document.getElementById("sign-in-modal");
    const submitSignIn = document.getElementById("submit-sign-in");
    const closeModal = document.getElementById("close-modal");
    console.log("Auth elements found:", {
        signInBtn: !!signInBtn,
        modal: !!modal,
        submitSignIn: !!submitSignIn,
        closeModal: !!closeModal
    });
    
    if (!signInBtn || !modal || !submitSignIn || !closeModal) {
        console.error("Authentication elements not found in the DOM");
        return;
    }
    
    let loggedInUser = localStorage.getItem("username");
    if (loggedInUser) {
        console.log("User already logged in:", loggedInUser);
        updateUI(loggedInUser);
    }
    signInBtn.addEventListener("click", function(e) {
        console.log("Sign-in button clicked");
        e.preventDefault(); 
        modal.style.display = "flex"; 
        modal.classList.add("open"); 
        const usernameField = document.getElementById("username");
        if (usernameField) {
            usernameField.focus();
        }
    });

    closeModal.addEventListener("click", function() {
        console.log("Close modal button clicked");
        modal.classList.remove("open");
        setTimeout(() => {
            modal.style.display = "none";
        }, 300); 
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            console.log("Clicked outside modal");
            modal.classList.remove("open");
            setTimeout(() => {
                modal.style.display = "none";
            }, 300); 
        }
    });
    
    submitSignIn.addEventListener("click", function() {
        console.log("Submit sign-in button clicked");
        handleSignIn();
    });
    
    const passwordField = document.getElementById("password");
    if (passwordField) {
        passwordField.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                console.log("Enter key pressed in password field");
                handleSignIn();
            }
        });
    }

    let signOutBtn = document.getElementById("sign-out-btn");
    if (!signOutBtn && loggedInUser) {
        signOutBtn = createSignOutButton();
    }
    
    console.log("Authentication initialization complete");
}

function createSignOutButton() {
    const signInBtn = document.getElementById("sign-in-btn");
    if (!signInBtn) return null;
    
    const signOutBtn = document.createElement("a");
    signOutBtn.id = "sign-out-btn";
    signOutBtn.href = "#";
    signOutBtn.className = "sign-in-btn";
    signOutBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i><span>Sign Out</span>';
    signInBtn.parentNode.insertBefore(signOutBtn, signInBtn.nextSibling);
    signOutBtn.addEventListener("click", function(e) {
        e.preventDefault();
        localStorage.removeItem("username");
        updateUI(null);
        showNotification("You have signed out successfully.");
    });
    
    return signOutBtn;
}

function handleSignIn() {
    const modal = document.getElementById("sign-in-modal");
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        showNotification("Username and Password are required.");
        return;
    }

    localStorage.setItem("username", username);

    updateUI(username);
    
    showNotification(`Welcome, ${username}!`);
    
    modal.classList.remove("open");
    
    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
    
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

function updateUI(user) {
    const signInBtn = document.getElementById("sign-in-btn");
    let signOutBtn = document.getElementById("sign-out-btn");
    const vlambText = document.getElementById("vlamb-logo")
    
    if (!signInBtn) return;
    
    if (user) {
        signInBtn.style.display = "none";

        if (!signOutBtn) {
            signOutBtn = createSignOutButton();
        } else {
            signOutBtn.style.display = "block";
        }
        
        let welcomeSpan = document.getElementById("welcome-span");
        if (!welcomeSpan) {
            welcomeSpan = document.createElement("span");
            welcomeSpan.id = "welcome-span";
            welcomeSpan.className = "welcome-text";
            welcomeSpan.textContent = `Welcome, ${user}!`;
            vlambText.parentNode.insertBefore(welcomeSpan, vlambText.nextSibling);
        } else {
            welcomeSpan.textContent = `Welcome, ${user}!`;
            welcomeSpan.style.display = "inline";
        }
    } else {
        signInBtn.style.display = "block";
        
        if (signOutBtn) {
            signOutBtn.style.display = "none";
        }
        
        const welcomeSpan = document.getElementById("welcome-span");
        if (welcomeSpan) {
            welcomeSpan.style.display = "none";
        }
    }
}

// Search
function initProductControls() {
    const searchInput = document.getElementById("search-input");
    const searchBtn = document.getElementById("search-btn");
    const sortSelect = document.getElementById("sort-select");
    
    if (searchInput && searchBtn) {
        searchBtn.addEventListener("click", () => {
            const searchTerm = searchInput.value.trim().toLowerCase();
            if (searchTerm === "") return;
            
            const savedCategory = localStorage.getItem("selectedCategory") || "all";
            let productsToSearch = savedCategory === "all" 
                ? productData 
                : productData.filter(p => p.category === savedCategory);
            
            const searchResults = productsToSearch.filter(p => 
                p.name.toLowerCase().includes(searchTerm) || 
                p.description.toLowerCase().includes(searchTerm)
            );
            
            displayProducts(searchResults);
            
            if (searchResults.length === 0) {
                showNotification("No products found matching your search.");
            }
        });
        
        searchInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                searchBtn.click();
            }
        });
    }
    
    if (sortSelect) {
        sortSelect.addEventListener("change", () => {
            const savedProducts = JSON.parse(localStorage.getItem("filteredProducts")) || productData;
            const sortBy = sortSelect.value;
            
            let sortedProducts = [...savedProducts];
            
            switch(sortBy) {
                case "price-low":
                    sortedProducts.sort((a, b) => a.price - b.price);
                    break;
                case "price-high":
                    sortedProducts.sort((a, b) => b.price - a.price);
                    break;
                case "name":
                    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
                    break;
            }
            
            displayProducts(sortedProducts);
        });
    }
}

// newsletter
function handleSubscribe(email) {
    if (!email || !email.includes('@') || !email.includes('.')) {
        showNotification("Please enter a valid email address.");
        return false;
    }
    
    showNotification(`Thank you for subscribing with ${email}. You'll receive the latest updates soon!`);
    return true;
}

function initNewsletterForms() {
    const mainNewsletterForm = document.getElementById("main-newsletter-form");
    if (mainNewsletterForm) {
        mainNewsletterForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const emailInput = document.getElementById("main-newsletter-email");
            if (handleSubscribe(emailInput.value)) {
                emailInput.value = "";
            }
        });
    }

// Footer newsletter
    const footerSubscribeBtn = document.getElementById("footer-subscribe-btn");
    if (footerSubscribeBtn) {
        footerSubscribeBtn.addEventListener("click", function() {
            const emailInput = document.getElementById("footer-newsletter-email");
            if (handleSubscribe(emailInput.value)) {
                emailInput.value = ""; 
            }
        });
    }
    
    const footerEmailInput = document.getElementById("footer-newsletter-email");
    if (footerEmailInput) {
        footerEmailInput.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                e.preventDefault();
                const subscribeBtn = document.getElementById("footer-subscribe-btn");
                if (subscribeBtn) {
                    subscribeBtn.click();
                }
            }
        });
    }
}


document.addEventListener("DOMContentLoaded", function () {
    updateCartCount();
    initAuth();
    initProductControls();
    initNewsletterForms();

    document.querySelectorAll(".category-btn").forEach(button => {
        button.addEventListener("click", function () {
            let category = this.dataset.category;
            filterProducts(category);
        });
    });
    
    if (document.getElementById("product-list")) {
        loadSavedProducts();
    }
    
    if (document.getElementById("featured-products")) {
        loadFeaturedProducts();
    }
    
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    
    if (categoryParam) {
        const normalizedCategory = categoryParam.toLowerCase() === "all" ? "all" : categoryParam;
        filterProducts(normalizedCategory);
    }
});
