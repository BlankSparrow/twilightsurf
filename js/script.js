
$(document).ready(function(){
    $(".sub-box").hide();
    $(".title-box").click(function(){
        $(this).fadeOut(2000);
        $(".sub-box").delay( 2000 ).fadeIn(2000);
    });

    $(".sub-box").click(function(){
        $(this).fadeOut(2000);
        $(".sub-box").delay( 100 ).fadeIn(2000);
    });
});

