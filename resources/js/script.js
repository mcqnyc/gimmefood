$(document).ready(function(){
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction){
        if(direction === "down"){
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px'
    });
   
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function(){
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-start').click(function(){
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
    
    
    /* Navigation scroll */
    
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    /* Animate on scroll */
    $('.js--fade-in').waypoint(function(direction){
        $('.js--fade-in').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--fade-up-phone').waypoint(function(direction){
        $('.js--fade-up-phone').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--fade-in-cities').waypoint(function(direction){
        $('.js--fade-in-cities').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--pulse-plan').waypoint(function(direction){
        $('.js--pulse-plan').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    /* Mobile navigation */
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round')
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round')
        }
        
    });
    
    
    /* Map plugin */
    // var map = new GMaps({
    //   div: '.map',
    //   lat: 38.7139092,
    //   lng: -9.00356702,
    //     zoom: 11
    // });
    
    // map.addMarker({
    //   lat: 38.7139092,
    //   lng: -9.2056702,
    //   title: 'Lisbon',
    //   infoWindow: {
    //       content: '<p>Our Lisbon HQ</p>'
    //     }
    // });
});