"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

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
		<nav className="sticky top-0 z-50 flex h-20 w-full items-center justify-end px-4">
			<div
				className={clsx(
					"absolute inset-0 -mt-px bg-gradient-background opacity-0 shadow-lg transition-opacity",
					{
						"opacity-100": scrolled,
					},
				)}
			/>
			<NavMobile isOpen={isOpen} toggle={toggle} />
			<NavDesktop />
			<NavToggleButton isOpen={isOpen} toggle={toggle} />
		</nav>
	);
};
