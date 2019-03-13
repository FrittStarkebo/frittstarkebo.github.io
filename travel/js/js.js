$("#knapp").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#b").offset().top
    }, 2000);
});

$("#knapp2").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#a").offset().top
    }, 2000);
});
