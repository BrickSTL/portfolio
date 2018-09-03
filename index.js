$(function() {
  // Navingation
    var header = $(".navbar");
    var abs = $(".abs-center-x");
    $("#sub-head").css("display","none");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 250) {
            header.addClass("scrolled sticky sub-head");
            $("#sub-head").css("display","flex");

            $(".sub-head2").css("display","flex");
            $("#menu-dot").css("background","#00d4c4");

            abs.removeClass("abs-center-x sub-head");
        } else {
            header.removeClass("scrolled sticky");
            $("#sub-head").css("display","none");
            $(".nav-link").css("color","black");
            $(".sub-head2").css("display","none");
            $("#menu-dot").css("background","transparent");


            abs.addClass("abs-center-x");
        }
    });
    $(".skill-box").hover(function(){
      $(this).css("background-color", "black")
      $(this).children().css("color", "#white");
    },function(){
      $(this).css("background-color", "transparent");
      $(this).children().css("color", "white");
    });
});
// When the user clicks on div, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup")
    popup.classList.toggle("show");
}
function myFunction2() {
    var popup = document.getElementById("myPopup2")
    popup.classList.toggle("show");
}
function myFunction3() {
    var popup = document.getElementById("myPopup3")
    popup.classList.toggle("show");
}
