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

document.addEventListener('DOMContentLoaded', function() {
  var menuToggle = document.getElementById('menuToggle');
  if (menuToggle) {
    menuToggle.addEventListener('click', function(event) {
      event.preventDefault(); // Stop the default anchor behavior

      var x = document.getElementById("scroll");
      if (x.className === "scroll") {
        x.className += " responsive";
      } else {
        x.className = "scroll";
      }
    });
  }
});

// Remove or comment out your original myMenu() function if you use this option
// function myMenu() { ... }
