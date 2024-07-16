import NextImage from "next/image";

import { SOCIAL_LINKS } from "@/constants";
import { ButtonLink } from "@/components/ButtonLink";

export default function Home() {
	return (
		<main className="-mt-20 flex h-dvh items-center justify-center gap-6 px-2">
			<section className="flex flex-col gap-8">
				<header className="flex flex-col gap-2 border-l-8 border-primary pl-2">
					<h1 className="text-5xl font-bold sm:text-6xl">Michał Łata</h1>
					<p className="">Web Developer | Tech & AI enthusiast</p>
				</header>
				<figure className="aspect-square w-56 self-center overflow-hidden rounded-full border-4 border-white shadow-sm">
					<NextImage
						src="/images/mike.jpeg"
						alt="Michał Łata – Web Developer"
						width={400}
						height={400}
						className="h-full w-full object-cover"
						loading="eager"
					/>
				</figure>
				<ul className="-z-10 flex justify-center gap-2 text-xl font-bold text-primary">
					<li className="animate-fade-right animation-delay-200">TypeScript</li>
					<li className="animate-fade-down animation-delay-550">React</li>
					<li className="animate-fade-down animation-delay-750">Next.js</li>
					<li className="animate-fade-left animation-delay-1100">NestJS</li>
				</ul>
				<article className="flex flex-col gap-4">
					<p>You can find me on:</p>
					<ul className="flex justify-evenly gap-2 sm:gap-4">
						{SOCIAL_LINKS.map(({ href, icon, label }) => (
							<li key={href}>
								<ButtonLink href={href} icon={icon} label={label} />
							</li>
						))}
					</ul>
				</article>
			</section>
		</main>
	);
}
