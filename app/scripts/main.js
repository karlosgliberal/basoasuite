$(document).ready(function() {

  $('.home').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage'],
    slidesColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
    css3: true ,
    slidesNavigation: true,
    afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex){
      if(anchorLink == '3rdPage'){
      }
    }   
  });

  $('#boton').click(function(e){
    $('.menus').addClass('transicion');
    $.fn.fullpage.moveTo('3rdPage', 1); 
  });

});

  // $('#segunda').fullpage({
  //   anchors: ['dosuno', 'dosdos', 'dostres'],
  //   slidesColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
  //   css3: true ,
  //   slidesNavigation: true,
  //   autoScrolling: false     
  // });



