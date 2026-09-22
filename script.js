/* =========================================================
   CARZONE
   MAIN JAVASCRIPT
========================================================= */

"use strict";


/* =========================================================
   IMAGE DATABASE
========================================================= */

const carImages = [
    "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1525609004556-c46c7dcf3a5d?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=85",
    "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?auto=format&fit=crop&w=1000&q=85"
];


/* =========================================================
   CAR DATA
   24 X 4 = 96 CARS
========================================================= */

const carGroups = {

    Luxury: [

        ["Mercedes-Benz", "S-Class S580", 2025, 138000, 503, "Benzin", "AWD"],
        ["BMW", "7 Series 760i", 2025, 122000, 536, "Benzin", "AWD"],
        ["Audi", "A8 L", 2024, 98000, 335, "Benzin", "AWD"],
        ["Lexus", "LS 500", 2024, 79000, 416, "Benzin", "AWD"],
        ["Porsche", "Panamera 4S", 2025, 125000, 443, "Benzin", "AWD"],
        ["Bentley", "Continental GT", 2024, 245000, 650, "Benzin", "AWD"],
        ["Rolls-Royce", "Ghost", 2025, 355000, 563, "Benzin", "AWD"],
        ["Mercedes-Benz", "Maybach S680", 2025, 235000, 621, "Benzin", "AWD"],
        ["BMW", "XM Label", 2025, 165000, 738, "Gibrid", "AWD"],
        ["Audi", "RS Q8", 2025, 135000, 591, "Benzin", "AWD"],
        ["Lexus", "LX 600", 2025, 105000, 409, "Benzin", "AWD"],
        ["Range Rover", "Autobiography", 2025, 175000, 523, "Benzin", "AWD"],
        ["Genesis", "G90", 2024, 89000, 409, "Benzin", "AWD"],
        ["Maserati", "Quattroporte", 2024, 110000, 424, "Benzin", "AWD"],
        ["Jaguar", "XJ Premium", 2023, 76000, 395, "Benzin", "AWD"],
        ["Cadillac", "Celestiq", 2025, 250000, 600, "Elektr", "AWD"],
        ["Volvo", "S90 Recharge", 2024, 72000, 455, "Gibrid", "AWD"],
        ["BMW", "i7 xDrive60", 2025, 128000, 536, "Elektr", "AWD"],
        ["Mercedes-Benz", "EQE 500", 2025, 96000, 402, "Elektr", "AWD"],
        ["Audi", "e-tron GT", 2025, 109000, 496, "Elektr", "AWD"],
        ["Porsche", "Taycan 4S", 2025, 118000, 522, "Elektr", "AWD"],
        ["Lexus", "LM 500h", 2025, 115000, 371, "Gibrid", "AWD"],
        ["Lucid", "Air Grand Touring", 2025, 125000, 819, "Elektr", "AWD"],
        ["Tesla", "Model S Plaid", 2025, 95000, 1020, "Elektr", "AWD"]

    ],

    Sport: [

        ["Ferrari", "SF90 Stradale", 2025, 520000, 986, "Gibrid", "AWD"],
        ["Lamborghini", "Revuelto", 2025, 610000, 1001, "Gibrid", "AWD"],
        ["Porsche", "911 Turbo S", 2025, 230000, 640, "Benzin", "AWD"],
        ["McLaren", "750S", 2025, 325000, 740, "Benzin", "RWD"],
        ["Aston Martin", "DB12", 2025, 245000, 671, "Benzin", "RWD"],
        ["Chevrolet", "Corvette Z06", 2025, 115000, 670, "Benzin", "RWD"],
        ["Ford", "Mustang Dark Horse", 2025, 65000, 500, "Benzin", "RWD"],
        ["BMW", "M4 Competition", 2025, 89000, 503, "Benzin", "RWD"],
        ["Mercedes-Benz", "AMG GT 63", 2025, 185000, 577, "Benzin", "AWD"],
        ["Audi", "RS7 Performance", 2025, 145000, 621, "Benzin", "AWD"],
        ["Nissan", "GT-R Nismo", 2024, 220000, 600, "Benzin", "AWD"],
        ["Toyota", "GR Supra", 2025, 59000, 382, "Benzin", "RWD"],
        ["Chevrolet", "Camaro ZL1", 2024, 78000, 650, "Benzin", "RWD"],
        ["Dodge", "Challenger SRT", 2023, 76000, 717, "Benzin", "RWD"],
        ["Porsche", "718 Cayman GTS", 2025, 105000, 394, "Benzin", "RWD"],
        ["BMW", "M8 Competition", 2024, 145000, 617, "Benzin", "AWD"],
        ["Mercedes-Benz", "AMG SL63", 2025, 195000, 577, "Benzin", "AWD"],
        ["Lexus", "RC F", 2024, 81000, 472, "Benzin", "RWD"],
        ["Lotus", "Emira", 2025, 105000, 400, "Benzin", "RWD"],
        ["Alpine", "A110 R", 2024, 95000, 300, "Benzin", "RWD"],
        ["Maserati", "MC20", 2025, 235000, 621, "Benzin", "RWD"],
        ["Jaguar", "F-Type R", 2024, 115000, 575, "Benzin", "AWD"],
        ["Toyota", "GR86", 2025, 36000, 228, "Benzin", "RWD"],
        ["Honda", "Civic Type R", 2025, 47000, 315, "Benzin", "FWD"]

    ],

    SUV: [

        ["Range Rover", "Sport SV", 2025, 185000, 626, "Benzin", "AWD"],
        ["Mercedes-Benz", "G63 AMG", 2025, 195000, 577, "Benzin", "AWD"],
        ["BMW", "X7 M60i", 2025, 115000, 523, "Benzin", "AWD"],
        ["Porsche", "Cayenne Turbo GT", 2025, 205000, 650, "Benzin", "AWD"],
        ["Lamborghini", "Urus SE", 2025, 260000, 789, "Gibrid", "AWD"],
        ["Ferrari", "Purosangue", 2025, 425000, 715, "Benzin", "AWD"],
        ["Audi", "Q8", 2025, 89000, 335, "Benzin", "AWD"],
        ["Lexus", "LX 600", 2025, 105000, 409, "Benzin", "AWD"],
        ["Toyota", "Land Cruiser 300", 2025, 78000, 409, "Benzin", "AWD"],
        ["Toyota", "Sequoia Capstone", 2025, 82000, 437, "Gibrid", "AWD"],
        ["BMW", "X5 M Competition", 2025, 125000, 617, "Benzin", "AWD"],
        ["Mercedes-Benz", "GLE 53 AMG", 2025, 95000, 429, "Gibrid", "AWD"],
        ["Mercedes-Benz", "GLS 580", 2025, 120000, 510, "Benzin", "AWD"],
        ["Audi", "RS Q8", 2025, 135000, 591, "Benzin", "AWD"],
        ["Volvo", "XC90 Recharge", 2025, 78000, 455, "Gibrid", "AWD"],
        ["Tesla", "Model X Plaid", 2025, 105000, 1020, "Elektr", "AWD"],
        ["Rivian", "R1S", 2025, 95000, 835, "Elektr", "AWD"],
        ["Ford", "Bronco Raptor", 2025, 92000, 418, "Benzin", "AWD"],
        ["Jeep", "Grand Cherokee", 2025, 69000, 375, "Benzin", "AWD"],
        ["Land Rover", "Defender 110", 2025, 87000, 395, "Benzin", "AWD"],
        ["Cadillac", "Escalade V", 2025, 155000, 682, "Benzin", "AWD"],
        ["Genesis", "GV80 Coupe", 2025, 85000, 409, "Benzin", "AWD"],
        ["Kia", "EV9 GT-Line", 2025, 72000, 379, "Elektr", "AWD"],
        ["Hyundai", "Ioniq 9", 2025, 65000, 400, "Elektr", "AWD"]

    ],

    Sedan: [

        ["Toyota", "Camry XSE", 2025, 39000, 232, "Benzin", "FWD"],
        ["Honda", "Accord Touring", 2025, 41000, 204, "Gibrid", "FWD"],
        ["BMW", "5 Series 540i", 2025, 72000, 375, "Benzin", "AWD"],
        ["Mercedes-Benz", "E 450", 2025, 79000, 375, "Gibrid", "AWD"],
        ["Audi", "A6", 2025, 65000, 335, "Benzin", "AWD"],
        ["Lexus", "ES 350", 2025, 49000, 302, "Benzin", "FWD"],
        ["Genesis", "G80", 2025, 59000, 375, "Benzin", "AWD"],
        ["Tesla", "Model 3 Performance", 2025, 55000, 510, "Elektr", "AWD"],
        ["Tesla", "Model S", 2025, 76000, 670, "Elektr", "AWD"],
        ["Volvo", "S60 Recharge", 2024, 58000, 455, "Gibrid", "AWD"],
        ["Hyundai", "Sonata N Line", 2025, 33000, 290, "Benzin", "FWD"],
        ["Kia", "K5 GT", 2025, 32000, 290, "Benzin", "FWD"],
        ["Nissan", "Altima SR", 2024, 30000, 236, "Benzin", "AWD"],
        ["Mazda", "Mazda 6", 2024, 35000, 250, "Benzin", "AWD"],
        ["Volkswagen", "Arteon", 2024, 47000, 300, "Benzin", "AWD"],
        ["Skoda", "Superb", 2025, 39000, 265, "Benzin", "AWD"],
        ["Honda", "Civic Touring", 2025, 34000, 180, "Benzin", "FWD"],
        ["Toyota", "Crown Platinum", 2025, 55000, 340, "Gibrid", "AWD"],
        ["Cadillac", "CT5-V Blackwing", 2025, 105000, 668, "Benzin", "RWD"],
        ["Dodge", "Charger Daytona", 2025, 72000, 496, "Elektr", "AWD"],
        ["BMW", "M3 Competition", 2025, 99000, 523, "Benzin", "AWD"],
        ["Mercedes-Benz", "C63 S E Performance", 2025, 105000, 671, "Gibrid", "AWD"],
        ["Audi", "S6", 2025, 83000, 444, "Benzin", "AWD"],
        ["Porsche", "Taycan", 2025, 99000, 483, "Elektr", "AWD"]

    ]

};


/* =========================================================
   CONVERT DATA TO OBJECTS
========================================================= */

let cars = [];

let carId = 1;

Object.entries(carGroups).forEach(
    ([category, group]) => {

        group.forEach(
            (item, index) => {

                cars.push({
                    id: carId++,
                    brand: item[0],
                    name: item[1],
                    year: item[2],
                    price: item[3],
                    power: item[4],
                    fuel: item[5],
                    drive: item[6],
                    category,
                    popular: index < 8,
                    image: carImages[
                        (carId + index) %
                        carImages.length
                    ]
                });

            }
        );

    }
);


/* =========================================================
   STATE
========================================================= */

let filteredCars = [...cars];

let currentCategory = "all";

let visibleCount = 12;

let favorites = loadFavorites();


/* =========================================================
   DOM
========================================================= */

const $ = (selector) =>
    document.querySelector(selector);

const $$ = (selector) =>
    document.querySelectorAll(selector);


const carsGrid = $("#carsGrid");
const favoritesGrid = $("#favoritesGrid");

const emptyState = $("#emptyState");
const favoriteEmpty = $("#favoriteEmpty");

const loadMoreBtn = $("#loadMore");

const searchInput = $("#searchInput");
const clearSearchBtn = $("#clearSearch");
const searchBtn = $("#searchBtn");

const brandFilter = $("#brandFilter");
const priceFilter = $("#priceFilter");
const sortSelect = $("#sortSelect");

const resultText = $("#resultText");

const favoriteCount = $("#favoriteCount");

const carModal = $("#carModal");
const carModalBody = $("#carModalBody");

const sellModal = $("#sellModal");
const sellForm = $("#sellForm");

const toast = $("#toast");
const toastTitle = $("#toastTitle");
const toastMessage = $("#toastMessage");

const toastClose = $("#toastClose");

const themeBtn = $("#themeBtn");

const menuBtn = $("#menuBtn");
const mobileMenu = $("#mobileMenu");

const sellBtn = $("#sellBtn");
const mobileSellBtn = $("#mobileSellBtn");

const resetFiltersBtn = $("#resetFilters");


/* =========================================================
   SAFE STORAGE
========================================================= */

function loadFavorites() {

    try {

        const saved =
            localStorage.getItem(
                "carzone-favorites"
            );

        if (!saved) {
            return [];
        }

        const parsed = JSON.parse(saved);

        return Array.isArray(parsed)
            ? parsed.map(Number).filter(Boolean)
            : [];

    } catch (error) {

        console.warn(
            "localStorage ishlamadi:",
            error
        );

        return [];

    }

}


function saveFavorites() {

    try {

        localStorage.setItem(
            "carzone-favorites",
            JSON.stringify(favorites)
        );

    } catch (error) {

        console.warn(
            "Sevimlilarni saqlab bo'lmadi:",
            error
        );

    }

}


/* =========================================================
   FORMAT PRICE
========================================================= */

function formatPrice(price) {

    return new Intl.NumberFormat(
        "en-US"
    ).format(price);

}


/* =========================================================
   BRAND FILTER
========================================================= */

function createBrandFilter() {

    if (!brandFilter) {
        return;
    }

    const brands = [
        ...new Set(
            cars.map(
                car => car.brand
            )
        )
    ].sort();

    brands.forEach(
        brand => {

            const option =
                document.createElement("option");

            option.value = brand;
            option.textContent = brand;

            brandFilter.appendChild(option);

        }
    );

}


/* =========================================================
   CARD
========================================================= */

function createCarCard(car) {

    const isFavorite =
        favorites.includes(car.id);

    return `
        <article class="car-card">

            <div class="car-image-wrap">

                <img
                    class="car-image"
                    src="${car.image}"
                    alt="${car.brand} ${car.name}"
                    loading="lazy"
                    onerror="this.src='https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1000&q=80'"
                >

                ${
                    car.popular
                        ? `
                            <span class="car-badge">
                                TOP
                            </span>
                        `
                        : ""
                }

                <button
                    class="favorite-btn ${
                        isFavorite ? "active" : ""
                    }"
                    type="button"
                    data-favorite="${car.id}"
                    aria-label="Sevimliga qo'shish"
                >
                    <i class="${
                        isFavorite
                            ? "fa-solid"
                            : "fa-regular"
                    } fa-heart"></i>
                </button>

            </div>


            <div class="car-content">

                <div class="car-brand">
                    ${car.brand}
                </div>

                <h3 class="car-name">
                    ${car.name}
                </h3>

                <div class="car-year">
                    ${car.year} yil
                </div>


                <div class="car-specs">

                    <span class="spec">
                        <i class="fa-solid fa-bolt"></i>
                        ${car.power} HP
                    </span>

                    <span class="spec">
                        <i class="fa-solid fa-gas-pump"></i>
                        ${car.fuel}
                    </span>

                    <span class="spec">
                        <i class="fa-solid fa-road"></i>
                        ${car.drive}
                    </span>

                </div>


                <div class="car-footer">

                    <div class="car-price">

                        <small>
                            Narxi
                        </small>

                        <strong>
                            $${formatPrice(car.price)}
                        </strong>

                    </div>

                    <button
                        class="details-btn"
                        type="button"
                        data-details="${car.id}"
                        aria-label="Batafsil"
                    >
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>

                </div>

            </div>

        </article>
    `;
}


/* =========================================================
   RENDER CARS
========================================================= */

function renderCars() {

    if (!carsGrid) {
        return;
    }

    const visibleCars =
        filteredCars.slice(
            0,
            visibleCount
        );

    carsGrid.innerHTML =
        visibleCars
            .map(createCarCard)
            .join("");


    if (emptyState) {

        emptyState.classList.toggle(
            "show",
            filteredCars.length === 0
        );

    }


    if (loadMoreBtn) {

        loadMoreBtn.style.display =
            visibleCount >= filteredCars.length ||
            filteredCars.length === 0
                ? "none"
                : "inline-flex";

    }


    if (resultText) {

        resultText.textContent =
            `${filteredCars.length} ta avtomobil topildi`;

    }

}


/* =========================================================
   FILTER
========================================================= */

function applyFilters() {

    const search =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";

    const brand =
        brandFilter
            ? brandFilter.value
            : "all";

    const price =
        priceFilter
            ? priceFilter.value
            : "all";


    filteredCars =
        cars.filter(car => {

            const matchesCategory =
                currentCategory === "all" ||
                car.category === currentCategory;


            const searchable =
                `
                    ${car.brand}
                    ${car.name}
                    ${car.category}
                    ${car.year}
                `.toLowerCase();


            const matchesSearch =
                !search ||
                searchable.includes(search);


            const matchesBrand =
                brand === "all" ||
                car.brand === brand;


            let matchesPrice = true;


            if (price !== "all") {

                const parts =
                    price.split("-");

                const min =
                    Number(parts[0]);

                const max =
                    Number(parts[1]);

                matchesPrice =
                    car.price >= min &&
                    car.price <= max;

            }


            return (
                matchesCategory &&
                matchesSearch &&
                matchesBrand &&
                matchesPrice
            );

        });


    sortCars();

    visibleCount = 12;

    renderCars();

}


/* =========================================================
   SORT
========================================================= */

function sortCars() {

    if (!sortSelect) {
        return;
    }

    const type =
        sortSelect.value;


    if (type === "popular") {

        filteredCars.sort(
            (a, b) =>
                Number(b.popular) -
                Number(a.popular)
        );

    }


    if (type === "price-low") {

        filteredCars.sort(
            (a, b) =>
                a.price - b.price
        );

    }


    if (type === "price-high") {

        filteredCars.sort(
            (a, b) =>
                b.price - a.price
        );

    }


    if (type === "year") {

        filteredCars.sort(
            (a, b) =>
                b.year - a.year
        );

    }


    if (type === "name") {

        filteredCars.sort(
            (a, b) =>
                `${a.brand} ${a.name}`
                    .localeCompare(
                        `${b.brand} ${b.name}`
                    )
        );

    }

}


/* =========================================================
   FAVORITES
========================================================= */

function toggleFavorite(id) {

    id = Number(id);

    const index =
        favorites.indexOf(id);


    if (index === -1) {

        favorites.push(id);

        showToast(
            "Sevimliga qo'shildi",
            "Avtomobil sevimlilar ro'yxatiga saqlandi."
        );

    } else {

        favorites.splice(
            index,
            1
        );

        showToast(
            "Sevimlilardan o'chirildi",
            "Avtomobil ro'yxatdan olib tashlandi."
        );

    }


    saveFavorites();

    updateFavoriteCount();

    renderCars();

    renderFavorites();

}


function updateFavoriteCount() {

    if (favoriteCount) {

        favoriteCount.textContent =
            favorites.length;

    }

}


/* =========================================================
   RENDER FAVORITES
========================================================= */

function renderFavorites() {

    if (!favoritesGrid) {
        return;
    }

    const favoriteCars =
        favorites
            .map(
                id =>
                    cars.find(
                        car => car.id === id
                    )
            )
            .filter(Boolean);


    favoritesGrid.innerHTML =
        favoriteCars
            .map(createCarCard)
            .join("");


    if (favoriteEmpty) {

        favoriteEmpty.classList.toggle(
            "show",
            favoriteCars.length === 0
        );

    }

}


/* =========================================================
   CAR DETAILS
========================================================= */

function openCarDetails(id) {

    const car =
        cars.find(
            item =>
                item.id === Number(id)
        );


    if (!car || !carModalBody) {
        return;
    }


    const isFavorite =
        favorites.includes(car.id);


    carModalBody.innerHTML = `

        <img
            class="detail-image"
            src="${car.image}"
            alt="${car.brand} ${car.name}"
            onerror="this.src='https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=85'"
        >


        <div class="detail-top">

            <div>

                <div class="detail-brand">
                    ${car.brand}
                </div>

                <h2 class="detail-title">
                    ${car.name}
                </h2>

            </div>

            <div class="detail-price">
                $${formatPrice(car.price)}
            </div>

        </div>


        <p class="detail-description">
            ${car.year}-yilda ishlab chiqarilgan
            ${car.brand} ${car.name}.
            ${car.category} kategoriyasidagi zamonaviy
            avtomobil. Batafsil texnik ma'lumotlar
            quyida keltirilgan.
        </p>


        <div class="detail-spec-grid">

            <div class="detail-spec">
                <i class="fa-regular fa-calendar"></i>
                <span>Yili</span>
                <strong>${car.year}</strong>
            </div>

            <div class="detail-spec">
                <i class="fa-solid fa-bolt"></i>
                <span>Quvvati</span>
                <strong>${car.power} HP</strong>
            </div>

            <div class="detail-spec">
                <i class="fa-solid fa-gas-pump"></i>
                <span>Yoqilg'i</span>
                <strong>${car.fuel}</strong>
            </div>

            <div class="detail-spec">
                <i class="fa-solid fa-road"></i>
                <span>Privod</span>
                <strong>${car.drive}</strong>
            </div>

            <div class="detail-spec">
                <i class="fa-solid fa-layer-group"></i>
                <span>Kategoriya</span>
                <strong>${car.category}</strong>
            </div>

            <div class="detail-spec">
                <i class="fa-solid fa-star"></i>
                <span>Holati</span>
                <strong>Premium</strong>
            </div>

        </div>


        <div class="detail-actions">

            <button
                class="primary-btn"
                type="button"
                data-contact="${car.id}"
            >
                <i class="fa-solid fa-phone"></i>
                Sotuvchi bilan bog'lanish
            </button>

            <button
                class="secondary-btn modal-detail-favorite"
                type="button"
                data-favorite="${car.id}"
                style="
                    color: var(--text);
                    background: var(--surface-2);
                    border: 0;
                "
            >
                <i class="${
                    isFavorite
                        ? "fa-solid"
                        : "fa-regular"
                } fa-heart"></i>

                ${
                    isFavorite
                        ? "Saqlangan"
                        : "Sevimli"
                }
            </button>

        </div>

    `;


    openModal(carModal);

}


/* =========================================================
   CONTACT SELLER
========================================================= */

function contactSeller(id) {

    const car =
        cars.find(
            item =>
                item.id === Number(id)
        );


    if (!car) {
        return;
    }


    closeModal(carModal);


    showToast(
        "Sotuvchi bilan aloqa",
        `${car.brand} ${car.name} uchun: +998 90 123 45 67`
    );

}


/* =========================================================
   MODALS
========================================================= */

function openModal(modal) {

    if (!modal) {
        return;
    }

    modal.classList.add("open");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "no-scroll"
    );

}


function closeModal(modal) {

    if (!modal) {
        return;
    }

    modal.classList.remove("open");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "no-scroll"
    );

}


function openSellModal() {

    openModal(sellModal);

}


/* =========================================================
   TOAST
========================================================= */

let toastTimer = null;


function showToast(
    title,
    message
) {

    if (
        !toast ||
        !toastTitle ||
        !toastMessage
    ) {
        return;
    }


    toastTitle.textContent =
        title;

    toastMessage.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            4000
        );

}


/* =========================================================
   THEME
========================================================= */

function loadTheme() {

    try {

        const saved =
            localStorage.getItem(
                "carzone-theme"
            );


        if (saved === "dark") {

            document.body.classList.add(
                "dark"
            );

        }

    } catch (error) {

        console.warn(
            "Theme storage error:",
            error
        );

    }

}


function updateThemeIcon() {

    if (!themeBtn) {
        return;
    }

    const icon =
        themeBtn.querySelector("i");

    if (!icon) {
        return;
    }


    const dark =
        document.body.classList.contains(
            "dark"
        );


    icon.className =
        dark
            ? "fa-solid fa-sun"
            : "fa-solid fa-moon";

}


function toggleTheme() {

    document.body.classList.toggle(
        "dark"
    );


    const dark =
        document.body.classList.contains(
            "dark"
        );


    try {

        localStorage.setItem(
            "carzone-theme",
            dark
                ? "dark"
                : "light"
        );

    } catch (error) {

        console.warn(
            "Theme saqlanmadi:",
            error
        );

    }


    updateThemeIcon();

}


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMobileMenu() {

    if (!mobileMenu) {
        return;
    }

    mobileMenu.classList.toggle(
        "open"
    );

}


function closeMobileMenu() {

    if (!mobileMenu) {
        return;
    }

    mobileMenu.classList.remove(
        "open"
    );

}


/* =========================================================
   CATEGORY
========================================================= */

function selectCategory(category) {

    currentCategory =
        category || "all";


    $$(".category-card")
        .forEach(card => {

            card.classList.toggle(
                "active",
                card.dataset.category ===
                currentCategory
            );

        });


    applyFilters();


    const carsSection =
        $("#cars");


    if (carsSection) {

        carsSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================================
   RESET
========================================================= */

function resetFilters() {

    currentCategory = "all";


    if (searchInput) {
        searchInput.value = "";
    }


    if (brandFilter) {
        brandFilter.value = "all";
    }


    if (priceFilter) {
        priceFilter.value = "all";
    }


    if (sortSelect) {
        sortSelect.value = "popular";
    }


    $$(".category-card")
        .forEach(card => {

            card.classList.toggle(
                "active",
                card.dataset.category === "all"
            );

        });


    applyFilters();

}


/* =========================================================
   SELL FORM
========================================================= */

function handleSellForm(event) {

    event.preventDefault();


    const formData =
        new FormData(
            sellForm
        );


    const name =
        String(
            formData.get(
                "sellerName"
            ) || ""
        ).trim();


    const brand =
        String(
            formData.get(
                "sellBrand"
            ) || ""
        ).trim();


    const model =
        String(
            formData.get(
                "sellModel"
            ) || ""
        ).trim();


    if (
        !name ||
        !brand ||
        !model
    ) {

        showToast(
            "Xatolik",
            "Majburiy maydonlarni to'ldiring."
        );

        return;

    }


    closeModal(sellModal);

    sellForm.reset();


    showToast(
        "E'lon qabul qilindi",
        `${brand} ${model} haqidagi ma'lumot qabul qilindi.`
    );

}


/* =========================================================
   SEARCH
========================================================= */

function runSearch() {

    applyFilters();

    const carsSection =
        $("#cars");


    if (carsSection) {

        carsSection.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================================
   LOAD MORE
========================================================= */

function loadMore() {

    visibleCount += 12;

    renderCars();

}


/* =========================================================
   EVENT DELEGATION
========================================================= */

document.addEventListener(
    "click",
    event => {

        const favorite =
            event.target.closest(
                "[data-favorite]"
            );


        if (favorite) {

            toggleFavorite(
                favorite.dataset.favorite
            );

            return;

        }


        const details =
            event.target.closest(
                "[data-details]"
            );


        if (details) {

            openCarDetails(
                details.dataset.details
            );

            return;

        }


        const contact =
            event.target.closest(
                "[data-contact]"
            );


        if (contact) {

            contactSeller(
                contact.dataset.contact
            );

            return;

        }


        const closeButton =
            event.target.closest(
                "[data-close]"
            );


        if (closeButton) {

            const modalId =
                closeButton.dataset.close;


            closeModal(
                document.getElementById(
                    modalId
                )
            );

        }

    }
);


/* =========================================================
   CATEGORY EVENTS
========================================================= */

$$(".category-card")
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                selectCategory(
                    card.dataset.category
                );

            }
        );

    });


/* =========================================================
   FOOTER CATEGORY
========================================================= */

$$("[data-footer-category]")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                selectCategory(
                    link.dataset.footerCategory
                );

            }
        );

    });


/* =========================================================
   SEARCH EVENTS
========================================================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        applyFilters
    );

    searchInput.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                runSearch();

            }

        }
    );

}


if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        runSearch
    );

}


if (clearSearchBtn) {

    clearSearchBtn.addEventListener(
        "click",
        () => {

            if (searchInput) {
                searchInput.value = "";
            }

            applyFilters();

            if (searchInput) {
                searchInput.focus();
            }

        }
    );

}


/* =========================================================
   FILTER EVENTS
========================================================= */

if (brandFilter) {

    brandFilter.addEventListener(
        "change",
        applyFilters
    );

}


if (priceFilter) {

    priceFilter.addEventListener(
        "change",
        applyFilters
    );

}


if (sortSelect) {

    sortSelect.addEventListener(
        "change",
        applyFilters
    );

}


/* =========================================================
   LOAD MORE
========================================================= */

if (loadMoreBtn) {

    loadMoreBtn.addEventListener(
        "click",
        loadMore
    );

}


/* =========================================================
   RESET
========================================================= */

if (resetFiltersBtn) {

    resetFiltersBtn.addEventListener(
        "click",
        resetFilters
    );

}


/* =========================================================
   THEME
========================================================= */

if (themeBtn) {

    themeBtn.addEventListener(
        "click",
        toggleTheme
    );

}


/* =========================================================
   MOBILE MENU
========================================================= */

if (menuBtn) {

    menuBtn.addEventListener(
        "click",
        toggleMobileMenu
    );

}


if (mobileSellBtn) {

    mobileSellBtn.addEventListener(
        "click",
        () => {

            closeMobileMenu();

            openSellModal();

        }
    );

}


$$(".mobile-menu a")
    .forEach(link => {

        link.addEventListener(
            "click",
            closeMobileMenu
        );

    });


/* =========================================================
   SELL BUTTON
========================================================= */

if (sellBtn) {

    sellBtn.addEventListener(
        "click",
        openSellModal
    );

}


if (sellForm) {

    sellForm.addEventListener(
        "submit",
        handleSellForm
    );

}


/* =========================================================
   TOAST CLOSE
========================================================= */

if (toastClose) {

    toastClose.addEventListener(
        "click",
        () => {

            toast.classList.remove(
                "show"
            );

        }
    );

}


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Escape"
        ) {
            return;
        }


        closeModal(carModal);

        closeModal(sellModal);

        closeMobileMenu();

    }
);


/* =========================================================
   INITIALIZATION
========================================================= */

function init() {

    createBrandFilter();

    loadTheme();

    updateThemeIcon();

    updateFavoriteCount();

    renderCars();

    renderFavorites();

}


init();
/* =========================================================
   PREMIUM SECTION REVEAL SYSTEM
========================================================= */

const animatedSections =
    document.querySelectorAll(
        ".section"
    );


const sectionObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "section-visible"
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12,

            rootMargin:
                "0px 0px -80px 0px"
        }
    );


animatedSections.forEach(
    (section) => {

        sectionObserver.observe(
            section
        );

    }
);
/* =========================================================
   PREMIUM NAVIGATION
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(
    (link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });


                document.querySelectorAll(
                    ".nav-link"
                ).forEach(
                    nav => {

                        nav.classList.remove(
                            "active"
                        );

                    }
                );


                const matchingNav =
                    document.querySelector(
                        `.nav-link[href="${targetId}"]`
                    );


                if (matchingNav) {

                    matchingNav.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);