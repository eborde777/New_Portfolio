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


//Slide pulse on DOTS
$("#box a").on("click", function(){
   $("#box a").removeClass("anime");
    $(this).addClass("anime");
    
});


//Change Pulse on dots on scroll

$(document).on("scroll", function(event){
   
   updateDots();
});
    
$(window).on("load", function() {
  updateDots();
});
    
    
function updateDots(){
     var section_home = $('#home').offset().top;
    var section_about = $('#about').offset().top;
    var section_projects = $('#projects').offset().top;
    
    console.log($(window).scrollTop(), section_home, section_about, section_projects);
    
    if($(document).scrollTop() >= section_home && $(document).scrollTop() < section_about ){
             $("#box a").eq(0).addClass('anime');
            $("#box a").eq(1).removeClass('anime');
            $("#box a").eq(2).removeClass('anime');
        }
    
    if($(document).scrollTop() >= section_about && $(document).scrollTop() < section_projects ){
         $("#box a").eq(0).removeClass('anime');
         $("#box a").eq(2).removeClass('anime');
         $("#box a").eq(1).addClass('anime');
        }
    
    if($(document).scrollTop() >= section_projects) {
            $("#box a").eq(0).removeClass('anime');
            $("#box a").eq(1).removeClass('anime');
             $("#box a").eq(2).addClass('anime');
        }
    else{
        $("#box a").eq(2).removeClass('anime');
    }
}
    
 // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
//        window.location.hash = hash;
      });
    } // End if
  });

    });


