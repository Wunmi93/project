let slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Thumbnail images controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides() {
    let i; ///Initialize a variable called i
    let slides = document.getElementsByClassName("mySlides"); //Get elements in the HTML doc having class name 'mySlides'
    // console.log(slides); //logging variable slides to the console. 
    for (i = 0; i < slides.length; i++) {
        slides[i].display = "block";
        // console.log(slides[i].display);
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].display = "none";
    setInterval(showSlides, 3000); 
}



// function logToConsole() {
//     console.log("W");
// }
// setInterval(logToConsole, 3000); //Change image every 2 seconds
/*
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {dlideIndex =1}
    if (n < 1) {slidesIndex = slides.length}
    for (i = 0; i < slides.length; i++) {slides[i].sytle.display = "none";}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
}
*/