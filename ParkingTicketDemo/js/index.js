$(document).ready(function(){
    $("#page2").css('display','none');
    $("#page3").css('display','none');
    $("#page4").css('display','none');
    $("#search").click(function(){
        $("#page1").fadeOut("slow");
        $("#page2").fadeIn("slow");
        $(".bullet2").addClass('active');
    });
    $("#confirm-ticket").click(function(){
        $("#page2").fadeOut("slow");
        $("#page3").fadeIn("slow");
        $(".bullet3").addClass('active');

    });
    $("#confirm-final").click(function(){
        $("#page3").fadeOut("slow");
        $("#page4").fadeIn("slow");
        $(".bullet4").addClass('active');
    });
    //     PAYMENT OPTIONS PAGE
  	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
});
