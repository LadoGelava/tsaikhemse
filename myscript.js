
	function scrollWin() {
  	window.scrollBy(0, 2); // horizontal and vertical scroll 					increments
  	scrolldelay = setTimeout('scrollWin()', 1); // scrolls 						every 100 milliseconds

	 if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
	
	clearTimeout(scrolldelay);
    scrolldelay = setTimeout('PageUp()', 2000);
	}
	}
 