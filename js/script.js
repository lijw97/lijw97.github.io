$(document).ready(function() {





  //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:



$("#sidebar-button").click(function() {
  if ( $(".sidebar-container").hasClass("sidebar-active") ) {
    $( "body" ).removeClass("no-scroll");
    $( "#sidebar-button" ).removeClass("button-active");
    $( ".sidebar-container" ).removeClass("sidebar-active");
    $( ".page-wrapper" ).removeClass("wrapper-active");
  }

  else {
  $("#sidebar-button").addClass("button-active");
  $(".sidebar-container").addClass("sidebar-active");
  $(".page-wrapper").addClass("wrapper-active");
  setTimeout(function() {
  $('body').addClass('no-scroll');
  }, 300);
}

});



  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:
$(".page-wrapper").click(function() {
  if ( $(".sidebar-container").hasClass("sidebar-active") ) {
    $( "body" ).removeClass("no-scroll");
    $( "#sidebar-button" ).removeClass("button-active");
    $( ".sidebar-container" ).removeClass("sidebar-active");
    $( ".page-wrapper" ).removeClass("wrapper-active");
  }
});




  // Implement a "smooth scroll" when the user clicks on the sidebar links here
$('a.sidebar').click(function() {
  $( "body" ).removeClass("no-scroll");
  $('html, body').animate({
    scrollTop: $( $.attr(this, 'href')).offset().top
  }, 300);
  setTimeout(function() {
    $('.sidebar-container').removeClass('sidebar-active');
    $('#sidebar-button').removeClass('button-active');
    $('.page-wrapper').removeClass('wrapper-active')
    }, 300);
  return false;
});


  //
});
