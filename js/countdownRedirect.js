const releaseDate = new Date("2025-09-01T14:30:00-04:00").getTime();

if (new Date().getTime() < releaseDate) {
	if (window.location.pathname.indexOf("/password.html") === -1) {
		window.location.href = "/password.html";
	}
}
