
$(document).ready(function(){
    init = true;

    $(".sub-box").hide();
    $("html").click(function(){
        if (init){
            $(".title-box").fadeOut(2000);
            $(".sub-box").delay( 2000 ).fadeIn(2000);
            init = false;
        } else {
             $(".sub-box").fadeOut(2000);
	        $(".sub-box").delay( 100 ).fadeIn(2000);
        }
    });
});

