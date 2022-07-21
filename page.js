let slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
    showSlides(slidesIndex += n);
}

//Thumbnail images controls
function currentSlide(n) {
    ShowSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].getElementsByClassName.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].getElementsByClassName.display = "block";
    setTimeout(showSlides, 2000); //Change image every 2 seconds
}

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
