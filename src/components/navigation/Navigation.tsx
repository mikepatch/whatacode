"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

import Link from "next/link";
import { NavDesktop } from "@/components/navigation/NavDesktop";
import { NavMobile } from "@/components/navigation/NavMobile";
import { NavToggleButton } from "@/components/navigation/NavToggleButton";

export const Navigation = () => {
	const [scrolled, setScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen((prev) => !prev);

	const handleScroll = () => {
		if (window.scrollY > 50) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className="fixed top-0 z-50 flex h-20 w-full items-center px-4">
			<div
				className={clsx(
					"glassmorphism absolute inset-0 -z-10 -mt-px opacity-0 shadow-lg transition-opacity",
					{
						"opacity-100": scrolled,
					},
				)}
			/>
			<nav className="container mx-auto flex items-center justify-between">
				<Link href="/" className="flex gap-0.5 transition-all hover:gap-1">
					<p className="text-2xl font-bold">m</p>
					<div className="aspect-square h-2 self-center rounded-full bg-primary" />
					<p className="text-2xl font-bold">ł</p>
				</Link>
				<NavMobile isOpen={isOpen} toggle={toggle} />
				<NavDesktop />
				<NavToggleButton isOpen={isOpen} toggle={toggle} />
			</nav>
		</header>
	);
};
