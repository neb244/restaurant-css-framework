
document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = new bootstrap.Carousel(document.getElementById('myCarousel'), {
        interval: 2000, // Réglez l'intervalle de diaporama ici (en millisecondes)
        wrap: true
    });

    // Gère la navigation lorsque vous cliquez sur les éléments de pagination
    var carouselIndicators = document.querySelectorAll('.carousel-indicators li');
    carouselIndicators.forEach(function (indicator, index) {
        indicator.addEventListener('click', function () {
            myCarousel.to(index);
        });
    });

    // Met à jour la classe active sur les éléments de pagination lorsque le carousel change de diapositive
    myCarousel._element.addEventListener('slide.bs.carousel', function (event) {
        carouselIndicators.forEach(function (indicator) {
            indicator.classList.remove('active');
        });
        carouselIndicators[event.to].classList.add('active');
    });
});
function showCookieBanner() {
    const cookieBanner = document.getElementById('cookieBanner');
    cookieBanner.style.display = 'block';
  }
  
  
  function acceptCookies() {
    const cookieBanner = document.getElementById('cookieBanner');
    cookieBanner.style.display = 'none';
  
    
    document.cookie = 'cookies_accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';
  }
  
  const cookiesAccepted = document.cookie.includes('cookies_accepted=true');
  
  if (!cookiesAccepted) {
    showCookieBanner();
  }