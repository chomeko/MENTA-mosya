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

