// Mengambil navbar
let navbar = document.querySelector(".navbar");
// Mengambil tombol hamburger
let menuBtn = document.querySelector("#menu-btn");

// Saat hamburger diklik
menuBtn.onclick = (e) => {
  // Mencegah bug klik
  e.stopPropagation();
  // Tambah/hapus class active
  navbar.classList.toggle("active");
};

// Saat Klik di luar navbar
document.addEventListener("click", function (e) {
  // Jika klik bukan navbar dan bukan tombol menu
  if (!navbar.contains(e.target) && !menuBtn.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

// Scroll otomatis tutup
window.onscroll = () => {
  navbar.classList.remove("active");
};
