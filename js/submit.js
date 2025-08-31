document.addEventListener("DOMContentLoaded", function () {
	// --- Your existing code for closing the mobile menu ---
	const mobileMenuLinks = document.querySelectorAll("#scroll a");

	mobileMenuLinks.forEach((link) => {
		link.addEventListener("click", function () {
			const cfixMenu = document.getElementById("cfix");
			const body = document.body;
			const menuToggle = document.querySelector("#icon .menu-toggle");

			if (cfixMenu && cfixMenu.classList.contains("responsive")) {
				cfixMenu.classList.remove("responsive");
				body.classList.remove("mobile-menu-open");
				menuToggle.classList.remove("open");
			}
		});
	});

	// --- NEW: Wait for the dynamically loaded form ---
	// This function will set up the form listener
	function initializeForm() {
		const scriptURL = "https://script.google.com/macros/s/AKfycbxYERszZCWgR6bPy7BBwIHVslYmq909IYB_u80YFMnn5bzbhZJfvq0HvY7ati1rxvKn/exec";
		const signupForm = document.getElementById("signupForm");
		const formMessage = document.getElementById("formMessage");

		// Only add the listener if the form was actually found
		if (signupForm) {
			signupForm.addEventListener("submit", (e) => {
				e.preventDefault();

				formMessage.style.display = "none";
				formMessage.classList.remove("success", "error");

				const formData = new FormData(signupForm);
				if (!formData.has("Consent")) {
					formData.append("Consent", "No");
				}

				fetch(scriptURL, {
					method: "POST",
					body: formData,
				})
					.then((response) => response.json())
					.then((data) => {
						if (data.result === "success") {
							formMessage.textContent = "Thanks for signing up! You'll be the first to know about new music.";
							formMessage.classList.add("success");
							signupForm.reset();
						} else {
							formMessage.textContent = "Error: " + (data.error || "Something went wrong.");
							formMessage.classList.add("error");
						}
						formMessage.style.display = "block";
					})
					.catch((error) => {
						console.error("Submission Error!", error.message);
						formMessage.textContent = "Network error. Please try again.";
						formMessage.classList.add("error");
						formMessage.style.display = "block";
					});
			});
		} else {
			// If the form isn't found, try again in a moment.
			// This handles cases where include.js is a bit slow.
			setTimeout(initializeForm, 100);
		}
	}

	// Start checking for the form once the document is ready
	initializeForm();
});
