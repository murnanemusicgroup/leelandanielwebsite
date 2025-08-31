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

	includeHTML("/_components/privacy.html", "privacy-placeholder");
	includeHTML("/_components/terms.html", "terms-placeholder");
	includeHTML("/_components/hero.html", "hero-placeholder");
    includeHTML("/_components/sign-up.html", "sign-up-placeholder");
	includeHTML("/_components/header.html", "header-placeholder");
	includeHTML("/_components/discography.html", "discography-placeholder");
	includeHTML("/_components/videos.html", "videos-placeholder");
	includeHTML("/_components/announcement.html", "announcement-placeholder");
});
