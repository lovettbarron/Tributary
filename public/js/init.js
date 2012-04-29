$(document).ready( function() {
	//Context menu switcher
	$('ul#context > li').each( function(index) { 
		$(this).click( function(e) {
			e.preventDefault();
			path = $(this).child().attr('id');
			alert(path);
			$.get('/' + path, function(data) {
					$('#content').html(data);
				});
			$('#context > li').removeClass('active');
			$(this).addClass('active');
		})
	})

});