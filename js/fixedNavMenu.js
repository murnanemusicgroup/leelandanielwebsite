var  mn = $(".container");
    mns = "container-scrolled";
    hdr = $('header').height();
	
$(window).scroll(checkContainerScrolled);
$(window).ready(checkContainerScrolled);

function checkContainerScrolled() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
}

function myMenu(event) { // Add 'event' as a parameter
  if (event) { // Check if event object exists (important for older browsers or direct calls)
    event.preventDefault(); // Stop the default anchor behavior
  }
  var x = document.getElementById("scroll");
  if (x.className === "scroll") {
    x.className += " responsive";
  } else {
    x.className = "scroll";
  }
}

