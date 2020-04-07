$(document).ready(function(){

  $('#slider-home').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  //Interfaz

  $('.icono-menu-mobile').click(function(){
    $('nav.menu-principal').toggleClass('activo');
  });

});
