$(document).ready(function() {

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

  $('#boton-casas').click(function(e){
    $('.yo').transition({ left: 0 }, 800, 'ease');
    $('#boton-casas').transition({opacity:0}, 800, 'ease');
    $('#home').transition({opacity:0}, 2000, 'ease');
    setTimeout(function() {
    $('#boton-volver').transition({opacity:1}, 'ease');
    $('#boton-volver').removeClass('boton-opacity');
    $('#boton-casas').addClass('boton-opacity');
    }, 900);
  });

  $('#boton-volver').click(function(e){
    $('#home').transition({opacity:1});
    $('.yo').transition({ left: '80%' }, 800, 'ease');
    $('#boton-volver').transition({opacity:0}, 800, 'ease');
    setTimeout(function() {
      $('#boton-casas').transition({opacity:1}, 'ease');
      $('#boton-casas').removeClass('boton-opacity');
      $('#boton-volver').addClass('boton-opacity');
    }, 900);
  });

  $('.casas').click(function(e){
    e.preventDefault();
    $('.carrusel-off').each(function(index){
     $(this).removeClass('active');
    });
    $('#'+e.target.id+'-carrusel').addClass('active'); 
    console.log();
  });

});

  // $('#segunda').fullpage({
  //   anchors: ['dosuno', 'dosdos', 'dostres'],
  //   slidesColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
  //   css3: true ,
  //   slidesNavigation: true,
  //   autoScrolling: false     
  // });



