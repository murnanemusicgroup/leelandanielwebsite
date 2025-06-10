var mn = $(".container");
mns = "container-scrolled";
hdr = $('header').height();

$(window).scroll(checkContainerScrolled);
$(window).ready(checkContainerScrolled);

function checkContainerScrolled() {
  if ($(this).scrollTop() > hdr) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
}

function myMenu() {
    var x = document.getElementById("cfix"); // This is the UL that toggles 'responsive'
    if (x.className === "clearfix") {
        x.className += " responsive";
    } else {
        x.className = "clearfix";
    }
}

// NEW CODE TO ADD: Close menu when a link inside it is clicked
document.addEventListener('DOMContentLoaded', function() {
    // Select all anchor tags within the menu that becomes responsive
    // In your case, these links are inside the 'scroll' ul, which is inside 'cfix'
    const mobileMenuLinks = document.querySelectorAll('#scroll a');

    // Loop through each link and add a click event listener
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Get the main menu element (cfix)
            const cfixMenu = document.getElementById("cfix");

            // If the menu is currently open (has the 'responsive' class), close it
            if (cfixMenu && cfixMenu.classList.contains("responsive")) {
                cfixMenu.classList.remove("responsive");
            }
            // For anchor links (like #discography), the browser will handle the scroll automatically.
        });
    });
});
