const mainStylesheetPath = "/css/outoflove.css";
const faviconPath = "/favicons/outoflovefavicon.png";

const stylesheetLink = document.createElement("link");
stylesheetLink.rel = "stylesheet";
stylesheetLink.href = mainStylesheetPath;
stylesheetLink.type = "text/css";
stylesheetLink.title = "style";
document.head.appendChild(stylesheetLink);


const faviconLink = document.createElement("link");
faviconLink.rel = "icon";
faviconLink.type = "image/png";
faviconLink.href = faviconPath;
document.head.appendChild(faviconLink);

// hehehehe

document.addEventListener("DOMContentLoaded", function () {
	const includeHTML = (filePath, targetElementId) => {
		fetch(filePath)
			.then((response) => {
				if (!response.ok) throw new Error(`Could not load ${filePath}`);
				return response.text();
			})
			.then((data) => {
				document.getElementById(targetElementId).innerHTML = data;
			})
			.catch((error) => console.error("Error including HTML:", error));
	};

	includeHTML("/components/privacy.html", "privacy-placeholder");
	includeHTML("/components/terms.html", "terms-placeholder");
	includeHTML("/components/hero.html", "hero-placeholder");
    includeHTML("/components/sign-up.html", "sign-up-placeholder");
	includeHTML("/components/header.html", "header-placeholder");
	includeHTML("/components/discography.html", "discography-placeholder");
	includeHTML("/components/videos.html", "videos-placeholder");
	includeHTML("/components/announcement.html", "announcement-placeholder");
});
