$(function() {
  $('.header__burger').on('click', function() {
    $(this).toggleClass('header__burger--open');
    $('.header__nav').toggleClass('active');
    $('.header__nav').slideToggle();
  })
});