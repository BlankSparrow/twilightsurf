var debug = false;


var $star_div_1 = $( "<div class='star star_1' style='clip-path: inset(3.5vw 3.5vw 7vw 7vw)'><img style='width:7vw; color:white;' src='svg/star.svg'></div>" );
var $star_div_2 = $( "<div class='star star_2' style='clip-path: inset(3.5vw 3.5vw 7vw 7vw)'><img style='width:7vw; color:white;' src='svg/star.svg'></div>" );
var $star_div_3 = $( "<div class='star star_3' style='clip-path: inset(3.5vw 3.5vw 7vw 7vw)'><img style='width:7vw; color:white;' src='svg/star.svg'></div>" );
var $star_div_4 = $( "<div class='star star_4' style='clip-path: inset(3.5vw 3.5vw 7vw 7vw)'><img style='width:7vw; color:white;' src='svg/star.svg'></div>" );
var $star_div_5 = $( "<div class='star star_5' style='clip-path: inset(3.5vw 3.5vw 7vw 7vw)'><img style='width:7vw; color:white;' src='svg/star.svg'></div>" );
var $star_div_6 = $( "<div class='star star_6' style='clip-path: inset(3.5vw 3.5vw 7vw 7vw)'><img style='width:7vw; color:white;' src='svg/star.svg'></div>" );
var $star_div_7 = $( "<div class='star star_7' style='clip-path: inset(7vw 7vw 14vw 14vw)'><img style='width:14vw; color:white;' src='svg/star.svg'></div>" );
var $star_div_8 = $( "<div class='star star_8' style='clip-path: inset(7vw 7vw 14vw 14vw)'><img style='width:14vw; color:white;' src='svg/star.svg'></div>" );
var $star_div_9 = $( "<div class='star star_9' style='clip-path: inset(15vw 15vw 30vw 30vw)'><img style='width:30vw; color:white;' src='svg/star.svg'></div>" );
var $star_div_10 = $( "<div class='star star_10' style='clip-path: inset(15vw 15vw 30vw 30vw)'><img style='width:30vw; color:white;' src='svg/star.svg'></div>" );
var $star_div_11 = $( "<div class='star star_11' style='clip-path: inset(7vw 7vw 14vw 14vw)'><img style='width:14vw; color:white;' src='svg/star.svg'></div>" );
var $star_div_12 = $( "<div class='star star_12' style='clip-path: inset(7vw 7vw 14vw 14vw)'><img style='width:14vw; color:white;' src='svg/star.svg'></div>" );
var $star_div_13 = $( "<div class='star star_13' style='clip-path: inset(1.5vw 1.5vw 3vw 3vw)'><img style='width:3vw; color:white;' src='svg/star.svg'></div>" );
var $star_div_14 = $( "<div class='star star_14' style='clip-path: inset(1.5vw 1.5vw 3vw 3vw)'><img style='width:3vw; color:white;' src='svg/star.svg'></div>" );
var $star_div_15 = $( "<div class='star star_15' style='clip-path: inset(1.5vw 1.5vw 3vw 3vw)'><img style='width:3vw; color:white;' src='svg/star.svg'></div>" );
var $star_div_16 = $( "<div class='star star_16' style='clip-path: inset(1.5vw 1.5vw 3vw 3vw)'><img style='width:3vw; color:white;' src='svg/star.svg'></div>" );
var $star_div_17 = $( "<div class='star star_17' style='clip-path: inset(1.5vw 1.5vw 3vw 3vw)'><img style='width:3vw; color:white;' src='svg/star.svg'></div>" );
var $star_div_18 = $( "<div class='star star_18' style='clip-path: inset(1.5vw 1.5vw 3vw 3vw)'><img style='width:3vw; color:white;' src='svg/star.svg'></div>" );

var $star_div_19 = $( "<div class='star star_19' style='clip-path: inset(0.5vw 0.5px 1vw 1vw)'><img style='width:1vw; color:white;' src='svg/star.svg'></div>" );
var $star_div_20 = $( "<div class='star star_20' style='clip-path: inset(0.5vw 0.5px 1vw 1vw)'><img style='width:1vw; color:white;' src='svg/star.svg'></div>" );
var $star_div_21 = $( "<div class='star star_21' style='clip-path: inset(0.5vw 0.5px 1vw 1vw)'><img style='width:1vw; color:white;' src='svg/star.svg'></div>" );
var $star_div_22 = $( "<div class='star star_22' style='clip-path: inset(0.5vw 0.5px 1vw 1vw)'><img style='width:1vw; color:white;' src='svg/star.svg'></div>" );
var $star_div_23 = $( "<div class='star star_23' style='clip-path: inset(0.5vw 0.5px 1vw 1vw)'><img style='width:1vw; color:white;' src='svg/star.svg'></div>" );
var $star_div_24 = $( "<div class='star star_24' style='clip-path: inset(0.5vw 0.5px 1vw 1vw)'><img style='width:1vw; color:white;' src='svg/star.svg'></div>" );



var star_1 = new Star(45, 40, -3, -2, 0.02, 0.07); ///
var star_2 = new Star(55, 40, 3, -2, -0.018, 0.05); ///
var star_3 = new Star(40, 37, -1.5, -1.8, -0.01, 0.03); ///
var star_4 = new Star(60, 37, 1.5, -1.8,  0.01, 0.02); ///
var star_5 = new Star(55, 45, 1.0, -0.5, 0.01, 0.05); ///
var star_6 = new Star(45, 45, -1.0, -0.5, -0.01, 0.04); ///
var star_7 = new Star(40, 35, -0.8, -0.8, -0.01, 0.015); ///
var star_8 = new Star(55, 35, 1.0, 0.2, 0.01, 0.008); ///
var star_9 = new Star(45, 20, 0.5, -2.0, 0.01, 0.02);///
var star_10 = new Star(35, 30, -0.4, -0.02, -0.02, 0.05);//
var star_11 = new Star(42, 28, -0.4, -3.8, -0.02, 0.04);//
var star_12 = new Star(50, 45, 1.8, 1.8, -0.02, 0.02);//

var star_13 = new Star(45, 40, -1.5, -1, 0.01, 0.035);//
var star_14 = new Star(55, 40, 1.5, -1, -0.009, 0.025);//
var star_15 = new Star(40, 37, -0.75, -0.9, -0.005, 0.015); //
var star_16 = new Star(60, 37, 0.75, -0.9,  0.005, 0.01); //
var star_17 = new Star(55, 45, 0.5, -0.25, 0.005, 0.025); //
var star_18 = new Star(45, 45, -0.5, -0.25, -0.005, 0.02); //
var star_19 =  new Star(40, 35, -0.4, -0.4, -0.005, 0.0075); //
var star_20 = new Star(55, 35, 0.5, 0.1, 0.005, 0.004); //
var star_21 = new Star(45, 30, 0.25, -1.0, 0.005, 0.01);//
var star_22 = new Star(35, 30, -0.2, -0.01, -0.01, 0.025);//
var star_23 = new Star(42, 34, -0.2, -1.9, -0.01, 0.02);//
var star_24 = new Star(50, 45, 0.9, 0.9, -0.01, 0.01);//

var lastUpdate = Date.now();
var myInterval = setInterval(tick, 0);

function tick() {
    var now = Date.now();
    var dt = now - lastUpdate;
    lastUpdate = now;

    update_stars()

}

function update_stars(){
    star_list =[
        {name:".star_1", detail:star_1},
        {name:".star_2", detail:star_2},
        {name:".star_3", detail:star_3},
        {name:".star_4", detail:star_4},
        {name:".star_5", detail:star_5},
        {name:".star_6", detail:star_6},
        {name:".star_7", detail:star_7},
        {name:".star_8", detail:star_8},
        {name:".star_9", detail:star_9},
        {name:".star_10", detail:star_10},
        {name:".star_11", detail:star_11},
        {name:".star_12", detail:star_12},
        {name:".star_13", detail:star_13},
        {name:".star_14", detail:star_14},
        {name:".star_15", detail:star_15},
        {name:".star_16", detail:star_16},
        {name:".star_17", detail:star_17},
        {name:".star_18", detail:star_18},
        {name:".star_19", detail:star_19},
        {name:".star_20", detail:star_20},
        {name:".star_21", detail:star_21},
        {name:".star_22", detail:star_22},
        {name:".star_23", detail:star_23},
        {name:".star_24", detail:star_24}
    ];
    star_list.forEach(update_star)
    
}
function update_star(item, index){
    $(item.name).css("top", "+="+item.detail.current_velocity.y+"px");
    $(item.name).css("left", "+="+item.detail.current_velocity.x+"px");
    item.detail.current_velocity.y += item.detail.update_velocity.y;
    item.detail.current_velocity.x += item.detail.update_velocity.x;
}

$(document).ready(function(){
    $( ".star-box" ).append( $star_div_1 );
    $( ".star-box" ).append( $star_div_2 );
    $( ".star-box" ).append( $star_div_3 );
    $( ".star-box" ).append( $star_div_4 );
    $( ".star-box" ).append( $star_div_5 );
    $( ".star-box" ).append( $star_div_6 );
    $( ".star-box" ).append( $star_div_7 );
    $( ".star-box" ).append( $star_div_8 );
    $( ".star-box" ).append( $star_div_9 );
    $( ".star-box" ).append( $star_div_10 );
    $( ".star-box" ).append( $star_div_11 );
    $( ".star-box" ).append( $star_div_12 );
    $( ".star-box" ).append( $star_div_13 );
    $( ".star-box" ).append( $star_div_14 );
    $( ".star-box" ).append( $star_div_15 );
    $( ".star-box" ).append( $star_div_16 );
    $( ".star-box" ).append( $star_div_17 );
    $( ".star-box" ).append( $star_div_18 );
    $( ".star-box" ).append( $star_div_19 );
    $( ".star-box" ).append( $star_div_20 );
    $( ".star-box" ).append( $star_div_21 );
    $( ".star-box" ).append( $star_div_22 );
    $( ".star-box" ).append( $star_div_23 );
    $( ".star-box" ).append( $star_div_24 );

    var init = true;
    var clickDisabled = false;
    $(".sub-box").hide();
    $(".star").hide();
    //moveItem();
    $("body").mousedown(function(){
            if (clickDisabled)
                return;
            
            
            $(".star").fadeOut(300);
            if (init){
                $(".title-box").fadeOut(100);
                setTimeout(function(){$(".sub-box").html(get_text());},200);
                $(".sub-box").delay( 300 ).fadeIn(200)

                 setTimeout(function(){launch_stars();},200);
                init = false; 
            } else {
                
                $(".sub-box").fadeOut(100).delay( 200 );
                $(".sub-box").fadeIn(200);
                
                setTimeout(function(){$(".sub-box").html(get_text());}, 200);
                setTimeout(function(){$(".sub-box").html(launch_stars());}, 200);

            }   
            clickDisabled = true;
            setTimeout(function(){clickDisabled = false;}, 800);  
    });
});

function launch_stars(){
    star_list =[
        {name:".star_1", detail:star_1},
        {name:".star_2", detail:star_2},
        {name:".star_3", detail:star_3},
        {name:".star_4", detail:star_4},
        {name:".star_5", detail:star_5},
        {name:".star_6", detail:star_6},
        {name:".star_7", detail:star_7},
        {name:".star_8", detail:star_8},
        {name:".star_9", detail:star_9},
        {name:".star_10", detail:star_10},
        {name:".star_11", detail:star_11},
        {name:".star_12", detail:star_12},
        {name:".star_13", detail:star_13},
        {name:".star_14", detail:star_14},
        {name:".star_15", detail:star_15},
        {name:".star_16", detail:star_16},
        {name:".star_17", detail:star_17},
        {name:".star_18", detail:star_18},
        {name:".star_19", detail:star_19},
        {name:".star_20", detail:star_20},
        {name:".star_21", detail:star_21},
        {name:".star_22", detail:star_22},
        {name:".star_23", detail:star_23},
        {name:".star_24", detail:star_24}
        
    ];
    star_list.forEach(reset_star)
    
}
function reset_star(item, index){
    setTimeout(function(){$(item.name).fadeIn(300);
                    item.detail.current_velocity.y =item.detail.start_velocity.y;
                    item.detail.current_velocity.x =item.detail.start_velocity.x;
                    $(item.name).css("top", item.detail.start_pos.y+"vh");
                    $(item.name).css("left", item.detail.start_pos.x+"vw");}

                  ,200);
                setTimeout(function(){$(".star").fadeOut(500);},300);
}

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
    "<p></p><p>Well done!</p><p></p>",
    "<p></p><p></p><p>You're #1 in my book!</p><p></p>",
    "<p></p><p>Good effort.</p><p></p>",
    "<p></p><p>Well done.</p><p></p>",
    "<p></p><p>Way to go!</p><p></p>",
    "<p></p><p>You're tremendous!</p><p></p>",
    "<p>All your ideas are brilliant.</p><p></p><p></p>",
    "<p></p><p>Believe yourself.</p><p></p>",
    "<p></p><p>Don't give up!</p><p></p>",
    "<p>Don't ruin a good today by thinking about a bad yesterday.</p><p>Let it go.</p><p></p>",
    "<p>Make it happen.</p><p>Shock everyone.</p><p></p>",
    "<p>Don't hold back.</p><p></p>",
    "<p></p><p>You got it in the bag.</p><p></p>",
    "<p></p><p>Almost there.</p><p></p>",
    "<p></p><p>Keep it going.</p><p></p>",
    "<p></p><p>You're awesome.</p><p></p>",
    "<p>There are tiny potatos that believe in you.</p><p> Dont let them down.</p><p></p>",
    "<p></p><p>Nice work.</p><p></p>",
    "<p></p><p>You're a rockstar.</p><p></p>",
    "<p></p><p>You are wicked awesome.</p><p></p>",
    "<p>You don't know how awesome you are right now.</p><p></p><p></p>",
    "<p></p><p>You are interesting.</p><p></p>",
    "<p></p><p>I believe in you.</p><p></p>",
    "<p></p><p>Hang in there.</p><p></p>",
    "<p></p><p>Don't give up.</p><p></p>",
    "<p></p><p>Keep pushing.</p><p></p>",
    "<p></p><p>Keep fighting!</p><p></p>",
    "<p></p><p>Stay Strong.</p><p></p>",
    "<p></p><p>Reach for the stars.</p><p></p>",
    "<p></p><p>Do the impossible.</p><p></p>",
    "<p></p><p>The sky is the limit.</p><p></p>",
    "<p></p><p>Follow your dreams.</p><p></p>",
    "<p>Come on!</p><p>You can do it!</p>",
    "<p>You are a survivor!</p><p>Anything that you’re willing to practice, you can do.</p>",
    "<p></p><p>Talent is a pursued interest.</p><p></p>",
    "<p>You can do anything you want to do.</p><p>This is your world.</p>",
    "<p>Of course you can do that.</p><p>You can do anything.</p>",
    "<p>If you have to do something over again,</p><p> it doesn’t mean you’re bad,</p><p> it just means you’re normal.</p>",
    "<p>Anything that you can visualize in your mind, you can do.</p>",
    "<p>Go out on a limb,</p><p>that’s where the fruit is.</p>",
    "<p>Remember,</p><p>you can do anything in your world that you want to.</p>",
    "<p>You can do anything in this life.</p><p>long as you believe you can.</p>",
    "<p>We don’t make mistakes.</p><p>We just have happy accidents.</p>",
    "<p>Have pride in how far you have come.</p><p>Have faith in how far you can go.</p>",
    "<p></p><p>Never give up.</p><p></p>"
    ];

function get_text(){
    if (debug)
        return messages[0];

    var random_number = Math.floor(Math.random() * messages.length);
    var result = messages[random_number]
    return result;
}
