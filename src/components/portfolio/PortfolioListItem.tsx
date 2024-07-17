import NextImage from "next/image";
import Link from "next/link";

import { type TPortfolioItem } from "@/types";

type PortfolioListItemProps = {
	projectDetails: TPortfolioItem;
};

export const PortfolioListItem = ({
	projectDetails: { title, technologies, description, links, imageSrc },
}: PortfolioListItemProps) => {
	return (
		<li className="flex w-full flex-col gap-4 sm:grid sm:grid-cols-3">
			<figure className="relative aspect-video w-full self-center overflow-hidden rounded-sm shadow-sm">
				<NextImage
					src={imageSrc}
					alt={title}
					fill
					className="h-full w-full object-cover object-top"
					loading="lazy"
				/>
			</figure>
			<article className="flex flex-col justify-between gap-2 sm:col-span-2">
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
