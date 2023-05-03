let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');}

window.onscroll = () =>{
  searchForm.classList.remove('active');
  navbar.classList.remove('active');}

//--------------------------

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){showSlides(slideIndex += n);}

function currentSlide(n){showSlides(slideIndex = n);}

function showSlides(n){
    let i;
    let slides = document.getElementsByClassName("Slide");
	
    if (n > slides.length) { slideIndex = 1 }
	
    if (n < 1) { slideIndex = slides.length }
	
    for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";}

    slides[slideIndex - 1].style.display = "block";}

//----------------------

let filterBtn = document.querySelectorAll('.filter .buttons');
let filterItem = document.querySelectorAll('.products .boxs .box');

filterBtn.forEach(button =>{

  button.onclick = () =>{
    filterBtn.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    let dataFilter = button.getAttribute('data-filter');

    filterItem.forEach(item =>{

      item.classList.remove('active');
      item.classList.add('hide');

      if(item.getAttribute('data-item') == dataFilter || dataFilter == 'all'){
        item.classList.remove('hide');
        item.classList.add('active');}

    });
  };
});

//----------------------

var testim = document.getElementById("testim"),
    testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimleftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer;
	
	
// coding with nick
	
window.onload = function () {

    // Testim Script
	
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");}
		
        if (slide < 0) {slide = currentSlide = testimContent.length - 1;}
		
        if (slide > testimContent.length - 1) {slide = currentSlide = 0;}
		
        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");}
		
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
			playSlide(currentSlide += 1);}, testimSpeed)}
	
// coding with nick
	
    testimleftArrow.addEventListener("click", function () {
        playSlide(currentSlide -= 1);})
	
    testimRightArrow.addEventListener("click", function () {
        playSlide(currentSlide += 1);})

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function () {
            playSlide(currentSlide = testimDots.indexOf(this));})}
	
    playSlide(currentSlide);}	
