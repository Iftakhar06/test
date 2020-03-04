(function ($) {
    "use strict";
    
    $('.brand-active').owlCarousel({
        loop:true,
        margin:0,
        items:1,
        // autoplay:true,
        // animateIn:'fadeIn',
        navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    
    })(jQuery);
