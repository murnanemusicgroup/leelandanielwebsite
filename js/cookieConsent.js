// js/cookieConsent.js

document.addEventListener('DOMContentLoaded', () => {
    const cookieConsentPopup = document.getElementById('cookieConsent');
    const acceptButton = document.getElementById('acceptCookies');
    const declineButton = document.getElementById('declineCookies');

    // Function to show the popup
    function showCookieConsent() {
        if (cookieConsentPopup) {
            cookieConsentPopup.classList.add('show');
        }
    }

    // Function to hide the popup
    function hideCookieConsent() {
        if (cookieConsentPopup) {
            cookieConsentPopup.classList.remove('show');
        }
    }

    // Check if the user has already made a choice
    // 'cookieAccepted' can be 'true', 'false', or null (if no choice yet)
    const consentGiven = localStorage.getItem('cookieConsent');

    if (consentGiven === null) {
        // If no choice has been made, show the popup after a short delay
        // Delay helps ensure CSS transitions work and elements are rendered
        setTimeout(showCookieConsent, 500); // Show after 0.5 seconds
    } else {
        // If a choice was made, hide the popup immediately (it's hidden by default anyway)
        hideCookieConsent();
    }

    // Event listener for "Accept" button
    if (acceptButton) {
        acceptButton.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted'); // Store 'accepted'
            hideCookieConsent();
            // You can add more logic here, e.g., initialize analytics scripts
            console.log('Cookies accepted.');
        });
    }

    // Event listener for "Decline" button
    if (declineButton) {
        declineButton.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'declined'); // Store 'declined'
            hideCookieConsent();
            // You can add more logic here, e.g., disable certain features
            console.log('Cookies declined.');
        });
    }
});
