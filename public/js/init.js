$(document).ready( function() {
	if(window.location.hash) {
			var hash = window.location.hash;
			path = hash.split('#')[1];
			$.get('/' + path, function(data) {
					$('#content').html(data);
					init();
				});
			$('ul > li').removeClass('active');
			$(this).addClass('active');
	} else { 
		$('ul.shrinker').hide(); 
		$('ul.research').hide();
		init(); 
		}
	$('.dropdown-toggle').dropdown();
});

function init() {
		//Context menu switcher
		$('a:not([data-toggle],[class=anchor])').each( function(index) { 
			$(this).unbind('click').click( function(e) {
//				e.preventDefault();
				var hash = $(this).attr('href');
				var path = hash.split('#')[1];
				$.get('/' + path, function(data) {
						$('#content').html(data);
						init();
					});
				$('ul > li').removeClass('active');
				$(this).parent('li').addClass('active');
			})
		});
		context();
		
		$('li.dropdown').hover(function(){
			$(".dropdown-menu", this).addClass("open");
		},
		function(){
			$(".dropdown-menu", this).removeClass("open");
		});
		
		$('li.drop').on('click', function() {
			$('ul.retract').slideToggle();
			$(this).hide();
			$('li.retr').show();
		})
		$('li.retr').on('click', function() {
			$('ul.retract').slideToggle();
			$(this).hide();
			$('li.drop').show();
		})
		
		$('ul.primaryNavigation > li').on({
			'hover': function(e) {
				e.preventDefault();
				$(this).children('a').click();
		},
		'click': function(e) {
			$(this).children('ul > li:first > a').click();
		}
		})
		
		$('ul.primaryNavigation > li')
		
    $('.nav-pills a:first').tab('show');
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
		$('#contextActive').hide();
		$('input.docSelected').click(function() {
			var active = false;
			$('input.docSelected').each( function() {
				if(!active) {
					if( $(this).attr('checked') ) { active = true; }
				}
			})
			if(active) {
				$('#contextActive').show();
				$('#contextHidden').hide();
			}
			else {
				$('#contextActive').hide();
				$('#contextHidden').show();				
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
				$('#contextActive').show();
				$('#contextHidden').hide();
			}
			else {
				$('#contextActive').hide();
				$('#contextHidden').show();				
			}
		});
		
		comment();
		ipsum();
		searchField();
		
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
/*			$.getJSON('http://hipsterjesus.com/api/', {
				paras : paragraphs
			}, function(data) {
					var text = data.text
	         $(target).html( text.substr(0, length ) );
	    });*/
		var text= '<p>Pour-over ad typewriter 8-bit, jean shorts cardigan godard. Swag wolf occaecat, polaroid gluten-free sint nostrud before they sold out ethical kale chips. Esse odio scenester wes anderson fixie, 8-bit you probably haven\'t heard of them iphone. Deserunt exercitation aliquip fanny pack enim marfa, carles ad. Mlkshk high life scenester williamsburg nihil ut keffiyeh tumblr, post-ironic tattooed. Kogi ut sint mollit bicycle rights odio. Post-ironic mcsweeney\'s squid, pariatur deserunt fugiat labore. Dolore shoreditch pitchfork ennui proident, ex mumblecore bushwick. Eu artisan bushwick readymade before they sold out veniam. Quinoa 8-bit freegan nihil, leggings assumenda duis nulla marfa. </p><p>Polaroid chambray craft beer dolor pork belly, american apparel umami skateboard selvage ullamco wayfarers hoodie. Sriracha pariatur wayfarers ex, dolor vegan ullamco qui lo-fi duis. Vice placeat mumblecore, mollit iphone velit messenger bag salvia master cleanse anim farm-to-table. Messenger bag ullamco hella, +1 nostrud voluptate delectus marfa mlkshk tofu master cleanse sunt. Vegan consectetur aliqua trust fund ethnic dolore.<p> Chillwave direct trade godard excepteur culpa swag tofu, minim brunch scenester dolore fugiat officia squid. Eu thundercats esse, post-ironic aesthetic twee freegan readymade small batch. Odio et lomo laboris wayfarers. Carles trust fund retro, skateboard magna viral velit mustache post-ironic cardigan. Skateboard you probably haven\'t heard of them keytar, cray sartorial twee pour-over mixtape hella wes anderson mumblecore salvia nulla pinterest +1. Esse chambray pariatur PBR ut, voluptate laboris banh mi high life proident post-ironic commodo in blog. </p><p>Nisi direct trade iphone messenger bag kale chips, bicycle rights chambray banh mi ut odd future mustache nihil sapiente helvetica. DIY letterpress lomo, portland synth cred occupy VHS pinterest. Ethnic mlkshk consequat biodiesel, narwhal retro mumblecore scenester master cleanse voluptate adipisicing vice consectetur art party pour-over. Small batch brunch artisan, pariatur ullamco nisi cliche sunt post-ironic mixtape cray banh mi biodiesel Austin. Marfa commodo odd future jean shorts. Cosby sweater pickled ad sartorial odio dolore quinoa, vinyl typewriter. Biodiesel portland ullamco esse squid pickled umami raw denim wolf twee, quis PBR organic typewriter in.</p>';
		$(target).html( text.substr(0, length ) );
	
		});
}

function context() {
	var hash = window.location.hash;
	var context = ['','calendar','groups','dashboard','docs','subscription','news','profile','publicProfile','blog']
	path = hash.split('#')[1];
		if(window.location.hash) {
			if( $.inArray(path, context) <= -1) {
				$('ul.retract').slideUp();
				$('li.drop').hide();
				$('ul.shrinker').show();
				$('li.retr').show();
				$('ul.research').slideDown();
			} else {
				$('ul.retract').slideDown();
				$('ul.research').slideUp();
				$('ul.shrinker').hide();
			}
		}	
	}

function addTodo(content) {
	var todo = '<div class="row-fluid todo">'
			+'	<div class="span1"><input type="checkbox"></div>'
			+'	<div class="span11">' + content
			+'</div>'	
	$('.todo:last').append(todo);
}