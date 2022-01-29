module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
		"./node_modules/@themesberg/flowbite/**/*.js",
	],
	theme: {
		extend: {
			colors: {
				background: "#0f0e17",
				"background-2": "#000000",
				"text-accent-1": "#fffffe",
				"text-accent-2": "#a7a9be",
				"text-accent-3": "#fffffe",
				"accent-1": "#ff8906",
				"accent-2": "#f25f4c",
				"accent-3": "#e53170",
			},
		},
	},
	plugins: [require("@themesberg/flowbite/plugin")],
};
