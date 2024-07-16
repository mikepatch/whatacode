import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";
const plugin = require("tailwindcss/plugin");

const animationDelayPlugin = plugin(
	({
		matchUtilities,
		theme,
	}: {
		matchUtilities: PluginAPI["matchUtilities"];
		theme: PluginAPI["theme"];
	}) => {
		matchUtilities(
			{
				"animation-delay": (value: string) => {
					return {
						"animation-delay": value,
					};
				},
			},
			{
				values: {
					"0": "0s",
					"100": "100ms",
					"150": "150ms",
					"200": "200ms",
					"250": "250ms",
					"300": "300ms",
					"350": "350ms",
					"400": "400ms",
					"450": "450ms",
					"500": "500ms",
					"550": "550ms",
					"600": "600ms",
					"650": "650ms",
					"700": "700ms",
					"750": "750ms",
					"800": "800ms",
					"850": "850ms",
					"900": "900ms",
					"950": "950ms",
					"1000": "1000ms",
					"1100": "1100ms",
					"1200": "1200ms",
					"1300": "1300ms",
					"1400": "1400ms",
					"1500": "1500ms",
				},
			},
		);
	},
);

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
				"fade-up": "fade-up .5s ease-out both",
				"fade-down": "fade-down .5s ease-out both",
				"fade-left": "fade-left .5s ease-out both",
				"fade-right": "fade-right .5s ease-out both",
				"fade-in": "fade-in 1s ease-out both",
				"fade-in-fast": "fade-in .5s ease-out both",
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
				"primary-very-dark": "#204206",
			},
			backgroundImage: {
				"gradient-background": "radial-gradient(circle, rgb(59,59,59) 0%, rgb(40,40,40) 80%)",
			},
		},
	},
	plugins: [animationDelayPlugin],
};
export default config;
