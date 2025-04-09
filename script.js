document.addEventListener("DOMContentLoaded", function () {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true
    });
  
    new Swiper('.review-swiper', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }
    });
  });

  


  