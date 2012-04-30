$(document).ready( function() {
	//Context menu switcher
	$('ul#context > li').each( function(index) { 
		$(this).click( function(e) {
			e.preventDefault();
			path = $(this).children('a').attr('id');
			$.get('/' + path, function(data) {
					$('#content').html(data);
				});
			$('#context > li').removeClass('active');
			$(this).addClass('active');
		})
	});
	$('.ipsum').each( function(index) {
			var target = this;
			$.getJSON('http://hipsterjesus.com/api/', function(data) {
	         $(target).html( data.text );
	     	});
		});

});