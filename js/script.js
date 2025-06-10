document.addEventListener('DOMContentLoaded', function() {
    // Get the modal element
    var signupModal = document.getElementById("signupModal");

    // Get the button that opens the modal
    var signupLink = document.getElementById("signupLink");

    // Get the <span> element that closes the modal
    var closeButton = document.querySelector(".modal-content .close-button");

    // When the user clicks the "Signup" link, open the modal
    if (signupLink) {
        signupLink.onclick = function(event) {
            event.preventDefault(); // Prevent default link behavior (e.g., scrolling to top)
            if (signupModal) {
                signupModal.style.display = "flex"; // Show the modal
                document.body.classList.add('modal-open'); // Add class to body to prevent scrolling
            }
        }
    }

    // When the user clicks on the close button, close the modal
    if (closeButton) {
        closeButton.onclick = function() {
            if (signupModal) {
                signupModal.style.display = "none"; // Hide the modal
                document.body.classList.remove('modal-open'); // Remove class from body
            }
        }
    }

    // When the user clicks anywhere outside of the modal-content, close it
    if (signupModal) {
        signupModal.onclick = function(event) {
            // Check if the click occurred directly on the modal background, not on its content
            if (event.target === signupModal) {
                signupModal.style.display = "none"; // Hide the modal
                document.body.classList.remove('modal-open'); // Remove class from body
            }
        }
    }
});
