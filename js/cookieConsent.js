// js/cookieConsent.js

document.addEventListener('DOMContentLoaded', () => {
    const cookieConsentPopup = document.getElementById('cookieConsent');
    const acceptButton = document.getElementById('acceptCookies');
    const declineButton = document.getElementById('declineCookies');
    const showCookieChoicesLink = document.getElementById('showCookieChoices'); // New: Get the "Cookie Choices" link

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

    // Check if the user has already made a choice on page load
    const consentGiven = localStorage.getItem('cookieConsent');

    if (consentGiven === null) {
        // If no choice has been made, show the popup after a short delay
        setTimeout(showCookieConsent, 500);
    } else {
        // If a choice was made, hide the popup immediately (it's hidden by default anyway)
        hideCookieConsent();
    }

    // Event listener for "Accept" button
    if (acceptButton) {
        acceptButton.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted'); // Store 'accepted'
            hideCookieConsent();
            // You can add more logic here, e.g., initialize analytics scripts if you had them
            console.log('Cookies accepted.');
        });
    }

    // Event listener for "Decline" button
    if (declineButton) {
        declineButton.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'declined'); // Store 'declined'
            hideCookieConsent();
            // You can add more logic here, e_g., disable certain features if you had them
            console.log('Cookies declined.');
        });
    }

    // NEW: Event listener for the "Cookie Choices" link in the footer
    if (showCookieChoicesLink) {
        showCookieChoicesLink.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior (e.g., jumping to top)
            showCookieConsent(); // Show the cookie consent popup again
            console.log('Cookie Choices link clicked, showing popup.');
        });
    }
});
