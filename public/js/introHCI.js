'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here

	function handleLike()
	{	
		console.log("Like Button Pressed");
		ga('create','UA-134971101-1','auto');
		ga("send", "event", "like", "click");
	}

	$('.likeBtn').click( handleLike );
}


