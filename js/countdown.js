document.addEventListener("DOMContentLoaded", () => {
	const releaseDate = new Date("2025-09-07T12:00:00-04:00").getTime();

	if (new Date().getTime() >= releaseDate) {
		window.location.href = "/";
		return;
	}

	const daysEl = document.getElementById("days");
	const hoursEl = document.getElementById("hours");
	const minutesEl = document.getElementById("minutes");
	const secondsEl = document.getElementById("seconds");

	const countdownInterval = setInterval(() => {
		const now = new Date().getTime();
		const distance = releaseDate - now;

		if (distance < 0) {
			clearInterval(countdownInterval);
			window.location.href = "/";
			return;
		}

		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);

		const formatTime = (time) => (time < 10 ? `0${time}` : time);

		if (daysEl) daysEl.innerHTML = formatTime(days);
		if (hoursEl) hoursEl.innerHTML = formatTime(hours);
		if (minutesEl) minutesEl.innerHTML = formatTime(minutes);
		if (secondsEl) secondsEl.innerHTML = formatTime(seconds);
	}, 1000);
});
