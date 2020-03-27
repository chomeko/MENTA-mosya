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
});

$(function () {
  var swiper = new Swiper('.slider2', {
    speed: 400,
    loop: true,
    //spaceBetween: 35,
    slidesPerView: 1.4,
    centeredSlides: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      //990: {
        //slidesPerView: 2,
        //spaceBetween: 0,
      //},
      768: {
        slidesPerView: 1.4,
        //spaceBetween: 30,
      },
    },
  });
});