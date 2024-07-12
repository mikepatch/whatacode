import { ArrowLeftCircleIcon } from "lucide-react";
import Link from "next/link";

import { PortfolioList } from "@/components/portfolio/PortfolioList";

export default function PortfolioPage() {
	return (
		<main className="flex min-h-dvh items-center justify-start gap-6 px-4">
			<section className="container flex flex-col gap-8">
				<header className="flex flex-col gap-2 border-l-8 border-primary pl-2">
					<Link href="/" className="flex w-fit gap-2">
						<ArrowLeftCircleIcon />
						<span>go back</span>
					</Link>
					<h1 className="text-5xl font-bold sm:text-6xl">my portfolio</h1>
				</header>
				<PortfolioList />
			</section>
		</main>
	);
}
