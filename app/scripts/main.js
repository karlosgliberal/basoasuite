$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage'],
    slidesColor: ['#C63D0F', '#1BBC9B', '#7E8F7C'],
    css3: true ,
    slidesNavigation: true,     
  });

  $('#movida').click(function(e){
    console.log('hola');
    e.preventDefault();
    $.fn.fullpage.moveSlideLeft();
  });
});