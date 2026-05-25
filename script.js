// Search form
let searchForm = document.querySelector(".search-form");

// Tombol search
let searchBtn = document.querySelector("#search-btn");

// Cart
let cartItem = document.querySelector(".cart-items-container");

// Tombol cart
let cartBtn = document.querySelector("#cart-btn");

// Mengambil navbar
let navbar = document.querySelector(".navbar");
// Mengambil tombol hamburger
let menuBtn = document.querySelector("#menu-btn");

// Saat cart diklik
cartBtn.onclick = (e) => {
  e.stopPropagation();

  cartItem.classList.toggle("active");

  // Tutup search
  searchForm.classList.remove("active");

  // Tutup navbar
  navbar.classList.remove("active");
};

// Saat hamburger diklik
menuBtn.onclick = (e) => {
  // Mencegah bug klik
  e.stopPropagation();
  // Tambah/hapus class active
  navbar.classList.toggle("active");
};

// Saat search diklik
searchBtn.onclick = (e) => {
  e.stopPropagation();

  searchForm.classList.toggle("active");

  // Tutup cart
  cartItem.classList.remove("active");

  // Tutup navbar
  navbar.classList.remove("active");
};

// Saat Klik di luar navbar
document.addEventListener("click", function (e) {
  // Jika klik bukan navbar dan bukan tombol menu
  if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
    navbar.classList.remove("active");
  } // Tutup search saat klik luar
  if (!searchForm.contains(e.target) && !searchBtn.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  // Tutup cart saat klik luar
  if (!cartItem.contains(e.target) && !cartBtn.contains(e.target)) {
    cartItem.classList.remove("active");
  }
});

// Scroll otomatis tutup
window.onscroll = () => {
  navbar.classList.remove("active");
};
