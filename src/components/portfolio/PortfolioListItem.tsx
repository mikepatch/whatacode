import NextImage from "next/image";
import Link from "next/link";

import { type TPortfolioItem } from "@/types";

type PortfolioListItemProps = {
	projectDetails: TPortfolioItem;
};

export const PortfolioListItem = ({
	projectDetails: { title, technologies, description, links, imageSrc },
}: PortfolioListItemProps) => {
	const liveDemoLink = links.find((link) => link.label === "Live demo")?.href || "#";

	return (
		<li className="flex w-full flex-col gap-6 sm:flex-row">
			<figure className="relative aspect-video h-fit w-full basis-1/2 overflow-hidden rounded-sm shadow-sm transition-transform hover:scale-[0.99]">
				<NextImage
					src={imageSrc}
					alt={title}
					fill
					className="h-full w-full object-cover object-top"
					loading="lazy"
				/>
				<Link href={liveDemoLink} rel="noopener noreferrer" target="_blank">
					<div
						className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-2xl font-bold text-white opacity-0 transition-opacity hover:opacity-100"
						aria-label={`Open ${title} live demo`}
					>
						Open live demo
					</div>
				</Link>
			</figure>
			<article className="flex basis-1/2 flex-col justify-between gap-6">
				<header>
					<h2 className="text-2xl font-bold">{title}</h2>
					<ul className="flex flex-wrap gap-2 text-lg text-primary">
						{technologies.map((technology, index) => (
							<li
								key={technology}
								className="-z-10 animate-fade-up"
								style={{ animationDelay: `${index * 200}ms` }}
							>
								{technology}
							</li>
						))}
					</ul>
				</header>
				<p>{description}</p>
				{links.length > 0 && (
					<ul className="flex flex-col gap-2">
						{links.map(({ href, label }) => (
							<li key={href}>
								<span>{label}: </span>
								<Link
									href={href}
									referrerPolicy="no-referrer"
									className="font-bold text-primary underline transition-colors hover:text-primary-dark"
								>
									Link
								</Link>
							</li>
						))}
					</ul>
				)}
			</article>
		</li>
	);
};
