var mn = $(".container");
mns = "container-scrolled";
hdr = $("header").height();

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
	var body = document.body; // Get the body element
	var menuToggle = document.querySelector("#icon .menu-toggle"); // Select the a.menu-toggle element

	if (x.classList.contains("responsive")) {
		// Check if 'responsive' class is already present
		x.classList.remove("responsive"); // If it is, remove it to close the menu
		body.classList.remove("mobile-menu-open"); // Also remove the body class
		menuToggle.classList.remove("open"); // <--- ADD THIS LINE: Remove 'open' class for hamburger animation
	} else {
		x.classList.add("responsive"); // If not, add it to open the menu
		body.classList.add("mobile-menu-open"); // Also add the body class
		menuToggle.classList.add("open"); // <--- ADD THIS LINE: Add 'open' class for hamburger animation
	}
}

// Keep your existing NEW CODE TO ADD: Close menu when a link inside it is clicked
document.addEventListener("DOMContentLoaded", function () {
	const mobileMenuLinks = document.querySelectorAll("#scroll a"); // Targets links inside #scroll

	mobileMenuLinks.forEach((link) => {
		link.addEventListener("click", function () {
			const cfixMenu = document.getElementById("cfix");
			const body = document.body; // Get the body element

			if (cfixMenu && cfixMenu.classList.contains("responsive")) {
				cfixMenu.classList.remove("responsive");
				body.classList.remove("mobile-menu-open"); // Remove the body class when closing via link click
			}
		});
	});
});
