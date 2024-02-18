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
  window.location.href = "https://indianexpress.com/article/explained/explained-climate/himachal-pradesh-cloudbursts-explained-8892242/"; // Replace with the actual page you want to link to
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
  window.location.href = "Relief.html"; // Replace with the actual page you want to link to
}

function goToHome() {
  window.location.href = "index.html"; // Replace with the actual page you want to link to
}

function goToImages() {
  window.location.href = "images.html"; // Replace with the actual page you want to link to
}

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
  dots[slideIndex-1].className += " active";
}




