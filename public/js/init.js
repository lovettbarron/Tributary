$(document).ready( function() {
	init();
	$('.dropdown-toggle').dropdown()
	});


function ipsum() {
	$('.ipsum').each( function(index) {
			var target = this;
			var length = $(target).attr('length');
			var paragraphs = $(target).attr('para');
			$.getJSON('http://hipsterjesus.com/api/', {
				paras : paragraphs
			}, function(data) {
					var text = data.text
	         $(target).html( text.substr(0, length ) );
	     	});
		});
}

function init() {
		//Context menu switcher
		$('ul > li').each( function(index) { 
			$(this).click( function(e) {
				e.preventDefault();
				path = $(this).children('a').attr('id');
				$.get('/' + path, function(data) {
						$('#content').html(data);
						ipsum();
					});
				$('ul > li').removeClass('active');
				$(this).addClass('active');
			})
		});

		ipsum();
}

function comment() {
	$('.commentHide').hide();
	$('.comment').click( function(e) {
		e.preventDefault();
		$(this).children('.commentHide').toggle();		
	})
}