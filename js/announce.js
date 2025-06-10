// Function to close the announcement popup
function closeAnnouncementPopup() {
    const popup = document.getElementById('announcementPopup');

    // Set localStorage item to hide popup on ALL subsequent visits,
    // as it's meant to show only once regardless of checkbox state.
    localStorage.setItem('hideMerchPopup', 'true');

    // Hide the popup
    if (popup) {
        popup.style.display = 'none';
    }
}

// Check on page load if the popup should be hidden
document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('announcementPopup');
    if (popup) {
        const hidePopup = localStorage.getItem('hideMerchPopup');

        if (hidePopup === 'true') {
            popup.style.display = 'none'; // Keep it hidden if it's already been shown and closed once
        } else {
            popup.style.display = 'flex'; // Show for the very first time
        }
    }
});
