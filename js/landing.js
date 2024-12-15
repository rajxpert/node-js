

jQuery(document).ready(function($){
  
   $('.people-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        speed: 300,
        infinite: false,
        autoplaySpeed: 5000,
        autoplay: true,
        responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
      });

  

 
     $( '.banner-right a' ).on( 'click', function(e){
	     var href = $(this).attr( 'href' );
         $( 'html, body' ).animate({
          scrollTop: $( href ).offset().top
        }, '300' );
        e.preventDefault();
      
      });

      $('.lab-a').click(function(){  
        $(".tab-lab").removeClass('tab-active');
        $(".tab-lab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
        $(".lab-a").removeClass('active-a');
        $(this).parent().find(".lab-a").addClass('active-a');
       });
      
 
});

jQuery(document).ready(function($){
  $('.accordion-list > li > .answer').hide();
    
  $('.accordion-list > li').click(function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > li.active .answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
  });

  
});
 