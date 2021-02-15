function slider(sliderParent, prevElem, nextElem, dotswrap, allDots){
    

let slideIndex = 1,
    slides = document.querySelectorAll(sliderParent),
    prev = document.querySelector(prevElem), 
    next = document.querySelector(nextElem), 
    dotsWrap = document.querySelector(dotswrap),
    dots = document.querySelectorAll(allDots);

showSlides();

function showSlides(n, activeClass){

if(n > slides.length) {
    slideIndex = 1;
}
if (n < 1) {
    slideIndex = slides.length;
}

slides.forEach( item => item.style.display = 'none');

dots.forEach(item => item.classList.remove(activeClass));

slides[slideIndex - 1].style.display = 'block';
dots[slideIndex - 1].classList.add(activeClass);
}

function plusSlides(n){
showSlides(slideIndex += n, 'dot-active');
}

function currentSlide(n){
showSlides(slideIndex = n, 'dot-active');
}

prev.addEventListener('click', function(){
plusSlides(-1);
});

next.addEventListener('click', function(){
plusSlides(1);
});

dotsWrap.addEventListener('click', function(e){
for (let i = 0; i < dots.length + 1; i++) {
    if (e.target.classList.contains('dot') && e.target == dots[i-1]){
        currentSlide(i);
    }
    
}
});
}

export default slider;


// use module
// slider('.slider-item', '.prev', '.next', '.slider-dots', '.dot');