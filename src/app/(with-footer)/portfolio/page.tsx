import { PageContainer } from "@/components/PageContainer";
import { PortfolioList } from "@/components/portfolio/PortfolioList";

export default function PortfolioPage() {
	return (
		<PageContainer title="my portfolio">
			<PortfolioList />
		</PageContainer>
	);
}
