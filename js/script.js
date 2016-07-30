var debug = false;
$(document).ready(function(){
    var init = true;
    var clickDisabled = false;
    $(".sub-box").hide();
    $("body").click(function(){
            if (clickDisabled)
                return;

            if (init){
                $(".title-box").fadeOut(1600);
                setTimeout(function(){$(".sub-box").html(get_text());}, 1600);
                $(".sub-box").delay( 2300 ).fadeIn(700)
                init = false; 
            } else {
                
                $(".sub-box").fadeOut(1600).delay( 700 );
                $(".sub-box").fadeIn(700);
                setTimeout(function(){$(".sub-box").html(get_text());}, 1600);
            }   
            clickDisabled = true;
            setTimeout(function(){clickDisabled = false;}, 3000);  
    });
});


 var messages = [
    "<p>Life is a succession of lessons which must be lived to be understood.</p>",
    "<p>You must do the thing you think you cannot do.</p><p></p>",
    "<p>Start where you are.</p><p>Use what you have.</p><p>Do what you can.</p>",
    "<p>Even if you fall on your face, you’re still moving forward.</p><p></p>",
    "<p>You are never to old to set another goal or to dream a new dream.</p>",
    "<p>Act as if what you do makes a difference.</p><p>It does.</p>",
    "<p>If you are going through hell, keep going.</p><p></p>",
    "<p>Life is not about finding yourself.</p><p>Life is about creating yourself.</p><p></p>",
    "<p>You can do it!</p><p></p><p></p>",
    "<p>You are sparlier than a discoball.</p><p></p><p></p>",
    "<p>You can do it.</p><p></p><p></p>",
    "<p>You got this.</p><p></p><p></p>",
    "<p></p><p></p><p></p>",
    "<p></p><p></p><p></p>",
    "<p></p><p></p><p></p>",
    "<p></p><p></p><p></p>",
    "<p></p><p></p><p></p>",
    "<p></p><p></p><p></p>",
    "<p></p><p></p><p></p>",
    "<p></p><p></p><p></p>",
    "<p></p><p></p><p></p>",
    "<p></p><p></p><p></p>",
    "<p></p><p></p><p></p>",
    "<p></p><p></p><p></p>",
    "<p></p><p></p><p></p>",
    "<p></p><p></p><p></p>",
    "<p></p><p></p><p></p>",
    "<p></p><p></p><p></p>",
    "<p></p><p></p><p></p>",
    "<p></p><p></p><p></p>",
    "<p></p><p></p><p></p>",
    "<p></p><p></p><p></p>",
    "<p></p><p></p><p></p>",
    "<p></p><p></p><p></p>",
    "<p></p><p></p><p></p>",
    "<p></p><p></p><p></p>",
    "<p></p><p></p><p></p>"
    ];

function get_text(){
    if (debug)
        return messages[0];

    var random_number = Math.floor(Math.random() * messages.length);
    var result = messages[random_number]
    return result;
}