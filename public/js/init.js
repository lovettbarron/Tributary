var notificationOpen = 0;

$(document).ready( function() {
	$('ul.shrinker').hide(); 
	$('ul.research').hide();
	$('ul.support').hide();
	$('ul.care').hide();
	$('ul.learning').hide();
	$('ul.financial').hide();
	$('.typeahead').typeahead({
		source: ['Care', 'Public Relations','Research','Hemotology','Administrator']
	})
	init();
	$('.dropdown-toggle').dropdown();
});

function init() {
	$('.notification').hide();
	$('.rightNav').find('.dropdown').hide();
	$('.rightNav > li').hover( function() {
		$(this).find('.dropdown').show();
	},
	function() {
		$(this).find('.dropdown').hide();
	})
	
	
	
	$('.checkall input').on('click', function() {
		if( $(this).attr('checked') ) {
			$('input[type="checkbox"]').each( function() {
				$(this).prop("checked", true);
			});
			$('.contextActive').show();
			$('.contextHidden').hide();
		}	else {
			$('input[type="checkbox"]').each( function() {
				$(this).prop("checked", false);
			});
			$('.contextActive').hide();
			$('.contextHidden').show();				
		}
	});
	// Logo overlay
	$('a.brand').parent().hover( function() {
			$('.returnHome').show()
		}, function() {
			$('.returnHome').hide()
		});
	// Expand collapse business for activity feed
	$('.collapse').collapse('hide')
	$("a.expandToggle").click( function(e) {
		if(!$(this).hasClass('open')) {
			$(this).html('Collapse');
			$(this).addClass('open')
		} else {
			$(this).html('Expand');
			$(this).removeClass('open')
		}
	});
	
	$('.collapse').on('hidden', function() {
		$(this).find('.expandToggle').show();
	});
	$('.collapse').on('shown', function() {
		$(this).find('.expandToggle').hide();
	});

	modifyProfile()
	context();
	subscribeButtons();
	$('li.dropdown').hover(function(){
		$(".dropdown-menu", this).addClass("open");
	},
	function(){
		$(".dropdown-menu", this).removeClass("open");
	});
	
	$('#todoModal input[type="checkbox"]').click( function(e) {
		$('.calendarView').show();
	})
	
  $('#calendarTab a:first').tab('show');
	$('[rel="tooltip"]').tooltip();
	$(".collapse").collapse()
	$('.modal').modal();
	$('.modal').modal('hide');
	$('a.saveModal').on('click', function(e) {
		e.preventDefault();
		$('.modal').modal('hide');
		$('.success').modal('show')
	});

		//Context menu for doc
		$('.contextActive').hide();
		$('input.docSelected').click(function() {
			var active = false;
			$('input.docSelected').each( function() {
				if(!active) {
					if( $(this).attr('checked') ) { active = true; }
				}
			})
			if(active) {
				$('.contextActive').show();
				$('.contextHidden').hide();
			}	else {
				$('.contextActive').hide();
				$('.contextHidden').show();				
			}
		});
		
		//The glorious little overhang!
		$('a.ddMain').click(function() {
			var active = false;
			$('input.docSelected').each( function() {
				if(!active) {
					if( $(this).attr('checked') ) { active = true; }
				}
			})
			if(active) {
				$('.contextActive').show();
				$('.contextHidden').hide();
			}
			else {
				$('.contextActive').hide();
				$('.contextHidden').show();				
			}
		});
		
		comment();
		ipsum();
		searchField();
		// On hover state for feed items
		$('.onHover').hide();
		
		feedUpdateHint = "What are you working on?";
		
		$('#feedUpdate').val(feedUpdateHint);
		
		$('.feedbtn').hide();
		$('#newPostUpdate').hide();
		
		$('#feedUpdate').focus( function(){
			$(this).height('100');
			$('#feedUpdate').removeClass('hint');
			$('#feedUpdate').val("");
			$('.feedbtn').show();
		});
		
		$("#postWall").click(function(){
			$("#feedUpdate").height('30');
			$('#feedUpdate').val(feedUpdateHint);
			$('#feedUpdate').addClass('hint');
			$('.feedbtn').hide();
			$('#newPostUpdate').slideDown('slow');
		});

		// Hide onboarding item
		$('.closeOnboarding').click(function(e) {
			e.preventDefault();
			$(this).parent().parent().hide();
		})
		
		// fix sub nav on scroll
    var $win = $(window)
      , $nav = $('.main-content .subnav')
      , navTop = $('.main-content .subnav').length && $('.main-content .subnav').offset().top - 40
      , isFixed = 0

    processScroll()

    // hack sad times - holdover until rewrite for 2.1
    $nav.on('click', function () {
      if (!isFixed) setTimeout(function () {  $win.scrollTop($win.scrollTop() - 47) }, 10)
    })

    $win.on('scroll', processScroll)

    function processScroll() {
      var i, scrollTop = $win.scrollTop()
      if (scrollTop >= navTop && !isFixed) {
        isFixed = 1	
        $nav.addClass('subnav-fixed')
      } else if (scrollTop <= navTop && isFixed) {
        isFixed = 0
        $nav.removeClass('subnav-fixed')
      }
    }
	//Opens the first new item by default on What's Happening
	$("#mainNewsFeed a.expandToggle:first").click();
	
	//Plus/minus hide
	var addedPeople = [];
	$('a.minus').hide();
	$('a.plus').click( function() {
		$(this).hide().next('a.minus').show();
		addedPeople.push($(this).closest('personName').html());
	})
	$('a.minus').click( function() {
		$(this).hide().prev('a.plus').show();
	})
	$('.person-post').click( function() {
		$(this).find('a.plus').click();
	});
	
	$('a.minus').hover( function() {
		$(this).html('<i class="icon-remove"></i>');
	}, function() {
		$(this).html('<i class="icon-ok"></i>');
	})
	
	//Upload image example
	
	$('a.uploadImage').click( function() {
		$(this).hide
		var target = $(this).next('.bar');
		var i = 0;
		setTimeout(function(){
			target.css('width',i);
			i++;
			if(i>100) {
				target.hide();
				$(this).show();
				}
 			}, 10);
	})
	
	//Alert if clicking away from page with form
	if($('#formAlert').length) {
		$('a[href]').not('#content').click( function() {
			//confirm('Your form isn\'t finished, leave page?');
		})
	}
	$('.createProfile').hide();
	$('.createProfile:first').addClass('active').show();
	$('a.nextForm').click( function() {
		$(this).closest('.createProfile').removeClass('active').hide()
			.next('.createProfile').addClass('active').show();
	})
	$('a.prevForm').click( function() {
		$(this).closest('.createProfile').removeClass('active').hide()
			.prev('.createProfile').addClass('active').show();
	})
}

function comment() {
	$('.commentHide').hide();
	$('.comment > button').click( function(e) {
		e.preventDefault();
		alert('test');
		$(this).parent().children('.commentHide').toggle();		
	})
}

function directoryObject() {
	$('.accHeader').click( function(e) {
		e.preventDefault();
		$(this).parent().children('.accBody');
		
	} )
}

function searchField() {
	$('.typeahead').typeahead();
	$('.search').click( function() {
		e.preventDefault();
		
		path = $(this).attr('id');
		$.get('/' + path, function(data) {
				$('#content').html(data);
				ipsum();
			});
		$('ul > li').removeClass('active');
	})
};

function ipsum() {
	$('.ipsum').each( function(index) {
		var target = this;
		var length = $(target).attr('length');
		var paragraphs = $(target).attr('para');

		var text= '<p>Pour-over ad typewriter 8-bit, jean shorts cardigan godard. Swag wolf occaecat, polaroid gluten-free sint nostrud before they sold out ethical kale chips. Esse odio scenester wes anderson fixie, 8-bit you probably haven\'t heard of them iphone. Deserunt exercitation aliquip fanny pack enim marfa, carles ad. Mlkshk high life scenester williamsburg nihil ut keffiyeh tumblr, post-ironic tattooed. Kogi ut sint mollit bicycle rights odio. Post-ironic mcsweeney\'s squid, pariatur deserunt fugiat labore. Dolore shoreditch pitchfork ennui proident, ex mumblecore bushwick. Eu artisan bushwick readymade before they sold out veniam. Quinoa 8-bit freegan nihil, leggings assumenda duis nulla marfa. </p><p>Polaroid chambray craft beer dolor pork belly, american apparel umami skateboard selvage ullamco wayfarers hoodie. Sriracha pariatur wayfarers ex, dolor vegan ullamco qui lo-fi duis. Vice placeat mumblecore, mollit iphone velit messenger bag salvia master cleanse anim farm-to-table. Messenger bag ullamco hella, +1 nostrud voluptate delectus marfa mlkshk tofu master cleanse sunt. Vegan consectetur aliqua trust fund ethnic dolore.<p> Chillwave direct trade godard excepteur culpa swag tofu, minim brunch scenester dolore fugiat officia squid. Eu thundercats esse, post-ironic aesthetic twee freegan readymade small batch. Odio et lomo laboris wayfarers. Carles trust fund retro, skateboard magna viral velit mustache post-ironic cardigan. Skateboard you probably haven\'t heard of them keytar, cray sartorial twee pour-over mixtape hella wes anderson mumblecore salvia nulla pinterest +1. Esse chambray pariatur PBR ut, voluptate laboris banh mi high life proident post-ironic commodo in blog. </p><p>Nisi direct trade iphone messenger bag kale chips, bicycle rights chambray banh mi ut odd future mustache nihil sapiente helvetica. DIY letterpress lomo, portland synth cred occupy VHS pinterest. Ethnic mlkshk consequat biodiesel, narwhal retro mumblecore scenester master cleanse voluptate adipisicing vice consectetur art party pour-over. Small batch brunch artisan, pariatur ullamco nisi cliche sunt post-ironic mixtape cray banh mi biodiesel Austin. Marfa commodo odd future jean shorts. Cosby sweater pickled ad sartorial odio dolore quinoa, vinyl typewriter. Biodiesel portland ullamco esse squid pickled umami raw denim wolf twee, quis PBR organic typewriter in.</p>';
		$(target).html( text.substr(0, length ) );
	
	});
}


function context() {
	var path = window.location.pathname.split('/')[1];
	var context = ['research','shopswap'];
	var sub = ['financial'];
	var subsub = ['grantsmanagement', 'nih','grantsapprovalprocess'];
	var care = ['care'];
	var learning = ['learning'];
	var ssr = ['support'];
	$('li.sub').hide();
	if(window.location.pathname) {
		if( $.inArray(path, context) >= 0) { //Research context			
			$('ul.retract').slideUp();
			$('ul.research').slideDown();
			$('ul.financial').hide();
			$('ul.care').hide();
			$('ul.learning').hide();
			$('ul.support').hide();
		} 
		else if( $.inArray(path, sub) >= 0) { // Financial
			$('ul.retract').hide();
			$('ul.research').slideUp();
			$('li.sub').slideUp();
			$('ul.financial').slideDown();
			$('ul.shrinker#home').show();
			$('ul.care').hide();
			$('ul.learning').hide();
			$('ul.support').hide();
		}
		else if( $.inArray(path, care) >= 0) { // care
			$('ul.retract').slideUp();
			$('ul.care').slideDown();
			$('ul.financial').hide();
			$('ul.research').hide();
			$('ul.support').hide();
			$('ul.learning').hide();
		}
		else if( $.inArray(path, learning) >= 0) { // learning
			$('ul.retract').slideUp();
			$('ul.learning').slideDown();
			$('ul.financial').hide();
			$('ul.care').hide();
			$('ul.research').hide();
			$('ul.support').hide();
		}
		else if( $.inArray(path, ssr) >= 0) { // support
			$('ul.retract').slideUp();
			$('ul.support').slideDown();
			$('ul.financial').hide();
			$('ul.research').hide();
			$('ul.care').hide();
			$('ul.learning').hide();
		}
		else if( $.inArray(path, subsub) >= 0) { //Grants management
			$('ul.retract').hide();
			$('ul.care').hide();
			$('ul.learning').hide();
			$('ul.support').hide();
			$('ul.research').slideUp();
			if( !$('li.sub:first').is(':visible')) {
				$('li.sub').slideDown();
			}
			$('ul.financial').slideDown();
			$('ul.shrinker#home').show();
		}
		else { // Home context
			$('ul.retract').slideDown();
			$('ul.research').slideUp();
			$('ul.financial').slideUp();
			$('ul.shrinker').hide();
			$('ul.care').hide();
			$('ul.learning').hide();
			$('ul.support').hide();
		}
	}
 $('a#researchExpand').click( function() {
		$('ul.financial').slideUp();
	$('ul.research').slideToggle();
});
}

function subscribeButtons() {
	$('.subscribeButton').click( function(e) {
		e.preventDefault();
		if( $(this).hasClass('subscribed') ) {
			$(this).removeClass('subscribed')
			$(this).html('Subscribe');
		} else {
			$(this).addClass('subscribed');
			$(this).queue( 
				function(n) {
					$(this).html('loading...');
	        n();
			}).delay(1000)
			.queue(
				function(n) {
	        $(this).html('<i class="icon-ok"></i> Subscribed');
					notification( $(this).parent() );
	        n();
		    }).fadeIn(500);
		}
	});
}

function notification($target) {
	var height = notificationOpen * 120
		$($target).parent().find('div.notification:first').css('top', height + 90).fadeIn(300).delay(6000).queue( function(n) {
			$('.closeNotification').click();
			n();
		});
		notificationOpen =+ 1;
		$('.closeNotification').parent().click( function() {
			$(this).fadeOut(300, function() {
				notificationOpen =- 1;
				});
			})
}

function addTodo(content) {
	var todo = '<div class="row-fluid todo">'
			+'	<div class="span1"><input type="checkbox"></div>'
			+'	<div class="span11">' + content
			+'</div>'	
	$('.todo:last').append(todo);
}


function modifyProfile() {
	$(".editLink").click(function(){
		block = $(this).parent();
		if (block.hasClass('edit')) {
			block.removeClass('edit');
			$(this).removeClass('btn-primary').html('Edit');
		} else {
			block.addClass('edit');
			$(this).addClass('btn-primary').html('Save');
		}
	});
}