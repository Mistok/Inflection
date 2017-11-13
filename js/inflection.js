
/* Hidden menu show */
jQuery(document).ready(function($) {
			$('.burger').click(function(event) {
				$('.content_container,.main_menu,.hidden_menu,.head_wrapper,.burger').toggleClass('active');
			});
		});

/* Monochrome to color script */

jQuery(document).ready(function($) {
		$('figure').hover( 
			function(){
			$('.monochrome').toggleClass('un_visible');
			});
		});

/* Smooth references */

$(document).ready(function(){
    $("#about_submenu").on("click","a", function (event) {       
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
