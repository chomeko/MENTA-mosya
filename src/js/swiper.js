$( function() {
  var swiper = new Swiper('.slider1', {
    speed: 400,
    autoplay: true,
    loop: true,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    on: {
      slideChange: function () {
        jQuery('.swiper-slide-content').css('opacity', '0');
        realIndex = this.realIndex + 1;
        jQuery('.swiper-slide-content-' + realIndex).css('opacity', '1');
      }
    },
  });

  var swiper = new Swiper('.slider2', {
    speed: 400,
    loop: true,
    spaceBetween: 10,
    slidesPerView: 2,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      990: {
        slidesPerView: 1,
        spaceBetween: 10,
        //centeredSlides : true,
      },
    }
  });
});

