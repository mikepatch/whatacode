import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
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
				className={`${poppins.className} bg-gradient-background bg-black text-white antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
