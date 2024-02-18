const langSwitch = document.getElementById("lang-switch");

langSwitch.addEventListener("change", () => {
  const lang = langSwitch.value;
  const html = document.querySelector("html");
  html.lang = lang;
});


function goToNewPage() {
  window.location.href = "https://indianhelpline.com/himachal-pradesh"; // Replace with the actual page you want to link to
}

function goToNewPage1() {
  window.location.href = "HomeSafety.html"; // Replace with the actual page you want to link to
}
function goToMore() {
  window.location.href = "https://earthquakelist.org/india/himachal-pradesh/"; // Replace with the actual page you want to link to
}
function goToNdfrf() {
  window.location.href = "https://www.ndrf.gov.in/"; // Replace with the actual page you want to link to
}
function goToSdrf(){
  window.location.href ="https://ndma.gov.in/index.php/Response/SDRF"
}

function goToEmergency(){
  window.location.href ="https://ndma.gov.in/Response/Emergency-Operations-Center"
}
function goToCivil(){
  window.location.href ="https://dgfscdhg.gov.in/civil-defence"
}
function goToFire(){
  window.location.href ="https://ndma.gov.in/Response/Fire-Service"
}
function goToHomeGuard(){
  window.location.href ="https://dgfscdhg.gov.in/node/32"
}

function goToNewPage2() {
  window.location.href = "EarthQuake.html"; // Replace with the actual page you want to link to
}

function goToNewPage3() {
  window.location.href = "Landslide.html"; // Replace with the actual page you want to link to
}


function goToNewPage4() {
  window.location.href = "CloudBurst.html"; // Replace with the actual page you want to link to
}
function goToNewPage5() {
  window.location.href = "Avalanche.html"; // Replace with the actual page you want to link to
}
function goToNewPage6() {
  window.location.href = "ForestFire.html"; // Replace with the actual page you want to link to
}

function goToReliefPage() {
  window.location.href = "https://rzp.io/l/qS91oYY0G"; // Replace with the actual page you want to link to
}

function goToHome() {
  window.location.href = "index.html"; // Replace with the actual page you want to link to
}

function goToImages() {
  window.location.href = "images.html"; // Replace with the actual page you want to link to
}

function goToNews(){
  window.location.href ="https://www.divyahimachal.com/";
}

/*

 change language 
 
function changeLanguage(){
 var languageSelector = document.getElementById('languageSelector');
 var selectedLanguage = languageSelector.value;
 document.getElementById('Home').innerText = getContent(selectedLanguage , 'home');
}

*/
// Sliding images
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 2 seconds
}

// Earthquake Images Sliding

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}







// const langSwitch = document.getElementById("lang-switch");

// langSwitch.addEventListener("change", () => {
//   const lang = langSwitch.value;
//   const html = document.querySelector("html");
//   html.lang = lang;
// });


// function goToNewPage() {
//   window.location.href = "https://indianhelpline.com/himachal-pradesh"; // Replace with the actual page you want to link to
// }

// function goToNewPage1() {
//   window.location.href = "HomeSafety.html"; // Replace with the actual page you want to link to
// }
// function goToMore() {
//   window.location.href = "https://earthquakelist.org/india/himachal-pradesh/"; // Replace with the actual page you want to link to
// }
// function goToNdfrf() {
//   window.location.href = "https://www.ndrf.gov.in/"; // Replace with the actual page you want to link to
// }
// function goToSdrf(){
//   window.location.href ="https://ndma.gov.in/index.php/Response/SDRF"
// }

// function goToEmergency(){
//   window.location.href ="https://ndma.gov.in/Response/Emergency-Operations-Center"
// }
// function goToCivil(){
//   window.location.href ="https://dgfscdhg.gov.in/civil-defence"
// }
// function goToFire(){
//   window.location.href ="https://ndma.gov.in/Response/Fire-Service"
// }
// function goToHomeGuard(){
//   window.location.href ="https://dgfscdhg.gov.in/node/32"
// }

// function goToNewPage2() {
//   window.location.href = "EarthQuake.html"; // Replace with the actual page you want to link to
// }
// function goToNational(){
//   window.location.href ="https://ndma.gov.in/";
// }
// function goToNews(){
//   window.location.href ="https://www.divyahimachal.com/";
// }

// function goToNewPage3() {
//   window.location.href = "Landslide.html"; // Replace with the actual page you want to link to
// }
// function goToNewPage4() {
//   window.location.href = "CloudBurst.html"; // Replace with the actual page you want to link to
// }
// function goToNewPage5() {
//   window.location.href = "Avalanche.html"; // Replace with the actual page you want to link to
// }
// function goToNewPage6() {
//   window.location.href = "ForestFire.html"; // Replace with the actual page you want to link to
// }

// function goToReliefPage() {
//   window.location.href = "Relief.html"; // Replace with the actual page you want to link to
// }

// function goToHome() {
//   window.location.href = "index.html"; // Replace with the actual page you want to link to
// }

// function goToImages() {
//   window.location.href = "images.html"; // Replace with the actual page you want to link to
// }

// // Sliding images
// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 3000); // Change image every 2 seconds
// }

// // Earthquake Images Sliding

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlide");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }


// //Languages Changes

// function changeLanguage(languageCode) {
//   Array.from(document.getElementsByClassName('lang')).forEach(function (elem) {
//       if (elem.classList.contains('lang-' + languageCode)) {
//            elem.style.display = 'initial';
//       }
//       else {
//            elem.style.display = 'none';
//       }
//   });
// }

// // select handler
// const selector = document.getElementById('lang-switch');
// selector.addEventListener('change', function (evt) {
//   changeLanguage(this.value);
// });

// // detect initial browser language
// const lang = navigator.userLanguage || navigator.language || 'en-EN';
// const startLang = Array.from(selector.options).map(opt => opt.value).find(val => lang.includes(val)) || 'en';
// changeLanguage(startLang);

// // updating select with start value
// selector.selectedIndex = Array.from(selector.options).map(opt => opt.value).indexOf(startLang)

// // fill "The selected language is:"
// document.getElementById('browserLang').innerText = lang;
// document.getElementById('startLang').innerText = startLang;