/* ==========================================
   NOVASHOP
   COMPLETE FRONTEND JAVASCRIPT
========================================== */


/* ================= PRODUCTS ================= */

const products = [

    {
        id: 1,
        name: "AirPods Pro 2",
        category: "electronics",
        categoryName: "Elektronika",
        price: 1899000,
        oldPrice: 2199000,
        rating: 4.9,
        reviews: 328,
        badge: "-14%",
        image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=85",
        description: "Yuqori sifatli ovoz, Active Noise Cancellation va uzoq batareya quvvatiga ega premium simsiz quloqchin."
    },

    {
        id: 2,
        name: "MacBook Air M3",
        category: "electronics",
        categoryName: "Elektronika",
        price: 15990000,
        oldPrice: 16990000,
        rating: 4.9,
        reviews: 215,
        badge: "-6%",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=85",
        description: "Yengil va kuchli MacBook Air. M3 chip, yuqori aniqlikdagi ekran va professional ishlash."
    },

    {
        id: 3,
        name: "iPhone 16 Pro",
        category: "electronics",
        categoryName: "Elektronika",
        price: 13990000,
        oldPrice: 14990000,
        rating: 4.8,
        reviews: 492,
        badge: "-7%",
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=900&q=85",
        description: "Titan korpus, kuchli kamera va zamonaviy Pro darajadagi imkoniyatlarga ega smartfon."
    },

    {
        id: 4,
        name: "Smart Watch Ultra",
        category: "electronics",
        categoryName: "Elektronika",
        price: 899000,
        oldPrice: 1099000,
        rating: 4.7,
        reviews: 182,
        badge: "-18%",
        image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=900&q=85",
        description: "Sport, sog‘lom turmush va kundalik foydalanish uchun zamonaviy aqlli soat."
    },

    {
        id: 5,
        name: "Premium Hoodie",
        category: "fashion",
        categoryName: "Moda",
        price: 399000,
        oldPrice: 499000,
        rating: 4.8,
        reviews: 145,
        badge: "-20%",
        image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
        description: "Yumshoq premium matodan tayyorlangan zamonaviy hoodie. Kundalik kiyinish uchun juda qulay."
    },

    {
        id: 6,
        name: "Classic Sneakers",
        category: "fashion",
        categoryName: "Moda",
        price: 649000,
        oldPrice: 799000,
        rating: 4.8,
        reviews: 237,
        badge: "-19%",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
        description: "Minimalistik dizayn va qulay taglikka ega zamonaviy krossovkalar."
    },

    {
        id: 7,
        name: "Minimal Lamp",
        category: "home",
        categoryName: "Uy",
        price: 279000,
        oldPrice: 349000,
        rating: 4.6,
        reviews: 94,
        badge: "-20%",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85",
        description: "Uy va ish stolingiz uchun minimalistik zamonaviy chiroq."
    },

    {
        id: 8,
        name: "Modern Chair",
        category: "home",
        categoryName: "Uy",
        price: 899000,
        oldPrice: 999000,
        rating: 4.7,
        reviews: 83,
        badge: "-10%",
        image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=900&q=85",
        description: "Zamonaviy interyer uchun qulay va chiroyli dizayndagi kreslo."
    },

    {
        id: 9,
        name: "Football Pro",
        category: "sport",
        categoryName: "Sport",
        price: 229000,
        oldPrice: 299000,
        rating: 4.8,
        reviews: 117,
        badge: "-23%",
        image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=900&q=85",
        description: "Mashg‘ulotlar va professional o‘yinlar uchun sifatli futbol to‘pi."
    },

    {
        id: 10,
        name: "Gaming Keyboard",
        category: "electronics",
        categoryName: "Elektronika",
        price: 599000,
        oldPrice: 699000,
        rating: 4.9,
        reviews: 306,
        badge: "-14%",
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
        description: "Tezkor tugmalar, RGB yoritish va qulay mexanik dizaynga ega gaming klaviatura."
    },

    {
        id: 11,
        name: "Leather Backpack",
        category: "fashion",
        categoryName: "Moda",
        price: 459000,
        oldPrice: 559000,
        rating: 4.7,
        reviews: 129,
        badge: "-18%",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
        description: "Laptop va kundalik buyumlar uchun premium charm ryukzak."
    },

    {
        id: 12,
        name: "Sport Bottle",
        category: "sport",
        categoryName: "Sport",
        price: 119000,
        oldPrice: 159000,
        rating: 4.6,
        reviews: 76,
        badge: "-25%",
        image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85",
        description: "Sport va sayohat uchun yengil, mustahkam va zamonaviy suv idishi."
    }

];


/* ================= STATE ================= */

let cart = JSON.parse(localStorage.getItem("novashop_cart")) || [];

let favorites =
    JSON.parse(localStorage.getItem("novashop_favorites")) || [];

let currentCategory = "all";

let loginMode = false;


/* ================= HELPERS ================= */

function formatPrice(price) {

    return new Intl.NumberFormat("uz-UZ").format(price) + " so'm";

}


function saveCart() {

    localStorage.setItem(
        "novashop_cart",
        JSON.stringify(cart)
    );

}


function saveFavorites() {

    localStorage.setItem(
        "novashop_favorites",
        JSON.stringify(favorites)
    );

}


/* ================= RENDER PRODUCTS ================= */

function renderProducts(list = null) {

    const grid = document.getElementById("productsGrid");

    const empty = document.getElementById("emptyState");

    let data = list;

    if (!data) {

        data = products.filter(product => {

            if (currentCategory === "all") {
                return true;
            }

            return product.category === currentCategory;

        });

    }

    grid.innerHTML = "";

    document.getElementById("resultText").textContent =
        `${data.length} ta mahsulot`;

    if (data.length === 0) {

        empty.style.display = "block";

        return;

    }

    empty.style.display = "none";


    data.forEach(product => {

        const isFavorite =
            favorites.includes(product.id);

        grid.innerHTML += `

            <article class="product-card">

                <div
                    class="product-image"
                    onclick="openProduct(${product.id})"
                >

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                    <span class="product-badge">
                        ${product.badge}
                    </span>

                    <button
                        class="favorite ${isFavorite ? "active" : ""}"
                        onclick="event.stopPropagation(); toggleFavorite(${product.id})"
                    >
                        ${isFavorite ? "♥" : "♡"}
                    </button>

                </div>

                <div class="product-info">

                    <span class="product-category">
                        ${product.categoryName}
                    </span>

                    <h3
                        onclick="openProduct(${product.id})"
                        style="cursor:pointer"
                    >
                        ${product.name}
                    </h3>

                    <div class="rating">
                        ★ ${product.rating}
                        <span>(${product.reviews})</span>
                    </div>

                    <div class="price-row">

                        <div class="price">

                            <strong>
                                ${formatPrice(product.price)}
                            </strong>

                            <span class="old-price">
                                ${formatPrice(product.oldPrice)}
                            </span>

                        </div>

                        <button
                            class="add-cart"
                            onclick="addToCart(${product.id})"
                        >
                            +
                        </button>

                    </div>

                </div>

            </article>

        `;

    });

}


/* ================= CATEGORY ================= */

function filterCategory(category, button) {

    currentCategory = category;

    document.querySelectorAll(".category")
        .forEach(item => item.classList.remove("active"));

    button.classList.add("active");

    const search =
        document.getElementById("searchInput").value
            .toLowerCase()
            .trim();

    let data = products.filter(product => {

        const categoryMatch =
            category === "all" ||
            product.category === category;

        const searchMatch =
            product.name.toLowerCase().includes(search);

        return categoryMatch && searchMatch;

    });

    renderProducts(data);

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* ================= SEARCH ================= */

function searchProducts() {

    const search =
        document.getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();

    const data = products.filter(product => {

        const categoryMatch =
            currentCategory === "all" ||
            product.category === currentCategory;

        return (
            categoryMatch &&
            (
                product.name.toLowerCase().includes(search) ||
                product.categoryName.toLowerCase().includes(search)
            )
        );

    });

    renderProducts(data);

}


function clearSearch() {

    document.getElementById("searchInput").value = "";

    searchProducts();

}


/* ================= CART ================= */

function addToCart(id) {

    const existing = cart.find(
        item => item.id === id
    );

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            id: id,
            quantity: 1
        });

    }

    saveCart();

    updateCartCount();

    showToast("Mahsulot savatga qo‘shildi 🛒");

}


function updateCartCount() {

    const count =
        cart.reduce(
            (total, item) => total + item.quantity,
            0
        );

    document.getElementById("cartCount")
        .textContent = count;

}


function openCart() {

    renderCart();

    document
        .getElementById("cartModal")
        .classList.add("show");

}


function renderCart() {

    const container =
        document.getElementById("cartItems");

    if (cart.length === 0) {

        container.innerHTML = `
            <div class="empty-state" style="display:block;padding:40px 0">
                <div>🛒</div>
                <h3>Savat bo‘sh</h3>
                <p>Mahsulot qo‘shing.</p>
            </div>
        `;

        document.getElementById("cartTotal")
            .textContent = "0 so'm";

        return;

    }


    let total = 0;

    container.innerHTML = "";


    cart.forEach(item => {

        const product =
            products.find(p => p.id === item.id);

        const itemTotal =
            product.price * item.quantity;

        total += itemTotal;


        container.innerHTML += `

            <div class="cart-item">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <div>

                    <h4>${product.name}</h4>

                    <small>
                        ${formatPrice(product.price)}
                    </small>

                    <div class="quantity">

                        <button
                            onclick="changeQuantity(${product.id}, -1)"
                        >
                            −
                        </button>

                        <strong>
                            ${item.quantity}
                        </strong>

                        <button
                            onclick="changeQuantity(${product.id}, 1)"
                        >
                            +
                        </button>

                    </div>

                </div>

                <button
                    class="remove"
                    onclick="removeFromCart(${product.id})"
                >
                    🗑
                </button>

            </div>

        `;

    });


    document.getElementById("cartTotal")
        .textContent = formatPrice(total);

}


function changeQuantity(id, amount) {

    const item =
        cart.find(item => item.id === id);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {

        cart = cart.filter(
            item => item.id !== id
        );

    }

    saveCart();

    updateCartCount();

    renderCart();

}


function removeFromCart(id) {

    cart =
        cart.filter(item => item.id !== id);

    saveCart();

    updateCartCount();

    renderCart();

    showToast("Mahsulot savatdan olib tashlandi");

}


/* ================= PRODUCT DETAIL ================= */

function openProduct(id) {

    const product =
        products.find(p => p.id === id);

    if (!product) return;


    const isFavorite =
        favorites.includes(product.id);


    document.getElementById("productDetail")
        .innerHTML = `

        <div class="product-detail-layout">

            <div class="detail-image">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

            </div>

            <div class="detail-info">

                <span class="detail-category">
                    ${product.categoryName}
                </span>

                <h2>
                    ${product.name}
                </h2>

                <div class="rating">
                    ★ ${product.rating}
                    <span>
                        (${product.reviews} ta sharh)
                    </span>
                </div>

                <p class="detail-description">
                    ${product.description}
                </p>

                <div>

                    <span class="detail-price">
                        ${formatPrice(product.price)}
                    </span>

                    <span class="detail-old">
                        ${formatPrice(product.oldPrice)}
                    </span>

                </div>

                <div class="detail-actions">

                    <button
                        class="secondary-btn"
                        onclick="toggleFavorite(${product.id}); openProduct(${product.id})"
                    >
                        ${isFavorite ? "♥ Sevimlidan olib tashlash" : "♡ Sevimliga qo‘shish"}
                    </button>

                    <button
                        class="primary-btn"
                        onclick="addToCart(${product.id}); closeModal('productModal')"
                    >
                        🛒 Savatga
                    </button>

                </div>

            </div>

        </div>

    `;


    document
        .getElementById("productModal")
        .classList.add("show");

}


/* ================= FAVORITES ================= */

function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites =
            favorites.filter(item => item !== id);

        showToast("Sevimlilardan olib tashlandi");

    } else {

        favorites.push(id);

        showToast("Sevimlilarga qo‘shildi ❤️");

    }

    saveFavorites();

    updateFavoriteCount();

    renderProducts();

}


function updateFavoriteCount() {

    document.getElementById("favoriteCount")
        .textContent = favorites.length;

}


function openFavorites() {

    const container =
        document.getElementById("favoriteItems");

    const favoriteProducts =
        products.filter(product =>
            favorites.includes(product.id)
        );


    if (favoriteProducts.length === 0) {

        container.innerHTML = `
            <div class="empty-state" style="display:block;padding:40px 0">
                <div>❤️</div>
                <h3>Sevimlilar bo‘sh</h3>
                <p>Yoqtirgan mahsulotlaringiz shu yerda chiqadi.</p>
            </div>
        `;

    } else {

        container.innerHTML = "";

        favoriteProducts.forEach(product => {

            container.innerHTML += `

                <div class="favorite-product">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                    >

                    <div class="favorite-product-info">

                        <h4>
                            ${product.name}
                        </h4>

                        <p>
                            ${formatPrice(product.price)}
                        </p>

                    </div>

                    <button
                        onclick="toggleFavorite(${product.id})"
                    >
                        ♥
                    </button>

                </div>

            `;

        });

    }


    document
        .getElementById("favoritesModal")
        .classList.add("show");

}


/* ================= AUTH ================= */

function openAuth() {

    document
        .getElementById("authModal")
        .classList.add("show");

}


function switchAuth() {

    loginMode = !loginMode;

    const title =
        document.getElementById("authTitle");

    const description =
        document.getElementById("authDescription");

    const name =
        document.getElementById("authName");

    const button =
        document.querySelector("#authForm .primary-btn");

    const switchButton =
        document.querySelector(".switch-auth");


    if (loginMode) {

        title.textContent = "Hisobingizga kiring";

        description.textContent =
            "Hisobingizga kirib xaridni davom ettiring.";

        name.parentElement.style.display = "none";

        name.required = false;

        button.textContent = "Kirish →";

        switchButton.textContent =
            "Hisobingiz yo‘qmi? Ro‘yxatdan o‘ting";

    } else {

        title.textContent =
            "Yangi hisob yarating";

        description.textContent =
            "NovaShop bilan xarid qilishni boshlang.";

        name.parentElement.style.display = "block";

        name.required = true;

        button.textContent =
            "Ro‘yxatdan o‘tish →";

        switchButton.textContent =
            "Hisobingiz bormi? Kirish";

    }

}


document
    .getElementById("authForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("authName").value;

        const email =
            document.getElementById("authEmail").value;


        localStorage.setItem(
            "novashop_user",
            JSON.stringify({
                name: name,
                email: email
            })
        );


        closeModal("authModal");

        showToast(
            loginMode
                ? "Xush kelibsiz 👋"
                : "Hisob muvaffaqiyatli yaratildi 🎉"
        );

    });


/* ================= CHECKOUT ================= */

function checkout() {

    if (cart.length === 0) {

        showToast("Avval mahsulot qo‘shing");

        return;

    }


    closeModal("cartModal");

    document
        .getElementById("checkoutModal")
        .classList.add("show");

}


document
    .getElementById("checkoutForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("orderName").value;


        cart = [];

        saveCart();

        updateCartCount();


        closeModal("checkoutModal");


        showToast(
            `Rahmat, ${name}! Buyurtmangiz qabul qilindi 🎉`
        );


        document
            .getElementById("checkoutForm")
            .reset();

    });


/* ================= MODALS ================= */

function closeModal(id) {

    document
        .getElementById(id)
        .classList.remove("show");

}


document.querySelectorAll(".modal")
    .forEach(modal => {

        modal.addEventListener("click", function(event) {

            if (event.target === modal) {

                modal.classList.remove("show");

            }

        });

    });


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        document
            .querySelectorAll(".modal.show")
            .forEach(modal =>
                modal.classList.remove("show")
            );

    }

});


/* ================= THEME ================= */

function toggleTheme() {

    document.body.classList.toggle("dark");

    const dark =
        document.body.classList.contains("dark");


    document.getElementById("themeIcon")
        .textContent = dark ? "☀️" : "🌙";


    localStorage.setItem(
        "novashop_theme",
        dark ? "dark" : "light"
    );

}


if (
    localStorage.getItem("novashop_theme") === "dark"
) {

    document.body.classList.add("dark");

    document.getElementById("themeIcon")
        .textContent = "☀️";

}


/* ================= MOBILE MENU ================= */

function toggleMobileMenu() {

    document
        .getElementById("mobileMenu")
        .classList.toggle("show");

}


function closeMobileMenu() {

    document
        .getElementById("mobileMenu")
        .classList.remove("show");

}


/* ================= NAVIGATION ================= */

function scrollToProducts() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function scrollToCategories() {

    document
        .getElementById("categories")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function goHome() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ================= TOAST ================= */

let toastTimer;


function showToast(message) {

    const toast =
        document.getElementById("toast");

    document.getElementById("toastText")
        .textContent = message;


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}


/* ================= START ================= */

renderProducts();

updateCartCount();

updateFavoriteCount();
