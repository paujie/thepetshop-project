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

document.head.appendChild(swiperScript);

// tombol untuk login
const loginButton = document.getElementById('login');
if (loginButton) {
  loginButton.addEventListener('click', function() {
    window.location.href = "login.html";
  });
}

//tombol untuk rekomendasi
const rekomendasiButton = document.getElementById('rekomendasi');
if (rekomendasiButton) {
  rekomendasiButton.addEventListener('click', function() {
    window.location.href = "button.html";
  });
}

// tombol pada slide 1
const button1 = document.querySelector('.swiper-slide#satu button');
if (button1) {
  button1.addEventListener('click', function() {
    window.location.href = "button.html";
  });
}

// tombol pada slide 2
const button2 = document.querySelector('.swiper-slide#dua button');
if (button2) {
  button2.addEventListener('click', function() {
    window.location.href = "button.html";
  });
}

// tombol pada slide 3
const button3 = document.querySelector('.swiper-slide#tiga button');
if (button3) {
  button3.addEventListener('click', function() {
    window.location.href = "button.html";
  });
}

// tombol untuk The Shop
const shopBtn = document.getElementById('shop');
if (shopBtn) {
  shopBtn.addEventListener('click', () => {
    window.location.href = "button.html";
  });
}

// tombol untuk Pusat Perawatan
const adopBtn = document.getElementById('adop');
if (adopBtn) {
  adopBtn.addEventListener('click', () => {
    window.location.href = "button.html";
  });
}

// tombol untuk Layanan Darurat
const SARBtn = document.getElementById('SAR');
if (SARBtn) {
  SARBtn.addEventListener('click', () => {
    window.location.href = "button.html";
  });
}

// tombol untuk Berikan Donasi
const careButton = document.getElementById('care');
if (careButton) {
  careButton.addEventListener('click', function() {
    window.location.href = "button.html";
  });
}

// tombol untuk Baca Selengkapnya
const shelterButton = document.getElementById('shelter');
if (shelterButton) {
  shelterButton.addEventListener('click', function() {
    window.location.href = "button.html";
  });
}


// Validasi Login

if (document.querySelector('#form-login')) {
  const loginForm = document.querySelector('#form-login');
  const emailInput = loginForm.querySelector('#email');
  const passwordInput = loginForm.querySelector('#pswd');

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateEmailLogin() & validatePasswordLogin()) {
      window.location.href = "index.html";
    }
  });

  function validateEmailLogin() {
    const email = emailInput.value.trim();
    const emailError = loginForm.querySelector('#email + .pesan-error');
    if (email === '') {
      emailError.textContent = 'Email tidak boleh kosong';
      return false;
    } else if (!isValidEmail(email)) {
      emailError.textContent = 'Email tidak valid. Harap masukkan email yang valid';
      return false;
    } else {
      emailError.textContent = '';
      return true;
    }
  }

  function validatePasswordLogin() {
    const password = passwordInput.value.trim();
    const passwordError = loginForm.querySelector('#pswd + .pesan-error');
    if (password === '') {
      passwordError.textContent = 'Kata Sandi tidak boleh kosong,';
      return false;
    } else if (password.length < 8) {
      passwordError.textContent = 'Kata Sandi salah.';
      return false;
    } else {
      passwordError.textContent = '';
      return true;
    }
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    return emailRegex.test(email);
  }
}


// Validasi Register

if (document.querySelector('#form-register')) {
    const reg = document.querySelector('#form-register');
    const regEmail = reg.querySelector('#regemail');
    const regPswd = reg.querySelector('#regpswd');
    const regHP = reg.querySelector('#reghp');
    const regNama = reg.querySelector('#regnama');

    reg.addEventListener('submit', function (event) {
      event.preventDefault();
      if (validRegEmail() & validRegPswd() & validRegHP() & validRegNama()) {
        console.log('Form submitted successfully');
        window.location.href = "index.html";
      }
    });

    function validRegNama() {
      const namaLengkap = regNama.value.trim();
      const namaLengkapErr = reg.querySelector('#regnama + .pesan-error');
      if (namaLengkap === '') {
        namaLengkapErr.textContent = 'Nama lengkap tidak boleh kosong';
        return false;
      } else {
        namaLengkapErr.textContent = '';
        return true;
      }
    }

    function validRegEmail() {
      const email = regEmail.value.trim();
      const emailError = reg.querySelector('#regemail + .pesan-error');
      if (email === '') {
        emailError.textContent = 'Email tidak boleh kosong';
        return false;
      } else if (!isValidEmail(email)) {
        emailError.textContent = 'Email tidak valid. Harap masukkan email yang valid';
        return false;
      } else {
        emailError.textContent = '';
        return true;
      }
    }

    function validRegPswd() {
      const password = regPswd.value.trim();
      const passwordError = reg.querySelector('#regpswd + .pesan-error');
      if (password === '') {
        passwordError.textContent = 'Kata Sandi tidak boleh kosong';
        return false;
      } else if (password.length < 8) {
        passwordError.textContent = 'Kata Sandi minimal terdiri dari 8 karakter';
        return false;
      } else {
        passwordError.textContent = '';
        return true;
      }
  }

  function validRegHP() {
    const hp = regHP.value.trim();
    const hpError = reg.querySelector('#reghp + .pesan-error');
    if (hp === '') {
      hpError.textContent = 'Nomor Handphone tidak boleh kosong';
      return false;
    } else if (hp.length < 11) {
      hpError.textContent = 'Nomor Handphone minimal terdiri dari 11 karakter';
      return false;
    } else if (hp.length > 13) {
      hpError.textContent = 'Nomor Handphone maksimal terdiri dari 13 karakter';
      return false;
    } else {
      hpError.textContent = '';
      return true;
    }
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  return emailRegex.test(email);
}
}

