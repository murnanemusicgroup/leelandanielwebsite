function closeAnnouncementPopup() {
    const popup = document.getElementById('announcementPopup');

    if (popup) {
        const currentAnnouncementId = popup.getAttribute('data-announcement-id');

        if (currentAnnouncementId) {
            localStorage.setItem('lastDismissedAnnouncementId', currentAnnouncementId);
        }

        popup.classList.remove('show-announcement');
        popup.classList.add('hide-announcement');

        setTimeout(() => {
            popup.style.display = 'none';
        }, 500);
    }
}

function setupAnnouncementCloseButton() {
    const closeButton = document.getElementById('announcementCloseButton');
    if (closeButton) {
        closeButton.addEventListener('click', closeAnnouncementPopup);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('announcementPopup');

    if (popup) {
        const currentAnnouncementId = popup.getAttribute('data-announcement-id');
        const lastDismissedAnnouncementId = localStorage.getItem('lastDismissedAnnouncementId');

        if (currentAnnouncementId && currentAnnouncementId !== lastDismissedAnnouncementId) {
            popup.style.display = 'flex';
            popup.classList.remove('hide-announcement');
            popup.classList.add('show-announcement');
        } else {
            popup.style.display = 'none';
            popup.classList.remove('show-announcement');
            popup.classList.add('hide-announcement');
        }
    }
    setupAnnouncementCloseButton();
});