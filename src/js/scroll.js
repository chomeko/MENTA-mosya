$(function () {
  $('.header a[href^="#"]').click(function () {
    var speed = 600;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('.header__trigger').click();
    $("html,body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  $('a[href^="#About"]').click(function () {
    var speed = 600;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html,body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  $(function() {
    var TopBtn = $('#PageTopBtn');
    // ボタンを押下するとトップへ移動
    TopBtn.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
  });
});