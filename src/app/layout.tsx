import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Navigation } from "@/components/navigation/Navigation";

const poppinsFont = Poppins({
	subsets: ["latin"],
	weight: "400",
});

export const metadata: Metadata = {
	title: "what a code!?",
	description: "whatacode!? - Michał Łata's personal website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${poppinsFont.className} overflow-x-hidden bg-gradient-background tracking-wide text-white antialiased selection:bg-primary-dark`}
			>
				<div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb14_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
				<Navigation />
				{children}
			</body>
		</html>
	);
}
