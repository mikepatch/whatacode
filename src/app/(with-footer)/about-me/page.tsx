import { PageContainer } from "@/components/PageContainer";

export default function AboutMePage() {
	const skills = [
		"HTML",
		"CSS",
		"TypeScript",
		"React",
		"Next.js",
		"NestJS",
		"REST API",
		"Responsive Design",
		"Git",
		"Github",
		"Tailwind CSS",
	];

	return (
		<PageContainer title="about me">
			<section className="flex basis-2/3 flex-col gap-12">
				<article className="flex flex-col gap-8">
					<header>
						<h2 className="text-3xl font-bold">some words about me</h2>
					</header>
					<p>
						I&#39;m a detail-oriented web developer with a passion for Tech & AI. I specialize in
						TypeScript, HTML, CSS, and love working with frameworks/libraries like Next.js and
						React. Solving puzzles and diving into analytical challenges is what drives me, always
						pushing me to grow and innovate in every project I tackle.
					</p>
					<p>
						My journey in web development is driven by a passion for creating user-friendly
						interfaces and solving complex problems.
					</p>
					<p>
						I actively participate in local meetups and events, such as WarsawJS, AI_devs, to stay
						connected with the community and stay updated with the latest trends and technologies.
						This year, I had the opportunity to attend the Kongres Next.js and ConfrontJS events,
						which further enriched my understanding and skills.
					</p>
				</article>
				<article className="flex flex-col gap-6">
					<header>
						<h2 className="text-3xl font-bold">in free time</h2>
					</header>
					<p>
						When I&#39;m not coding, I enjoy reading books about personal development, watching
						movies, and walking with my fiancée and our dogs, Tiffany & Max.
					</p>
				</article>
			</section>
			<section className="flex flex-col gap-6">
				<header>
					<h2 className="text-3xl font-bold">my skills</h2>
				</header>
				<ul className="flex flex-wrap gap-2">
					{skills.map((skill) => (
						<li key={skill} className="rounded-sm bg-primary px-4 py-2 text-white shadow-sm">
							{skill}
						</li>
					))}
				</ul>
			</section>
		</PageContainer>
	);
}
