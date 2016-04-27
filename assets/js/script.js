$(document).ready(function() {

  $(".blogreadmorebutton").hover(function(){
       $(this).css("text-decoration", "underline");
       }, function(){
       $(this).css("text-decoration", "none");
   });



   $("#carousel-next").click(function() {
       var replacement = parseInt($('#carousel').css('margin-left').replace("px", ""));
       var width = parseInt($('.carousel-item').css('width').replace("px", ""));
        var totalwidth = -1 * parseInt($('#carousel').css('width').replace("px",""));
        totalwidth = totalwidth * .8;
        console.log(replacement, "before replacement")
        console.log(totalwidth, "totalwidth")


       if (replacement == totalwidth)
         {return false}
       else {
         replacement = replacement - width
       $('#carousel').css('margin-left', replacement)
         console.log(replacement, "after replacement")}
     });

     //Implement the "slide to right" when the user clicks on #carousel-prev here
     $("#carousel-prev").click(function() {
         var replacement = parseInt($('#carousel').css('margin-left').replace("px", ""));
         var width = parseInt($('.carousel-item').css('width').replace("px", ""));
         var totalwidth = parseInt($('#carousel').css('width').replace("px",""));
         if (replacement == 0)
           {return false}
         else {
           console.log(replacement, "replacement!")

           replacement = replacement + width;
         $('#carousel').css('margin-left', replacement)
        console.log(replacement, "after replacement")}
       });


     $('a').click(function() {

     $('html, body').animate({
       scrollTop: $( $.attr(this, 'href')).offset().top
     }, 300);
      });

      $("#projectimage1").hover(function(){
          $("#overlay1").slideDown(400);}, function() {$("#overlay1").fadeOut(400);}
      )
      $("#projectimage2").hover(function(){
          $("#overlay2").slideDown(400);}, function() {$("#overlay2").fadeOut(400);}
      )
      $("#projectimage3").hover(function(){
          $("#overlay3").slideDown(400);}, function() {$("#overlay3").fadeOut(400);}
      )






});
