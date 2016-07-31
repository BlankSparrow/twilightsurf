var debug = false;
$(document).ready(function(){
    var init = true;
    var clickDisabled = false;
    $(".sub-box").hide();
    $("body").mousedown(function(){
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
    "<p>You are sparklier than a discoball.</p><p></p><p></p>",
    "<p>You can do it.</p><p></p><p></p>",
    "<p>You got this.</p><p></p><p></p>",
    "<p>You're the best thing since sliced bread.</p><p></p><p></p>",
    "<p>You're cooler than a secret handshake.</p><p></p><p></p>",
    "<p>You put the SUPER in superhero.</p><p></p><p></p>",
    "<p>You are the bee's knees.</p><p></p><p></p>",
    "<p>If I built an ark I'd want you on board.</p><p></p><p></p>",
    "<p>I'd vote for you on X Factor.</p><p></p><p></p>",
    "<p>You are a little ray of sunshine.</p><p></p><p></p>",
    "<p>You deserve a promotion.</p><p></p><p></p>",
    "<p>Well done!</p><p></p><p></p>",
    "<p>You're #1 in my book!</p><p></p><p></p>",
    "<p>Good effort.</p><p></p><p></p>",
    "<p>Well done.</p><p></p><p></p>",
    "<p>Way to go!</p><p></p><p></p>",
    "<p>You're tremendous!</p><p></p><p></p>",
    "<p>All your ideas are brilliant.</p><p></p><p></p>",
    "<p>Believe yourself.</p><p></p><p></p>",
    "<p>Don't give up!</p><p></p><p></p>",
    "<p>Don't ruin a good today by thinking about a bad yesterday.</p><p>Let it go.</p><p></p>",
    "<p>Make it happen.</p><p>Shock everyone.</p><p></p>",
    "<p>Don't hold back.</p><p></p><p></p>",
    "<p>You got it in the bag.</p><p></p><p></p>",
    "<p>Almost there.</p><p></p><p></p>",
    "<p>Keep it going.</p><p></p><p></p>",
    "<p>You're awesome.</p><p></p><p></p>",
    "<p>There are tiny potatos that believe in you.</p><p> Dont let them down.</p><p></p>",
    "<p>Nice work.</p><p></p><p></p>",
    "<p>You're a rockstar.</p><p></p><p></p>",
    "<p>You are wicked awesome.</p><p></p><p></p>",
    "<p>You don't know how awesome you are right now.</p><p></p><p></p>",
    "<p>You are interesting.</p><p></p><p></p>",
    "<p>I believe in you.</p><p></p><p></p>",
    "<p>Hang in there.</p><p></p><p></p>",
    "<p>Don't give up.</p><p></p><p></p>",
    "<p>Keep pushing.</p><p></p><p></p>",
    "<p>Keep fighting!</p><p></p><p></p>",
    "<p>Stay Strong.</p><p></p><p></p>",
    "<p>Reach for the stars.</p><p></p><p></p>",
    "<p>Do the impossible.</p><p></p><p></p>",
    "<p>The sky is the limit.</p><p></p><p></p>",
    "<p>Follow your dreams.</p><p></p><p></p>",
    "<p>Come on!</p><p>You can do it!</p><p></p>",
    "<p>You are a survivor!</p><p>Anything that you’re willing to practice, you can do.</p>",
    "<p>Talent is a pursued interest.</p><p></p>",
    "<p>You can do anything you want to do.</p><p>This is your world.</p>",
    "<p>Of course you can do that.</p><p>You can do anything.</p>",
    "<p>If you have to do something over again,</p><p> it doesn’t mean you’re bad,</p><p> it just means you’re normal.</p>",
    "<p>Anything that you can visualize in your mind, you can do.</p>",
    "<p>Go out on a limb,</p><p>that’s where the fruit is.</p>",
    "<p>Remember,</p><p>you can do anything in your world that you want to.</p>",
    "<p>You can do anything in this life.</p><p>long as you believe you can.</p>",
    "<p>We don’t make mistakes.</p><p>We just have happy accidents.</p>",
    "<p>Have pride in how far you have come.</p><p>Have faith in how far you can go.</p>",
    "<p>Never give up.</p><p></p><p></p>"
    ];

function get_text(){
    if (debug)
        return messages[0];

    var random_number = Math.floor(Math.random() * messages.length);
    var result = messages[random_number]
    return result;
}