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
		<li className="grid gap-4 sm:grid-cols-3">
			<figure className="aspect-video w-full self-center overflow-hidden rounded-sm shadow-sm">
				<NextImage
					src={imageSrc}
					alt={title}
					width={400}
					height={400}
					className="h-full w-full object-cover object-top"
					loading="eager"
				/>
			</figure>
			<article className="flex flex-col justify-between gap-2 sm:col-span-2">
				<header>
					<h2 className="text-2xl font-bold">{title}</h2>
					<ul className="flex gap-2 text-lg text-primary">
						{technologies.map((technology) => (
							<li key={technology} className="animate-fade-right animation-delay-200">
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
									click to view
								</Link>
							</li>
						))}
					</ul>
				)}
			</article>
		</li>
	);
};
