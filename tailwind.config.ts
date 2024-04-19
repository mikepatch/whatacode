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
			animation: {
				"fade-up": "fade-up 1s ease-out both",
				"fade-down": "fade-down 1s ease-out both",
				"fade-left": "fade-left 1s ease-out both",
				"fade-right": "fade-right 1s ease-out both",
				"fade-in": "fade-in 1s ease-out both",
			},
			keyframes: {
				"fade-up": {
					"0%": {
						opacity: "0",
						transform: "translateY(1rem)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				"fade-down": {
					"0%": {
						opacity: "0",
						transform: "translateY(-1rem)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				"fade-left": {
					"0%": {
						opacity: "0",
						transform: "translateX(1rem)",
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)",
					},
				},
				"fade-right": {
					"0%": {
						opacity: "0",
						transform: "translateX(-1rem)",
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)",
					},
				},
				"fade-in": {
					"0%": {
						opacity: "0",
					},
					"100%": {
						opacity: "1",
					},
				},
			},
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
