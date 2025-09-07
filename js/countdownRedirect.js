const releaseDate = new Date("2025-09-07T12:00:00-04:00").getTime();

if (new Date().getTime() < releaseDate) {
	if (window.location.pathname.indexOf("/password") === -1) {
		window.location.href = "/password";
	}
}
