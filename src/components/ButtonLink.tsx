import Link from "next/link";

type ButtonLinkProps = {
	href: string;
	icon: React.ReactNode;
	label: string;
};

export const ButtonLink = ({ href, icon, label }: ButtonLinkProps) => {
	return (
		<Link
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="flex items-center gap-2 rounded-sm bg-primary p-4 shadow-sm transition-colors hover:bg-primary-dark"
		>
			{icon}
			<span className="sr-only sm:not-sr-only">{label}</span>
		</Link>
	);
};
