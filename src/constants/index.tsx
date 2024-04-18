import { Github, Linkedin, Mail } from "lucide-react";

import { type TSocialLink } from "@/types";

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

export const TECH_STACK = ["TypeScript", "React", "Next.js", "NestJS"];
