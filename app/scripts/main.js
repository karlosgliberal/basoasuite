$(document).ready(function() {
  //Sistema de Carrusel
  $('#belea-carrusel, #beigorri-carrusel, #okolin-carrusel, #bedats-carrusel, #recepcion-carrusel').carousel({interval:false});
  $('#controles a').click(function(e){
    var id = e.target.id;
    var arrayIdGeneral = id.split("-");
    var idIzquierda = '#'+arrayIdGeneral[0]+'-izquierda';
    $(idIzquierda).show();
  });

  //Sistema de onepage de portada con el modulo Fullpaje.js
  $('.home').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage'],
    resize: false,
    slidesColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
    // css3: true ,
    slidesNavigation: true,
    afterLoad: function(anchorLink, index){
     if(anchorLink == '3rdPage'){
          console.log('hola afterLoad');
     }
    },
    afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
      if(anchorLink == '3rdPage'){
      }
    }   
  });

  //Sistema para el footer lateral
  //Ir a casas
  $('#boton-casas').click(function(e){
    $('.home-casas').transition({ left: 0 }, 800, 'ease');
    $('#boton-casas').transition({opacity:0}, 800, 'ease');
    $('#home').transition({opacity:0}, 2000, 'ease');
    setTimeout(function() {
    $('#boton-volver').transition({opacity:1}, 'ease');
    $('#boton-volver').removeClass('boton-opacity');
    $('#boton-casas').addClass('boton-opacity');
    }, 900);
  });

  //Volver a casas
  $('#boton-volver').click(function(e){
    $('#home').transition({opacity:1});
    $('.home-casas').transition({ left: '80%' }, 800, 'ease');
    $('#boton-volver').transition({opacity:0}, 800, 'ease');
    setTimeout(function() {
      $('#boton-casas').transition({opacity:1}, 'ease');
      $('#boton-casas').removeClass('boton-opacity');
      $('#boton-volver').addClass('boton-opacity');
    }, 900);
  });

  //Acceso a las casas mediante el menú
  $('.casas').click(function(e){
    e.preventDefault();
    $('.carrusel-off').each(function(index){
     $(this).transition({opacity:0, dalay:50});
     $(this).removeClass('active');
    });
    $('#'+e.target.id+'-carrusel-wrapper').transition({opacity:1, delay:50});
    $('#'+e.target.id+'-carrusel-wrapper').addClass('active');
  });

});


