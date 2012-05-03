$(document).ready( function() {
	init();
	$('.dropdown-toggle').dropdown();
	});


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
		var text= 'Pour-over ad typewriter 8-bit, jean shorts cardigan godard. Swag wolf occaecat, polaroid gluten-free sint nostrud before they sold out ethical kale chips. Esse odio scenester wes anderson fixie, 8-bit you probably haven\'t heard of them iphone. Deserunt exercitation aliquip fanny pack enim marfa, carles ad. Mlkshk high life scenester williamsburg nihil ut keffiyeh tumblr, post-ironic tattooed. Kogi ut sint mollit bicycle rights odio. Post-ironic mcsweeney\'s squid, pariatur deserunt fugiat labore. Dolore shoreditch pitchfork ennui proident, ex mumblecore bushwick. Eu artisan bushwick readymade before they sold out veniam. Quinoa 8-bit freegan nihil, leggings assumenda duis nulla marfa. <br>Polaroid chambray craft beer dolor pork belly, american apparel umami skateboard selvage ullamco wayfarers hoodie. Sriracha pariatur wayfarers ex, dolor vegan ullamco qui lo-fi duis. Vice placeat mumblecore, mollit iphone velit messenger bag salvia master cleanse anim farm-to-table. Messenger bag ullamco hella, +1 nostrud voluptate delectus marfa mlkshk tofu master cleanse sunt. Vegan consectetur aliqua trust fund ethnic dolore.<br> Chillwave direct trade godard excepteur culpa swag tofu, minim brunch scenester dolore fugiat officia squid. Eu thundercats esse, post-ironic aesthetic twee freegan readymade small batch. Odio et lomo laboris wayfarers. Carles trust fund retro, skateboard magna viral velit mustache post-ironic cardigan. Skateboard you probably haven\'t heard of them keytar, cray sartorial twee pour-over mixtape hella wes anderson mumblecore salvia nulla pinterest +1. Esse chambray pariatur PBR ut, voluptate laboris banh mi high life proident post-ironic commodo in blog. <br>Nisi direct trade iphone messenger bag kale chips, bicycle rights chambray banh mi ut odd future mustache nihil sapiente helvetica. DIY letterpress lomo, portland synth cred occupy VHS pinterest. Ethnic mlkshk consequat biodiesel, narwhal retro mumblecore scenester master cleanse voluptate adipisicing vice consectetur art party pour-over. Small batch brunch artisan, pariatur ullamco nisi cliche sunt post-ironic mixtape cray banh mi biodiesel Austin. Marfa commodo odd future jean shorts. Cosby sweater pickled ad sartorial odio dolore quinoa, vinyl typewriter. Biodiesel portland ullamco esse squid pickled umami raw denim wolf twee, quis PBR organic typewriter in.';
		$(target).html( text.substr(0, length ) );
	
		});
}

function init() {
		//Context menu switcher
		$('a').each( function(index) { 
			$(this).click( function(e) {
				e.preventDefault();
				path = $(this).attr('id');
				$.get('/' + path, function(data) {
						$('#content').html(data);
						ipsum();
					});
				$('ul > li').removeClass('active');
				$(this).addClass('active');
			})
		});
		comment();
		$(function () {
	    $('.nav-pills a:first').tab('show');
	    $('#calendarTab a:first').tab('show');
	  })
		calendar();
		ipsum();
		searchField();
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

function calendar() {
	//Hide calendar
	$('#calendarContent > div.pane').hide()
	$('#calendarContent > div.active').show

	//Bind
	$('#calendarTabs > btn').click( function(e) {
		e.preventDefault();
		$('#calendarTabs > btn').removeClass('active');
		$(this).addClass('active');
		$('#calendarContent > div.pane').hide();
		$('#calendarContent > div#' + target)
	});
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