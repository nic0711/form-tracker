(function($) {
$(document).ready(function() { 
	$(':input').blur(function () {
		if($(this).val().length > 0) {
			// Old Analytics  _gaq.push(['_trackEvent', 'INSERT FORM NAME HERE', 'completed', $(this).attr('name')]);
			ga(‘send’, ‘event’, ‘INSERT FORM NAME HERE’, ‘completed’, $(this).attr(‘name’));
		} 
		else {
			// Old Analytics  _gaq.push(['_trackEvent', 'INSERT FORM NAME HERE', 'skipped', $(this).attr('name')]);
			ga(‘send’, ‘event’, ‘INSERT FORM NAME HERE’, ‘sipped’, $(this).attr(‘name’));
		}
	});
});
})(jQuery);
