function animateCounter(id, end, duration=1800) {
  const el = document.getElementById(id);
  if (!el) return;
  let start = 0;
  const stepTime = Math.max(Math.floor(duration / end), 25);
  const step = () => {
    start += Math.ceil(end / (duration/stepTime));
    if (start > end) start = end;
    el.textContent = start;
    if (start < end) setTimeout(step, stepTime);
    else el.textContent = end;
  };
  step();
}
window.addEventListener("DOMContentLoaded", function() {

  if(document.getElementById("goalsCounter")){
    animateCounter("goalsCounter", 938, 1300); 
    animateCounter("trophiesCounter", 33, 800); 
    animateCounter("ballonsCounter", 5, 1000); 
    animateCounter("capsCounter", 206, 1300); 
  }
});
let carouselIndex = 0;
function showCarousel(idx) {
  const slides = document.querySelectorAll('.carousel-slide');
  if(!slides.length) return;
  slides.forEach((s, i) => s.classList.toggle('active', i === idx));
}
function carouselNext() {
  const slides = document.querySelectorAll('.carousel-slide');
  carouselIndex = (carouselIndex + 1) % slides.length;
  showCarousel(carouselIndex);
}
function carouselPrev() {
  const slides = document.querySelectorAll('.carousel-slide');
  carouselIndex = (carouselIndex - 1 + slides.length) % slides.length;
  showCarousel(carouselIndex);
}
window.addEventListener("DOMContentLoaded", () => {
  showCarousel(carouselIndex);
});

window.addEventListener("DOMContentLoaded",()=>{
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    if (link.href.replace(/\/$/,'') === window.location.href.replace(/\/$/,'')) {
      link.classList.add('active');
    }
  });
});