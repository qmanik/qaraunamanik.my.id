const BODY = document.querySelector("body");
let AGE = 0;
let NABIZ = 2000;
var windowSize = {
  w: window.outerWidth,
  h: window.outerHeight,
  iw: window.innerWidth,
  ih: window.innerHeight
};

var randomWidth = () => {
  let x = 0;
  if (detectMob()) {
    document.querySelector(".container-box").style.width = "80%";
    document.querySelector(".container-box").setAttribute("data-value", " ");
    x = getRndInteger(5, AGE);
    document.querySelector(".container-box").style.paddingBottom = x / 2 + "%";
    document.querySelector(".container-box").setAttribute("data-value", x + "%");
    NABIZ = 1000;
  } else {
    x = getRndInteger(30, 70);
    document.querySelector(".container-box").style.width = x + "%";
    document.querySelector(".container-box").setAttribute("data-value", x + "%");
  }
};

var getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

randomWidth();

var interval = setInterval(() => {
  randomWidth();
}, NABIZ);


function detectMob() {
  return window.innerWidth <= 1000 && window.innerHeight <= 1000;
}

function getRandomColor(brightness) {
  function randomChannel(brightness) {
    var r = 255 - brightness;
    var n = 0 | ((Math.random() * r) + brightness);
    var s = n.toString(16);
    return (s.length == 1) ? '0' + s : s;
  }
  var randomColor1 = '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness),
    randomColor2 = '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
  if (brightness === 50) {
    return randomColor2;
  } else
    return randomColor1;
}

// Tampilkan tahun saat ini
document.querySelector("#date_").innerHTML = (new Date()).getFullYear();

// Helper: Tambah 0 di depan angka jika < 10
function pad(d) {
  return (d < 10) ? '0' + d.toString() : d.toString();
}

// Fungsi utama: Menghitung umur
function calculateAge() {
  const birth_date = new Date("June 11, 2000");

  setInterval(() => {
    const now = new Date();
    let diff = now - birth_date; // Selisih waktu dalam milidetik

    let seconds = Math.floor(diff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    // Hitung tahun (dengan rata-rata tahun kabisat)
    let years = Math.floor(days / 365.25);
    days -= Math.floor(years * 365.25);

    // Hitung bulan (dengan rata-rata panjang bulan)
    let months = Math.floor(days / 30.44);
    days = Math.floor(days % 30.44);

    // Koreksi waktu harian
    hours = hours % 24;
    minutes = minutes % 60;
    seconds = seconds % 60;

    document.querySelector('#meInTheWorld .years').innerHTML = pad(years);
    document.querySelector('#meInTheWorld .months').innerHTML = pad(months);
    document.querySelector('#meInTheWorld .days').innerHTML = pad(days);
    document.querySelector('#meInTheWorld .hours').innerHTML = pad(hours);
    document.querySelector('#meInTheWorld .minutes').innerHTML = pad(minutes);
    document.querySelector('#meInTheWorld .seconds').innerHTML = pad(seconds);
  }, 1000);
}

calculateAge();

// Event listener untuk mengubah warna latar belakang saat ukuran layar berubah
window.addEventListener("resize", function() {
  // Cek jika ukuran luar jendela berubah
  if (window.outerWidth !== windowSize.w || window.outerHeight !== windowSize.h) {
    windowSize.w = window.outerWidth; // update object
    windowSize.h = window.outerHeight;
    windowSize.iw = window.innerWidth;
    windowSize.ih = window.innerHeight;
    BODY.style.background = getRandomColor(98);

  }
  // Cek jika ukuran konten di dalam jendela berubah (misalnya saat membuka DevTools)
  else if (window.innerWidth + window.innerWidth * .05 < windowSize.iw ||
    window.innerWidth - window.innerWidth * .05 > windowSize.iw) {
    windowSize.iw = window.innerWidth;
    BODY.style.background = getRandomColor(98);
  }
}, false);
