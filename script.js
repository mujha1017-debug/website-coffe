// =======================
// SEARCH FORM
// =======================

let searchForm = document.querySelector(".search-form");

let searchBtn = document.querySelector("#search-btn");

// =======================
// SHOPPING CART
// =======================

let cartItem = document.querySelector(".cart-items-container");

let cartBtn = document.querySelector("#cart-btn");

// =======================
// NAVBAR
// =======================

let navbar = document.querySelector(".navbar");

let menuBtn = document.querySelector("#menu-btn");

// =======================
// CART CLICK
// =======================

cartBtn.onclick = (e) => {
  e.stopPropagation();

  cartItem.classList.toggle("active");

  searchForm.classList.remove("active");

  navbar.classList.remove("active");
};

// =======================
// MENU CLICK
// =======================

menuBtn.onclick = (e) => {
  e.stopPropagation();

  navbar.classList.toggle("active");

  searchForm.classList.remove("active");

  cartItem.classList.remove("active");
};

// =======================
// SEARCH CLICK
// =======================

searchBtn.onclick = (e) => {
  e.stopPropagation();

  searchForm.classList.toggle("active");

  navbar.classList.remove("active");

  cartItem.classList.remove("active");
};

// =======================
// KLIK LUAR
// =======================

document.addEventListener("click", function (e) {
  if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
    navbar.classList.remove("active");
  }

  if (!searchForm.contains(e.target) && !searchBtn.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!cartItem.contains(e.target) && !cartBtn.contains(e.target)) {
    cartItem.classList.remove("active");
  }
});

// =======================
// SCROLL
// =======================

window.onscroll = () => {
  navbar.classList.remove("active");

  searchForm.classList.remove("active");

  cartItem.classList.remove("active");
};
