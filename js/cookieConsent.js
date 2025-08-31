document.addEventListener('DOMContentLoaded', () => {
    const cookieConsentPopup = document.getElementById('cookieConsent');
    const initialCookieView = document.getElementById('initialCookieView');
    const detailedCookieView = document.getElementById('detailedCookieView');
    const footerCookieChoicesLink = document.getElementById('showCookieChoices'); // The "Cookie Choices" link in the footer

    const acceptButton = document.getElementById('acceptCookies');
    const showDetailedChoicesButton = document.getElementById('showDetailedChoices');

    const essentialCookiesCheckbox = document.getElementById('essentialCookies');
    const functionalCookiesCheckbox = document.getElementById('functionalCookies');
    const analyticsCookiesCheckbox = document.getElementById('analyticsCookies');
    const advertisingCookiesCheckbox = document.getElementById('advertisingCookies');
    const confirmCookieChoicesButton = document.getElementById('confirmCookieChoices');
    const showSimplerChoicesLink = document.getElementById('showSimplerChoices');

    function showCookieConsent() {
        if (cookieConsentPopup) {
            cookieConsentPopup.classList.add('show');
            showView(initialCookieView);
        }
    }

    function hideCookieConsent() {
        if (cookieConsentPopup) {
            cookieConsentPopup.classList.remove('show');
        }
    }

    function showView(viewToShow) {
        initialCookieView.classList.remove('active');
        detailedCookieView.classList.remove('active');
        viewToShow.classList.add('active');
    }

    function loadCookiePreferences() {
        if (essentialCookiesCheckbox) {
            essentialCookiesCheckbox.checked = true;
            essentialCookiesCheckbox.disabled = true;
        }

        if (functionalCookiesCheckbox) {
            const functionalConsent = localStorage.getItem('functionalCookies');
            functionalCookiesCheckbox.checked = (functionalConsent === null || functionalConsent === 'true');
        }
        if (analyticsCookiesCheckbox) {
            const analyticsConsent = localStorage.getItem('analyticsCookies');
            analyticsCookiesCheckbox.checked = (analyticsConsent === null || analyticsConsent === 'true');
        }
        if (advertisingCookiesCheckbox) {
            const advertisingConsent = localStorage.getItem('advertisingCookies');
            advertisingCookiesCheckbox.checked = (advertisingConsent === null || advertisingConsent === 'true');
        }
    }

    const consentGiven = localStorage.getItem('cookieConsent');

    if (consentGiven === null) {
        setTimeout(showCookieConsent, 500);
    } else {
        hideCookieConsent();
    }

    if (acceptButton) {
        acceptButton.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            localStorage.setItem('functionalCookies', 'true');
            localStorage.setItem('analyticsCookies', 'true');
            localStorage.setItem('advertisingCookies', 'true');
            hideCookieConsent();
            console.log('Cookies understood and accepted (all categories).');
        });
    }

    if (showDetailedChoicesButton) {
        showDetailedChoicesButton.addEventListener('click', () => {
            showView(detailedCookieView);
            loadCookiePreferences();
            console.log('Showing detailed cookie choices.');
        });
    }

    if (confirmCookieChoicesButton) {
        confirmCookieChoicesButton.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'custom'); // Indicate custom choice
            localStorage.setItem('functionalCookies', functionalCookiesCheckbox.checked);
            localStorage.setItem('analyticsCookies', analyticsCookiesCheckbox.checked);
            localStorage.setItem('advertisingCookies', advertisingCookiesCheckbox.checked);

            hideCookieConsent();
            console.log('Custom cookie choices confirmed.');
            console.log('Functional:', functionalCookiesCheckbox.checked);
            console.log('Analytics:', analyticsCookiesCheckbox.checked);
            console.log('Advertising:', advertisingCookiesCheckbox.checked);
        });
    }

    if (showSimplerChoicesLink) {
        showSimplerChoicesLink.addEventListener('click', (event) => {
            event.preventDefault();
            showView(initialCookieView);
            console.log('Showing simpler cookie choices.');
        });
    }

    if (footerCookieChoicesLink) {
        footerCookieChoicesLink.addEventListener('click', (event) => {
            event.preventDefault();
            showCookieConsent();
            showView(detailedCookieView);
            loadCookiePreferences();
            console.log('Opening detailed cookie choices from footer.');
        });
    }

    if (essentialCookiesCheckbox) {
        essentialCookiesCheckbox.parentElement.addEventListener('click', (event) => {
            if (essentialCookiesCheckbox.disabled) {
                event.preventDefault();
                event.stopPropagation();
            }
        });
    }
    loadCookiePreferences();
});