$(document).ready(function() {

  $(".text").slideDown(3000, function() {

  });

  $(document).scrollTop(0);

  $("html").keypress(function() {



    var sc = $(window).scrollTop();

    console.log(sc);


    if (sc < 800) {

      $('html, body').animate({
        scrollTop: $("#sektion1").offset().top
      }, 2000);




    };




  });

  $(".box1").click(function() {
    $("#sektion2").show();
    $('html, body').animate({
      scrollTop: $("#sektion2").offset().top
    }, 2000);

  });

  $(".box2").click(function() {
    $("#sektion3").show();
    $("#två").css({
      "background-color": "green"
    });
    $('html, body').animate({
      scrollTop: $("#sektion3").offset().top
    }, 2000);

  });

  $("#ett").click(function() {
    $("#ett").css({
      "background-color": "green"
    });
    $('html, body').animate({
      scrollTop: $("#sektion1").offset().top
    }, 2000);

  });

})

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y >= 1800) {
    $("nav").fadeIn();
    $("nav").css({
      "display": "flex"
    });


  } else {
    $("nav").fadeOut(200);

  }
});