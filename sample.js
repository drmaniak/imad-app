var main = function () {
   $('.dropdown-toggle').click(function(){
      $('.dropdown-menu').toggle(450);
   });
   
   
   
   
   $('.arrow-next').click(function(){
      var currentSlide = $('.active-slide');
      var nextSlide = currentSlide.next();
      var currentDot = $('.active-dot');
      var nextDot = currentDot.next();
      if(nextSlide.length ===0){
         nextSlide = $('.slide').first();
         nextDot = $('.dot').first();
      }
      
      currentSlide.fadeOut(700).removeClass('active-slide');
      nextSlide.fadeIn(700).addClass('active-slide');
      
      currentDot.removeClass('active-dot');
      nextDot.addClass('active-dot');
      
   });
   $('.arrow-prev').click(function(){
      var currentSlide = $('.active-slide');
      var prevSlide = currentSlide.prev();
      var currentDot = $('.active-dot');
      var prevDot = currentDot.prev();
      if(prevSlide.length === 0){
         prevSlide = $('.slide').last();
         prevDot = $('.dot').last();
      }
      currentSlide.fadeOut(700).removeClass('active-slide');
      prevSlide.fadeIn(700).addClass('active-slide');
      
      currentDot.removeClass('active-dot');
      prevDot.addClass('active-dot');
   });
   
   $('.lion').click(function(){
      $(this).text("Oooh boy, looks like we've got a problem child here...");
   });
   
   $('.bear').click(function(){
      $(this).text("Listen, there's still time.. mend your ways.");
   });
   $('.hawaii').click(function(){
      $(this).text("You need help. Serioiusly consider getting admitted into a rehabilitation facility.");
   });
};

$(document).ready(main);
