import { PortfolioListItem } from "@/components/portfolio/PortfolioListItem";
import { PORTFOLIO_ITEMS } from "@/constants";

export const PortfolioList = () => {
	return (
		<ul className="flex w-full flex-col gap-8">
			{PORTFOLIO_ITEMS.map((item) => (
				<PortfolioListItem key={item.title} projectDetails={item} />
			))}
		</ul>
	);
};
