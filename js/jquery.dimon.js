/*
 * The Dimon Institute Custom Theme 1.0
 * @requires jQuery 3.1.1 or later
 *
 * author: Genine Yarborough
 */
jQuery(document).ready(function($){

	//Run animations on page load
	setTimeout(function(){

		$('body').addClass('loaded');

	}, 1000);
	// run animations on window scroll
	$(window).scroll(function(){

		// fade in jump to top button
		var offset = $(window).scrollTop();

		if (offset >= 350) {

			$('#top-jump').fadeIn(400);
			
		}else{
			
			$('#top-jump').fadeOut(400);
		}
	});
	// Define and run mmenu functionality for mobile navigation.
	$("#mobile-menu").mmenu({

		navbar: {

			title	  : '',
			}
		}, 
		{
			offCanvas: {
         	
			pageNodetype: "nav",
			pageSelector: "#full-page"
         	}
    });

	var API = $("#mobile-menu").data( "mmenu" );
      

	$("#menu-btn").click(function() {

		API.open();
	});
	// smooth scrolling for jump to top
	$('#top-jump').click(function(event){

		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 350);
		return false;
	});
	// Remove and replace placeholder text, in forms, as needed
	$('.field').focus(function(){

	   $(this).data('placeholder',$(this).attr('placeholder'));

	   $(this).attr('placeholder','');
	});

	$('.field').blur(function(){

	   $(this).attr('placeholder',$(this).data('placeholder'));
	});
	// toggle navigation bar search field and submit form
	$('#desktop-search-btn').on('click', function(e) {

		var sInput = $('#s').val();

		if (sInput == null || sInput == '') {

			$('#s').animate({width: 'toggle'}).focus();
		}else{

			$('#s-form').submit();
		}
	});
	//fade-in and fade-out rotating content for "important updates"
    $.fn.extend({

        rotaterator: function(options) {
 
            var defaults = {
                fadeSpeed: 500,
                pauseSpeed: 5500,
                child:null
            };
             
            var options = $.extend(defaults, options);
         
            return this.each(function() {

                var o     = options;
                var obj   = $(this);                
                var items = $(obj.children(), obj);

                items.each(function() {$(this).hide();})

                if(!o.child){

                    var next = $(obj).children(':first');

                }else{

                    var next = o.child;
                }

                $(next).fadeIn(o.fadeSpeed, function() {

                    $(next).delay(o.pauseSpeed).fadeOut(o.fadeSpeed, function() {

                        var next = $(this).next();

                        if (next.length == 0){

                            next = $(obj).children(':first');
                        }

                        $(obj).rotaterator({child : next, fadeSpeed : o.fadeSpeed, pauseSpeed : o.pauseSpeed});
                    })
                });
            });
        }
    });

    $('.rotate-content').rotaterator();
});