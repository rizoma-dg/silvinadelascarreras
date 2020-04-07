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

eventBinding_toggleMenu();

//Lo guardo en una variable por razones de testeo
var eventBinding_toggleMenu = function(){
                                $('.icono-menu-mobile').click(function(){
                                  console.log('click menu');
                                  $('nav.menu-principal').toggleClass('activo');
                                });
                              }


});
