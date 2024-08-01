type PageContainerProps = {
	title: string;
	children: React.ReactNode;
};

export const PageContainer = ({ title, children }: PageContainerProps) => {
	return (
		<main className="container mx-auto flex max-w-5xl flex-col gap-8 px-4 py-40">
			<header className="flex flex-col gap-2">
				<h1 className="border-l-8 border-primary pl-2 text-5xl font-bold sm:text-6xl">{title}</h1>
			</header>
			{children}
		</main>
	);
};
