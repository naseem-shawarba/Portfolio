export default defineNuxtPlugin((nuxtApp) => {
	window.goatcounter = {
		path: (p) => {
			// Don't track the home page.
			const excludedPaths = ["/?debug=true", "/index", "/404", "/200"];
			if (excludedPaths.includes(p)) return null;

			// Remove .html from all other page links.
			return p.replace(/\.html$/, "");
		}
	};

	// Load the GoatCounter script dynamically
	const script = document.createElement("script");
	script.setAttribute(
		"data-goatcounter",
		"https://naseem-shawarba.goatcounter.com/count"
	);
	script.src = "https://gc.zgo.at/count.js";
	script.async = true;
	document.head.appendChild(script);
});
