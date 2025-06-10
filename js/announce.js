// Function to close the announcement popup
function closeAnnouncementPopup() {
    const popup = document.getElementById('announcementPopup');

    if (popup) {
        // Get the unique ID of the announcement that is currently being displayed
        const currentAnnouncementId = popup.getAttribute('data-announcement-id');

        // If an ID exists, store it in localStorage, indicating this specific announcement was dismissed
        if (currentAnnouncementId) {
            localStorage.setItem('lastDismissedAnnouncementId', currentAnnouncementId);
        }

        // Hide the popup
        popup.style.display = 'none';
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
        // 1. If there's no current ID (unlikely if structured correctly) OR
        // 2. If the current announcement's ID is DIFFERENT from the one last dismissed OR
        // 3. If no announcement has been dismissed yet (lastDismissedAnnouncementId is null)
        // THEN, show the popup.
        if (currentAnnouncementId && currentAnnouncementId !== lastDismissedAnnouncementId) {
            popup.style.display = 'flex'; // Show the announcement (it's new or never seen)
        } else {
            popup.style.display = 'none'; // Hide it (it's the same announcement already dismissed)
        }
    }
});
