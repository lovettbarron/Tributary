$('#context > li > a').click( function(e) {
	e.preventDefault();
	path = $(this).attr('id');
	$.get('/' + path, function(data) {
		$('#content').html(data);
	});
	$('#context > li').removeClass('active');
	$(this).addClass('active');
})