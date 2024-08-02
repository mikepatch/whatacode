import { Footer } from "@/components/footer/Footer";

type LayoutWithFooterProps = {
	children: React.ReactNode;
};

export default function LayoutWithFooter({ children }: LayoutWithFooterProps) {
	return (
		<div className="flex min-h-screen flex-col justify-between">
			{children}
			<Footer />
		</div>
	);
}
