/* =========================================
   SHOPUZ ONLINE STORE
========================================= */


/* PRODUCTS */

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
        emoji: "🎧",
        description:
            "Yuqori sifatli ovoz, shovqinni faol kamaytirish va qulay dizayn bilan zamonaviy simsiz quloqchin."
    },

    {
        id: 2,
        name: "MacBook Air M3",
        category: "electronics",
        categoryName: "Elektronika",
        price: 15990000,
        oldPrice: 16990000,
        rating: 4.9,
        reviews: 142,
        emoji: "💻",
        description:
            "Yengil va kuchli noutbuk. Kundalik ishlar, dasturlash va kreativ loyihalar uchun mos."
    },

    {
        id: 3,
        name: "iPhone 16 Pro",
        category: "electronics",
        categoryName: "Elektronika",
        price: 13990000,
        oldPrice: 14990000,
        rating: 4.8,
        reviews: 521,
        emoji: "📱",
        description:
            "Premium dizayn, kuchli kamera va yuqori unumdorlikka ega zamonaviy smartfon."
    },

    {
        id: 4,
        name: "Smart Watch Ultra",
        category: "accessories",
        categoryName: "Aksessuarlar",
        price: 899000,
        oldPrice: 1099000,
        rating: 4.7,
        reviews: 189,
        emoji: "⌚",
        description:
            "Sport, kundalik foydalanish va sog‘lom turmush tarzi uchun aqlli soat."
    },

    {
        id: 5,
        name: "Premium Hoodie",
        category: "fashion",
        categoryName: "Kiyimlar",
        price: 399000,
        oldPrice: 499000,
        rating: 4.8,
        reviews: 97,
        emoji: "🧥",
        description:
            "Yumshoq va qulay premium hoodie. Kundalik kiyish uchun zamonaviy model."
    },

    {
        id: 6,
        name: "Classic Sneakers",
        category: "fashion",
        categoryName: "Kiyimlar",
        price: 649000,
        oldPrice: 799000,
        rating: 4.9,
        reviews: 243,
        emoji: "👟",
        description:
            "Yengil va qulay krossovka. Kundalik yurish va sport uchun mos."
    },

    {
        id: 7,
        name: "Minimal Lamp",
        category: "home",
        categoryName: "Uy uchun",
        price: 279000,
        oldPrice: 349000,
        rating: 4.6,
        reviews: 78,
        emoji: "💡",
        description:
            "Minimalistik dizayndagi stol chirog‘i. Ish stoli va yotoqxona uchun ajoyib tanlov."
    },

    {
        id: 8,
        name: "Modern Chair",
        category: "home",
        categoryName: "Uy uchun",
        price: 899000,
        oldPrice: 999000,
        rating: 4.7,
        reviews: 65,
        emoji: "🪑",
        description:
            "Uy va ofis uchun zamonaviy, qulay va mustahkam kreslo."
    },

    {
        id: 9,
        name: "Football Pro",
        category: "sport",
        categoryName: "Sport",
        price: 229000,
        oldPrice: 299000,
        rating: 4.8,
        reviews: 120,
        emoji: "⚽",
        description:
            "Professional darajadagi futbol to‘pi. Mashg‘ulot va o‘yinlar uchun."
    },

    {
        id: 10,
        name: "Gaming Keyboard",
        category: "electronics",
        categoryName: "Elektronika",
        price: 599000,
        oldPrice: 699000,
        rating: 4.8,
        reviews: 311,
        emoji: "⌨️",
        description:
            "Tezkor va qulay mexanik klaviatura. Gaming va dasturlash uchun mos."
    },

    {
        id: 11,
        name: "Leather Backpack",
        category: "accessories",
        categoryName: "Aksessuarlar",
        price: 459000,
        oldPrice: 559000,
        rating: 4.7,
        reviews: 84,
        emoji: "🎒",
        description:
            "Noutbuk va kundalik buyumlar uchun zamonaviy va mustahkam ryukzak."
    },

    {
        id: 12,
        name: "Sport Bottle",
        category: "sport",
        categoryName: "Sport",
        price: 119000,
        oldPrice: 159000,
        rating: 4.6,
        reviews: 53,
        emoji: "🥤",
        description:
            "Sport va sayohat uchun qulay, yengil suv idishi."
    }
];


/* STATE */

let cart = JSON.parse(localStorage.getItem("shopuz_cart")) || [];

let currentCategory = "all";

let authMode = "login";


/* DOM */

const productsGrid = document.getElementById("productsGrid");
const noProducts = document.getElementById("noProducts");
const searchInput = document.getElementById("searchInput");
const cartCount = document.getElementById("cartCount");


/* FORMAT PRICE */

function formatPrice(number) {
    return new Intl.NumberFormat("uz-UZ").format(number) + " so‘m";
}


/* SAVE CART */

function saveCart() {
    localStorage.setItem("shopuz_cart", JSON.stringify(cart));
}


/* RENDER PRODUCTS */

function renderProducts() {

    const search = searchInput.value.toLowerCase().trim();

    const filtered = products.filter(product => {

        const categoryMatch =
            currentCategory === "all" ||
            product.category === currentCategory;

        const searchMatch =
            product.name.toLowerCase().includes(search) ||
            product.categoryName.toLowerCase().includes(search);

        return categoryMatch && searchMatch;
    });


    productsGrid.innerHTML = "";


    if (filtered.length === 0) {
        noProducts.style.display = "block";
        return;
    }

    noProducts.style.display = "none";


    filtered.forEach(product => {

        const discount =
            Math.round(
                ((product.oldPrice - product.price) /
                product.oldPrice) * 100
            );


        const card = document.createElement("div");

        card.className = "product-card";


        card.innerHTML = `
            <div
                class="product-image"
                onclick="openProduct(${product.id})"
            >

                <span class="discount">
                    -${discount}%
                </span>

                <button
                    class="favorite"
                    onclick="toggleFavorite(event, ${product.id})"
                >
                    ♡
                </button>

                <span class="emoji">
                    ${product.emoji}
                </span>
            </div>

            <div class="product-info">

                <div class="product-category">
                    ${product.categoryName}
                </div>

                <div class="product-name">
                    ${product.name}
                </div>

                <div class="rating">
                    ⭐ ${product.rating}
                    <span style="color:#a1a1aa">
                        (${product.reviews})
                    </span>
                </div>

                <div class="price-row">

                    <div>
                        <div class="price">
                            ${formatPrice(product.price)}
                        </div>

                        <span class="old-price">
                            ${formatPrice(product.oldPrice)}
                        </span>
                    </div>

                    <button
                        class="add-cart"
                        onclick="addToCart(${product.id})"
                        title="Savatga qo‘shish"
                    >
                        +
                    </button>

                </div>

            </div>
        `;


        productsGrid.appendChild(card);
    });
}


/* CATEGORY */

document.querySelectorAll(".category").forEach(button => {

    button.addEventListener("click", () => {

        document
            .querySelectorAll(".category")
            .forEach(item => item.classList.remove("active"));

        button.classList.add("active");

        currentCategory =
            button.dataset.category;

        renderProducts();

        document
            .getElementById("products")
            .scrollIntoView({
                behavior: "smooth"
            });
    });
});


/* SEARCH */

searchInput.addEventListener("input", renderProducts);


function focusSearch() {

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

    setTimeout(() => {
        searchInput.focus();
    }, 500);
}


/* ADD TO CART */

function addToCart(id) {

    const existing = cart.find(
        item => item.id === id
    );


    if (existing) {
        existing.quantity++;
    } else {

        const product = products.find(
            item => item.id === id
        );

        cart.push({
            id: product.id,
            quantity: 1
        });
    }


    saveCart();

    updateCartCount();

    showToast("✓", "Mahsulot savatga qo‘shildi");
}


/* CART COUNT */

function updateCartCount() {

    const count = cart.reduce(
        (total, item) =>
            total + item.quantity,
        0
    );

    cartCount.textContent = count;
}


/* OPEN CART */

function openCart() {

    renderCart();

    document
        .getElementById("cartModal")
        .classList.add("show");

    document.body.style.overflow = "hidden";
}


/* CLOSE CART */

function closeCart() {

    document
        .getElementById("cartModal")
        .classList.remove("show");

    document.body.style.overflow = "";
}


/* RENDER CART */

function renderCart() {

    const cartItems =
        document.getElementById("cartItems");

    const emptyCart =
        document.getElementById("emptyCart");

    const cartFooter =
        document.getElementById("cartFooter");

    const cartItemsCount =
        document.getElementById("cartItemsCount");


    cartItems.innerHTML = "";


    if (cart.length === 0) {

        emptyCart.style.display = "block";
        cartFooter.style.display = "none";

        cartItemsCount.textContent =
            "0 ta mahsulot";

        return;
    }


    emptyCart.style.display = "none";
    cartFooter.style.display = "block";


    let total = 0;
    let totalQuantity = 0;


    cart.forEach(item => {

        const product =
            products.find(
                product => product.id === item.id
            );


        const itemTotal =
            product.price * item.quantity;


        total += itemTotal;
        totalQuantity += item.quantity;


        const div =
            document.createElement("div");

        div.className = "cart-item";


        div.innerHTML = `

            <div class="cart-item-image">
                ${product.emoji}
            </div>

            <div class="cart-item-info">

                <h4>
                    ${product.name}
                </h4>

                <span>
                    ${formatPrice(product.price)}
                </span>

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

            <div class="cart-item-right">

                <strong>
                    ${formatPrice(itemTotal)}
                </strong>

                <button
                    class="remove-btn"
                    onclick="removeFromCart(${product.id})"
                >
                    O‘chirish
                </button>

            </div>
        `;


        cartItems.appendChild(div);
    });


    cartItemsCount.textContent =
        `${totalQuantity} ta mahsulot`;

    document.getElementById("cartTotal").textContent =
        formatPrice(total);
}


/* CHANGE QUANTITY */

function changeQuantity(id, amount) {

    const item =
        cart.find(item => item.id === id);

    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                item => item.id !== id
            );
    }


    saveCart();

    updateCartCount();

    renderCart();
}


/* REMOVE */

function removeFromCart(id) {

    cart =
        cart.filter(
            item => item.id !== id
        );

    saveCart();

    updateCartCount();

    renderCart();

    showToast("✓", "Mahsulot o‘chirildi");
}


/* CHECKOUT */

function checkout() {

    if (cart.length === 0) {

        showToast(
            "!",
            "Avval mahsulot qo‘shing"
        );

        return;
    }


    closeCart();

    setTimeout(() => {

        alert(
            "🎉 Buyurtmangiz qabul qilindi!\n\n" +
            "Tez orada siz bilan bog‘lanamiz."
        );

        cart = [];

        saveCart();

        updateCartCount();

    }, 300);
}


/* PRODUCT MODAL */

function openProduct(id) {

    const product =
        products.find(
            product => product.id === id
        );


    const body =
        document.getElementById(
            "productModalBody"
        );


    body.innerHTML = `

        <div class="product-detail">

            <div class="product-detail-image">
                <span>
                    ${product.emoji}
                </span>
            </div>

            <div class="product-detail-info">

                <span class="product-category">
                    ${product.categoryName}
                </span>

                <h2>
                    ${product.name}
                </h2>

                <div class="rating">
                    ⭐ ${product.rating}
                    (${product.reviews} sharh)
                </div>

                <p>
                    ${product.description}
                </p>

                <div class="detail-price">
                    ${formatPrice(product.price)}
                </div>

                <button
                    class="primary-btn"
                    onclick="addToCart(${product.id}); closeProductModal();"
                    style="width:100%"
                >
                    🛒 Savatga qo‘shish
                </button>

            </div>

        </div>
    `;


    document
        .getElementById("productModal")
        .classList.add("show");

    document.body.style.overflow = "hidden";
}


/* CLOSE PRODUCT */

function closeProductModal() {

    document
        .getElementById("productModal")
        .classList.remove("show");

    document.body.style.overflow = "";
}


/* FAVORITE */

function toggleFavorite(event, id) {

    event.stopPropagation();

    const button =
        event.currentTarget;

    button.classList.toggle("active");

    button.textContent =
        button.classList.contains("active")
            ? "♥"
            : "♡";
}


/* AUTH */

function openAuth() {

    document
        .getElementById("authModal")
        .classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeAuth() {

    document
        .getElementById("authModal")
        .classList.remove("show");

    document.body.style.overflow = "";
}


/* AUTH MODE */

function toggleAuthMode() {

    if (authMode === "login") {

        authMode = "register";

        document.getElementById(
            "authTitle"
        ).textContent =
            "Hisob yarating";

        document.getElementById(
            "authSubtitle"
        ).textContent =
            "Ro‘yxatdan o‘tish uchun ma’lumotlarni kiriting.";

        document.getElementById(
            "nameGroup"
        ).classList.remove("hidden");

        document.getElementById(
            "authSwitchText"
        ).textContent =
            "Hisobingiz bormi?";

        document.getElementById(
            "authSwitchBtn"
        ).textContent =
            "Kirish";

        document.querySelector(
            ".auth-submit"
        ).textContent =
            "Ro‘yxatdan o‘tish";

    } else {

        authMode = "login";

        document.getElementById(
            "authTitle"
        ).textContent =
            "Xush kelibsiz!";

        document.getElementById(
            "authSubtitle"
        ).textContent =
            "Hisobingizga kirish uchun ma’lumotlarni kiriting.";

        document.getElementById(
            "nameGroup"
        ).classList.add("hidden");

        document.getElementById(
            "authSwitchText"
        ).textContent =
            "Hisobingiz yo‘qmi?";

        document.getElementById(
            "authSwitchBtn"
        ).textContent =
            "Ro‘yxatdan o‘tish";

        document.querySelector(
            ".auth-submit"
        ).textContent =
            "Kirish";
    }
}


/* AUTH SUBMIT */

document
    .getElementById("authForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();


        const email =
            document.getElementById(
                "emailInput"
            ).value.trim();

        const password =
            document.getElementById(
                "passwordInput"
            ).value.trim();


        if (!email || !password) {

            showToast(
                "!",
                "Barcha maydonlarni to‘ldiring"
            );

            return;
        }


        if (authMode === "register") {

            const name =
                document.getElementById(
                    "nameInput"
                ).value.trim();


            if (!name) {

                showToast(
                    "!",
                    "Ismingizni kiriting"
                );

                return;
            }


            localStorage.setItem(
                "shopuz_user",
                JSON.stringify({
                    name,
                    email
                })
            );


            showToast(
                "✓",
                "Hisob muvaffaqiyatli yaratildi"
            );

        } else {

            localStorage.setItem(
                "shopuz_user",
                JSON.stringify({
                    email
                })
            );


            showToast(
                "✓",
                "Tizimga muvaffaqiyatli kirdingiz"
            );
        }


        closeAuth();

        this.reset();
    });


/* TOAST */

let toastTimer;


function showToast(icon, message) {

    const toast =
        document.getElementById("toast");

    document.getElementById(
        "toastIcon"
    ).textContent = icon;

    document.getElementById(
        "toastText"
    ).textContent = message;


    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);
}


/* MOBILE MENU */

function toggleMenu() {

    document
        .getElementById("mobileMenu")
        .classList.toggle("show");
}


function closeMenu() {

    document
        .getElementById("mobileMenu")
        .classList.remove("show");
}


/* SCROLL */

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


function showHome() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* MODAL OUTSIDE CLICK */

document.querySelectorAll(".modal").forEach(modal => {

    modal.addEventListener("click", event => {

        if (event.target === modal) {

            modal.classList.remove("show");

            document.body.style.overflow = "";
        }
    });
});


/* ESC */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        document
            .querySelectorAll(".modal")
            .forEach(modal =>
                modal.classList.remove("show")
            );

        document.body.style.overflow = "";
    }
});


/* INITIALIZE */

renderProducts();

updateCartCount();