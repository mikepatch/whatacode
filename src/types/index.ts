export type TSocialLink = {
	href: string;
	icon: React.ReactNode;
	label: string;
};

export type TNavItem = {
	href: string;
	label: string;
};

export type TPortfolioLink = {
	href: string;
	label: string;
};

export type TPortfolioItem = {
	title: string;
	description: string;
	technologies: string[];
	imageSrc: string;
	links: TPortfolioLink[];
};
