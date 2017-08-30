$(document).ready(function(){
    $("#MenuIcon").click(function(){
        $("#MainMenu").css("left", "0px");
        $("#black-logo").removeClass('black-logo').addClass('hidden');
        function showMenu(){
            $("#MainMenu").css("-webkit-clip-path", "polygon(0 0, 100% 0, 100% 100%, 0% 100%)");
            $('#MenuIcon').animate({right: '-100'}, 300);
            $("#white-logo").removeClass('hidden').addClass('white-logo');
        }
        
        setTimeout(showMenu, 100);
        
    });
    
    $("#close").click(function(){
        $("#MainMenu").css("-webkit-clip-path", "polygon(0 0, 0 0, 100% 100%, 0% 100%)");
        function hideMenu(){
            $("#MainMenu").css("left", "-300px");
             $('#MenuIcon').animate({right: '8%'}, 300);
            $("#black-logo").removeClass('hidden').addClass('black-logo');
        }
        
        setTimeout(hideMenu, 300);
    });
});