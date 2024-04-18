import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			white: "#EEEEEE",
			black: "#222222",
		},
		extend: {
			colors: {
				primary: "#42880C",
				"primary-dark": "#336A0A",
			},
			backgroundImage: {
				"gradient-background": "radial-gradient(circle, rgb(59,59,59) 0%, rgb(40,40,40) 80%)",
			},
		},
	},
	plugins: [],
};
export default config;
