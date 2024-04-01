let slideIndex=0;
function showSlide(){
    let slides=document.getElementsByClassName("mySlides");
    if(slideIndex != 0){
        slides[slideIndex-1].style.animation="slideActive1 2s forwards";
    }
    if(slideIndex == 0){
        slides[slides.length-1].style.animation="slideActive1 2s forwards";
        slides[slides.length-2].style.animation="slideActive2 2s forwards";
        slides[slides.length-3].style.animation="slideActive3 0s forwards";
    }else if(slideIndex == 1){
        slides[0].style.animation="slideActive1 2s forwards";
        slides[slides.length-1].style.animation="slideActive2 2s forwards";
        slides[slides.length-2].style.animation="slideActive3 0s forwards";
    }else if(slideIndex == 2){
            slides[1].style.animation="slideActive1 2s forwards";
            slides[0].style.animation="slideActive2 2s forwards";
            slides[slides.length-1].style.animation="slideActive3 0s forwards";
    }else{
        slides[slideIndex-1].style.animation="slideActive1 2s forwards";
        slides[slideIndex-2].style.animation="slideActive2 2s forwards";
        slides[slideIndex-3].style.animation="slideActive3 0s forwards";
    }
    slideIndex++;
    if(slideIndex>slides.length){
        slideIndex=1;
    }
    slides[slideIndex-1].style.animation="slideActive 2s forwards";
    setTimeout(showSlide,10000);
}
showSlide();