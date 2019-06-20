(function($, window, document) {
    "use strict";
    $(function() {
         var      
            $body      = $('body'),
            $hamburger = $('.hamburger'),
            $menu   = $('.main_nav');

        $hamburger.click(function() {
            $body.toggleClass('menuopened');
            $('.main_nav').toggleClass('menutoggled');
            $(this).toggleClass('toggled');
            $menu.slideToggle('fast');
        });
        $(window).scroll(function() {
             var scroll = $(window).scrollTop();
             if (scroll >= 100) {
                 $("body").addClass("header-fixed");
             }
             if (scroll < 100) {
                 $("body").removeClass("header-fixed");
             }
        });


        //slider script
        var controls = document.querySelectorAll('.controls');
        for(var i=0; i<controls.length; i++){
            controls[i].style.display = 'inline-block';
        }
 
        var slides = document.querySelectorAll('#slides .slide');
        var currentSlide = 0;

        function nextSlide(){
            goToSlide(currentSlide+1);
        }

        function previousSlide(){
            goToSlide(currentSlide-1);
        }

        function goToSlide(n){
            slides[currentSlide].className = 'slide';
            currentSlide = (n+slides.length)%slides.length;
            slides[currentSlide].className = 'slide showing';
        }

        var playing = true;

        var next = document.getElementById('next');
        var previous = document.getElementById('previous');

        next.onclick = function(){

            nextSlide();
        };
        previous.onclick = function(){
            previousSlide();
        };
        //end slider script

    });
}(window.jQuery, window, document));