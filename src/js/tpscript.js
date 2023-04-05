/* Feather Icons */
feather.replace();

/* Swiper JS */

// Load Library Swiper JS lewat CDN
var swiperScript = document.createElement("script");
swiperScript.src = "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js";

swiperScript.addEventListener("load", function () {
  // Konfigurasi Slider
  var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 40,
    grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
  });
});
// tombol untuk login
const loginButton = document.getElementById('login');
loginButton.addEventListener('click', function() {
  window.location.href = "../thepetshop-project/button.html";
});

//tombol untuk rekomendasi
const rekomendasiButton = document.getElementById('rekomendasi');
rekomendasiButton.addEventListener('click', function() {
  window.location.href = "../thepetshop-project/button.html";
});

// tombol pada slide 1
const button1 = document.querySelector('.swiper-slide#satu button');
button1.addEventListener('click', function() {
  window.location.href = "../thepetshop-project/button.html";
});

// tombol pada slide 2
const button2 = document.querySelector('.swiper-slide#dua button');
button2.addEventListener('click', function() {
  window.location.href = "../thepetshop-project/button.html";
});

// tombol pada slide 3
const button3 = document.querySelector('.swiper-slide#tiga button');
button3.addEventListener('click', function() {
  window.location.href = "../thepetshop-project/button.html";
});

// tombol untuk The Shop
const shopBtn = document.getElementById('shop');
shopBtn.addEventListener('click', () => {
  window.location.href = "../thepetshop-project/button.html";
});

// tombol untuk Pusat Perawatan
const adopBtn = document.getElementById('adop');
adopBtn.addEventListener('click', () => {
  window.location.href = "../thepetshop-project/button.html";
});

// tombol untuk Layanan Darurat
const SARBtn = document.getElementById('SAR');
SARBtn.addEventListener('click', () => {
  window.location.href = "../thepetshop-project/button.html";
});

// tombol untuk Berikan Donasi
const careButton = document.getElementById('care');
careButton.addEventListener('click', function() {
  window.location.href = "../thepetshop-project/button.html";
});

// tombol untuk Baca Selengkapnya
const shelterButton = document.getElementById('shelter');
shelterButton.addEventListener('click', function() {
  window.location.href = "../thepetshop-project/button.html";
});

document.head.appendChild(swiperScript);
