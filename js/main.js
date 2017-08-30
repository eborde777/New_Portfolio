//Full Menu Functionality

$(document).ready(function(){
    $("#MenuIcon").click(function(){
        $("#MainMenu").css("left", "0px");
        $("#black-logo").removeClass('black-logo').addClass('hidden');
        function showMenu(){
            $("#MainMenu").css("-webkit-clip-path", "polygon(0 0, 100% 0, 100% 100%, 0% 100%)");
            $('#MenuIcon').animate({right: '-100'}, 300);
            $("#white-logo").removeClass('hidden').addClass('white-logo');
            $(".welcome").css( "left", "40%");
        }
        
        setTimeout(showMenu, 100);
        
    });
    
    $("#close").click(function(){
        $("#MainMenu").css("-webkit-clip-path", "polygon(0 0, 0 0, 100% 100%, 0% 100%)");
        function hideMenu(){
            $("#MainMenu").css("left", "-300px");
             $('#MenuIcon').animate({right: '8%'}, 300);
            $("#black-logo").removeClass('hidden').addClass('black-logo');
            $(".welcome").css( "left", "30%");
        }
        
        setTimeout(hideMenu, 300);
    });
});

//Side DOTS
$("#box a").on("click", function(){
   $("#box a").removeClass("anime");
    $(this).addClass("anime");
    $(this).css({
        
    });
});

$(window).on("scroll", function(){
    
    if ($(".section-about").height() == $(window).height()){
        $("#box a").removeClass("anime");
        $(this).addClass("anime");
    }
   
});


