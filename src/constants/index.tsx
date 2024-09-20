import { Github, Linkedin, Mail } from "lucide-react";

import { type TPortfolioItem, type TNavItem, type TSocialLink } from "@/types";

export const SOCIAL_LINKS: TSocialLink[] = [
	{
		href: "https://github.com/mikepatch",
		icon: <Github />,
		label: "GitHub",
	},
	{
		href: "https://www.linkedin.com/in/michallata",
		icon: <Linkedin />,
		label: "LinkedIn",
	},
	{
		href: "mailto:michallata.dev@gmail.com",
		icon: <Mail />,
		label: "Email",
	},
];

export const NAV_ITEMS: TNavItem[] = [
	{
		href: "/",
		label: "home",
	},
	{
		href: "/about-me",
		label: "about me",
	},
	{
		href: "/portfolio",
		label: "portfolio",
	},
	// {
	// 	href: "/contact",
	// 	label: "contact",
	// },
];

export const PORTFOLIO_ITEMS: TPortfolioItem[] = [
	{
		title: "Sala Vita",
		technologies: ["TypeScript", "React", "Next.js"],
		description: "The website project for my customer.",
		links: [
			{
				href: "https://sala-vita.pl",
				label: "Live demo",
			},
			{
				href: "https://github.com/mikepatch/sala-vita--frontend",
				label: "Front-end code",
			},
		],
		imageSrc: "/images/portfolio/portfolio-sala-vita.png",
	},
	{
		title: "RevvRush e-commerce",
		technologies: ["TypeScript", "React", "Next.js", "NestJS", "GraphQL"],
		description: "The e-commerce site project to practice front-end and back-end skills.",
		links: [
			{
				href: "https://revvrush.vercel.app",
				label: "Live demo",
			},
			{
				href: "https://github.com/mikepatch/revvrush-ecommerce--frontend",
				label: "Front-end code",
			},
			{
				href: "https://github.com/mikepatch/revvrush-ecommerce--backend",
				label: "Back-end code",
			},
		],
		imageSrc: "/images/portfolio/portfolio-revvrush-ecommerce.png",
	},
];
