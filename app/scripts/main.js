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

  $('#boton').click(function(e){
    $('.yo').transition({ left: 0 }, 800, 'ease');
    setTimeout(function() {
    $('#home').remove();
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



