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
    //    x = getRndInteger(65,85);
    document.querySelector(".container-box").style.width = "80%";
    document.querySelector(".container-box").setAttribute("data-value",  " ");
      document.querySelector(".btn-stop").style.opacity = "0";

    x = getRndInteger(5, AGE);
    document.querySelector(".container-box").style.paddingBottom = x/2+"%";
    document.querySelector(".container-box").setAttribute("data-value",  x+"%");
    // clearInterval(interval);
    NABIZ = 1000;
  } else {
    x = getRndInteger(30, 70);
    document.querySelector(".container-box").style.width = x + "%";
    document.querySelector(".container-box").setAttribute("data-value", x+ "%");

  }
};

var getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

randomWidth();

var interval = setInterval(() => {
  randomWidth();
}, NABIZ);

let stopbtn = document.querySelector(".btn-stop");

stopbtn.addEventListener("mouseover", function () {
  this.style.left = getRndInteger(-10, 99) + "%";
  this.style.top = getRndInteger(-10, 99) + "%";
  BODY.style.background = getRandomColor(98);
  this.innerHTML = "Hentikan :)";
  this.style.bottom = "auto";
  this.style.background = getRandomColor(50);
  let thisthis = this;

  let olsunmu = getRndInteger(190,200);
  if(olsunmu == 195 || olsunmu == 194){
    setTimeout(function (){
      thisthis.style.left = getRndInteger(-10, 99) + "%";
      thisthis.style.top = getRndInteger(-10, 99) + "%";
    },400)
  }

});

stopbtn.addEventListener("click", function () {
  clearInterval(interval);
  BODY.style.background = "white";
  this.style.opacity = "0";
});

function detectMob() {
  return window.innerWidth <= 1000 && window.innerHeight <= 1000;
}

function getRandomColor(brightness) {
  function randomChannel(brightness){
    var r = 255-brightness;
    var n = 0|((Math.random() * r) + brightness);
    var s = n.toString(16);
    return (s.length==1) ? '0'+s : s;
  }
  var randomColor1 = '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness),
      randomColor2 = '#' + randomChannel(brightness) + randomChannel(brightness) + randomChannel(brightness);
  if(brightness === 50){
    return randomColor2;
    // return 'radial-gradient(at top left, '+randomColor1+', '+randomColor2+')'
  }else
    return randomColor1;

}



// document.querySelector("#date_").innerHTML =(new Date()).getFullYear();
// // document.querySelector(".footer").style.marginTop = (window.innerHeight/2) - 250 +"px";
// // console.log(window.innerHeight)


// function pad(d) {
//   return (d < 10) ? '0' + d.toString() : d.toString();
// }

// var calculateAge = () => {
//   let age_year = document.querySelector('#meInTheWorld .years');
//   let age_months = document.querySelector('#meInTheWorld .months');
//   let age_days = document.querySelector('#meInTheWorld .days');
//   let age_hours = document.querySelector('#meInTheWorld .hours');
//   let age_minutes = document.querySelector('#meInTheWorld .minutes');
//   let age_seconds = document.querySelector('#meInTheWorld .seconds');
//   let birth_date = new Date('June 11, 2000'); // Ubah format string untuk membuat objek Date dengan benar
//   setInterval(function(){
//     var current_date = new Date();
//     let years = current_date.getFullYear() - birth_date.getFullYear();
//     let months = current_date.getMonth() - birth_date.getMonth();
//     let days = current_date.getDate() - birth_date.getDate();
//     let hours = current_date.getHours() - birth_date.getHours();
//     let minutes = current_date.getMinutes() - birth_date.getMinutes();
//     let seconds = current_date.getSeconds() - birth_date.getSeconds();

//     // Handle jika months, days, hours, minutes, atau seconds negatif
//     if (months < 0) {
//       years--;
//       months += 12;
//     }
//     if (days < 0) {
//       months--;
//       let tempDate = new Date(current_date.getFullYear(), current_date.getMonth(), 0);
//       days += tempDate.getDate();
//     }
//     if (hours < 0) {
//       days--;
//       hours += 24;
//     }
//     if (minutes < 0) {
//       hours--;
//       minutes += 60;
//     }
//     if (seconds < 0) {
//       minutes--;
//       seconds += 60;
//     }

//     age_year.innerHTML = pad(years);
//     age_months.innerHTML = pad(months);
//     age_days.innerHTML = pad(days);
//     age_hours.innerHTML = pad(hours);
//     age_minutes.innerHTML = pad(minutes);
//     age_seconds.innerHTML = pad(seconds);
//   }, 1000);
// }


// calculateAge();



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



//init object to store window properties
window.addEventListener("resize", function() {
  if (window.outerWidth !== windowSize.w || window.outerHeight !== windowSize.h) {
    windowSize.w = window.outerWidth; // update object with current window properties
    windowSize.h = window.outerHeight;
    windowSize.iw = window.innerWidth;
    windowSize.ih = window.innerHeight;
    BODY.style.background = getRandomColor(98);

  }
  //if the window doesn't resize but the content inside does by + or - 5%
  else if (window.innerWidth + window.innerWidth * .05 < windowSize.iw ||
      window.innerWidth - window.innerWidth * .05 > windowSize.iw) {
    windowSize.iw = window.innerWidth;
    BODY.style.background = getRandomColor(98);

  }
}, false)

