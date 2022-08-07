const { default: plugin } = require("tailwindcss");

module.exports = {
	darkMode: "class",
	content: [
		"./dist/**/*.{html,md,11ty.js,liquid,njk,hbs,mustache,ejs,haml,pug}",
		"./public/*.html"
	],
	theme: {
		screens: {
			"1sm": { min: "666px", max: "700px" },
			"6sm": { max: "240px" },
			"2sm": { min: "700px", max: "800px" },
			"3sm": { min: "450px", max: "500px" },
			"4sm": { min: "350px", max: "450px" },
			"5sm": { min: "250px", max: "350px" },
			"1lg": { min: "1000px" },
			sm: { min: "100px", max: "768px" },
			lg: { min: "768px" },
		},
		container: {
			center: true,
		},
		extend: {},
	},
	plugins: [],
};
