import NextImage from "next/image";
import Link from "next/link";

import { SOCIAL_LINKS, TECH_STACK } from "@/constants";

export default function Home() {
	return (
		<main className="flex h-dvh items-center justify-center">
			<section className="flex flex-col items-center gap-8">
				<header className="flex flex-col items-center gap-2">
					<h1 className="animate-fade-down animation-delay-100 text-6xl font-bold">Michał Łata</h1>
					<p className="animate-fade-down animation-delay-300">
						Web Developer | Tech & AI enthusiast
					</p>
					<ul className="animate-fade-down animation-delay-500 flex gap-2 text-xl font-bold text-primary">
						{TECH_STACK.map((tech, index) => (
							<li key={index}>{tech}</li>
						))}
					</ul>
				</header>
				<figure className="outline-brand-primary aspect-square w-56 overflow-hidden rounded-full shadow-sm outline">
					<NextImage
						src="/images/mike.jpeg"
						alt="Michał Łata – Web Developer"
						width={400}
						height={400}
						className="h-full w-full object-cover"
						loading="eager"
					/>
				</figure>
				<article className="animate-fade-up animation-delay-1000 flex flex-col gap-4">
					You can find me on:
					<ul className="flex gap-6">
						{SOCIAL_LINKS.map(({ href, icon, label }) => (
							<li key={href}>
								<Link
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									className="block rounded-md bg-primary p-4 shadow-sm transition-colors hover:bg-primary-dark"
								>
									<span className="sr-only">{label}</span>
									{icon}
								</Link>
							</li>
						))}
					</ul>
				</article>
			</section>
		</main>
	);
}
