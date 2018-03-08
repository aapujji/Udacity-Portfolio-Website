/*

Author: Aanandita Pujji
Date: Nove 3, 2017
v1.0

*/

// Lightbox Script
// Opens up a window that displays a larger version of the work image
$(function() {
	$('.view-image').each(function() {
		$(this).click(function() {
			$('.popup').show();
			var $posted_img = $(this).find('img').attr('src');
			$('.popup-image img').attr('src', $posted_img);
			console.log($posted_title);
		});

		// Prevent popup box opening when clicking on action buttons
		$('.action-btns a').click(function(e) {
			e.stopPropagation();
		});
	});

	// Close popup box
	$('.close-btn').click(function(e) {
		e.preventDefault();
		$('.popup').hide();
	});
});