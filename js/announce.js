// Function to close the announcement popup
function closeAnnouncementPopup() {
    const popup = document.getElementById('announcementPopup');

    if (popup) {
        // Get the unique ID of the announcement that is currently being displayed
        // This ID should be set in your HTML, e.g., <div id="announcementPopup" data-announcement-id="20250610-v1">...</div>
        const currentAnnouncementId = popup.getAttribute('data-announcement-id');

        // If an ID exists, store it in localStorage, indicating this specific announcement was dismissed
        if (currentAnnouncementId) {
            localStorage.setItem('lastDismissedAnnouncementId', currentAnnouncementId);
        }

        // Hide the popup using CSS classes for smoother transition
        popup.classList.remove('show-announcement');
        popup.classList.add('hide-announcement');

        // Fallback: Ensure display is set to none after a short delay (to allow transition to complete)
        // This is important for accessibility and preventing interaction with hidden elements.
        setTimeout(() => {
            popup.style.display = 'none';
        }, 500); // Matches the transition duration in CSS
    }
}

// Function to attach the close handler to the button
function setupAnnouncementCloseButton() {
    const closeButton = document.getElementById('announcementCloseButton'); // Make sure your button has this ID
    if (closeButton) {
        closeButton.addEventListener('click', closeAnnouncementPopup);
    }
}

// Check on page load if the popup should be hidden or shown
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('announcementPopup');

    if (popup) {
        // Get the unique ID of the current announcement in the HTML
        const currentAnnouncementId = popup.getAttribute('data-announcement-id');
        // Get the ID of the last announcement that was dismissed by the user
        const lastDismissedAnnouncementId = localStorage.getItem('lastDismissedAnnouncementId');

        // Logic to decide whether to show or hide the popup:
        // Show the popup ONLY if there's a current ID AND it's different from the one last dismissed.
        if (currentAnnouncementId && currentAnnouncementId !== lastDismissedAnnouncementId) {
            popup.style.display = 'flex'; // Ensure display is flex for centering, initially
            popup.classList.remove('hide-announcement'); // Remove any lingering hide class
            popup.classList.add('show-announcement'); // Add class to trigger visibility/fade-in
        } else {
            popup.style.display = 'none'; // Explicitly hide it if it's the same announcement or no current ID
            popup.classList.remove('show-announcement'); // Ensure show class is removed
            popup.classList.add('hide-announcement'); // Add hide class
        }
    }

    // Setup the close button listener regardless of initial popup visibility
    setupAnnouncementCloseButton();
});
