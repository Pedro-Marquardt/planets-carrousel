document.addEventListener('DOMContentLoaded', function() {
const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');
const prevBtn = slider.querySelector('.prev-btn');
const nextBtn = slider.querySelector('.next-btn');

let currentSlide = 0;

  function showSlide() {
    images.forEach((image, index) => {
      if (index === currentSlide) {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });
  }

  function goToPrevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = images.length - 1;
    }
    showSlide();
  }

  function goToNextSlide() {
    currentSlide++;
    if (currentSlide >= images.length) {
      currentSlide = 0;
    }
    showSlide();
  }

  prevBtn.addEventListener('click', goToPrevSlide);
  nextBtn.addEventListener('click', goToNextSlide);

  showSlide();
});