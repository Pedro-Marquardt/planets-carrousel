document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider');
  const images = slider.querySelectorAll('.img');
  const prevBtn = slider.querySelector('.prev-btn');
  const nextBtn = slider.querySelector('.next-btn');
  const formBtn = document.querySelector('.formBtn');
  let currentSlide = 0;
  let planetInfo = 3.8;
  let pesoTerra = 0

  function showAlert() {
    let peso = parseFloat(prompt("Informe seu peso:", "0")  );
    pesoTerra = peso;
    updatePlanetInfo(currentSlide,pesoTerra);
  }


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
    console.log(currentSlide)
    updatePlanetInfo(currentSlide, pesoTerra)
    console.log(pesoTerra)
    showSlide();
  }

  function goToNextSlide() {
    currentSlide++;
    if (currentSlide >= images.length) {
      currentSlide = 0;
    }
    console.log(currentSlide)
    updatePlanetInfo(currentSlide,pesoTerra)
    console.log(pesoTerra)
    showSlide();
  }

  function updatePlanetInfo(param, peso) {
    switch (param) {
      case 0:
        planetInfo = 3.8 * ( peso / 9.8 );
        break;
        case 1:
        planetInfo = 8.6 * (peso / 9.8);
        break;
        case 2:
        planetInfo = 'É o peso que você informou antes né';
        break;
        case 3:
        planetInfo = 3.72 * (peso / 9.8);
        break;
        case 4:
        planetInfo = 24.8 * (peso / 9.8);
        break;
        case 5:
        planetInfo = 10.5 * (peso / 9.8);
        break;
        case 6:
        planetInfo = 8.5 * (peso / 9.8);
        break;
        case 7:
        planetInfo = 10.8 * (peso / 9.8);
        break;
    
      default:
        planetInfo = ''
        break;
    };

    const elementoResultado = document.getElementById("resultado");

    elementoResultado.textContent = planetInfo + " kg";


  }


  updatePlanetInfo(currentSlide, pesoTerra);
  prevBtn.addEventListener('click', goToPrevSlide);
  nextBtn.addEventListener('click', goToNextSlide);
  formBtn.addEventListener('click', showAlert);


  showSlide();
});