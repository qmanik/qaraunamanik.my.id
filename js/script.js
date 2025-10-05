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
  // Warna akan berubah setiap kali fungsi ini dijalankan oleh interval
  BODY.style.background = getRandomColor(98);
};

var getRndInteger = (min, max) => {
  // Pastikan max lebih besar dari min untuk menghindari loop tak terbatas atau error
  if (max <= min) {
      max = min + 1;
  }
  return Math.floor(Math.random() * (max - min)) + min;
};

// Panggil sekali di awal agar tidak kosong
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
  return '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
}

// Tampilkan tahun saat ini
document.querySelector("#date_").innerHTML = (new Date()).getFullYear();

function pad(d) {
  return (d < 10) ? '0' + d.toString() : d.toString();
}

// Fungsi utama: Menghitung umur (Versi Akurat)
function calculateAge() {
  const birthDate = new Date("2000-06-11T00:00:00");

  setInterval(() => {
    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();
    let hours = now.getHours() - birthDate.getHours();
    let minutes = now.getMinutes() - birthDate.getMinutes();
    let seconds = now.getSeconds() - birthDate.getSeconds();

    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
    if (hours < 0) {
      hours += 24;
      days--;
    }
    if (days < 0) {
      const lastDayOfPreviousMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      days += lastDayOfPreviousMonth;
      months--;
    }
    if (months < 0) {
      months += 12;
      years--;
    }

    document.querySelector('#meInTheWorld .years').innerHTML = pad(years);
    document.querySelector('#meInTheWorld .months').innerHTML = pad(months);
    document.querySelector('#meInTheWorld .days').innerHTML = pad(days);
    document.querySelector('#meInTheWorld .hours').innerHTML = pad(hours);
    document.querySelector('#meInTheWorld .minutes').innerHTML = pad(minutes);
    document.querySelector('#meInTheWorld .seconds').innerHTML = pad(seconds);
    
    AGE = years;
  }, 1000);
}

// Panggil fungsi kalkulasi umur
calculateAge();

// Event listener untuk mengubah warna saat JENDELA BROWSER diubah ukurannya
window.addEventListener("resize", function() {
  if (window.outerWidth !== windowSize.w || window.outerHeight !== windowSize.h) {
    windowSize.w = window.outerWidth;
    windowSize.h = window.outerHeight;
    windowSize.iw = window.innerWidth;
    windowSize.ih = window.innerHeight;
    BODY.style.background = getRandomColor(98);
  } else if (window.innerWidth + window.innerWidth * .05 < windowSize.iw ||
    window.innerWidth - window.innerWidth * .05 > windowSize.iw) {
    windowSize.iw = window.innerWidth;
    BODY.style.background = getRandomColor(98);
  }
}, false);
