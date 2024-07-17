import { PortfolioList } from "@/components/portfolio/PortfolioList";

export default function PortfolioPage() {
	return (
		<main className="container mx-auto flex items-center justify-start gap-6 px-4">
			<section className="flex w-full flex-col gap-8">
				<header className="flex flex-col gap-2 border-l-8 border-primary pl-2">
					<h1 className="text-5xl font-bold sm:text-6xl">my portfolio</h1>
				</header>
				<PortfolioList />
			</section>
		</main>
	);
}
