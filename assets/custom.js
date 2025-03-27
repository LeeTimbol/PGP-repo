
$(document).ready(function(){
    $('.banner-slider-section').flickity({
        cellAlign: 'left',
        wrapAround: true,
        autoPlay: true,
        prevNextButtons: false,
        imagesLoaded: true,
        pageDots: true
      });
});  
$(document).ready(function(){
    $('.collection-slider-grid-products').flickity({
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false
      });
}); 
$(document).ready(function(){
  $('.testimonial-slider-reviews').flickity({
      wrapAround: true,
      cellAlign: 'center',
      autoPlay: true
    });
}); 