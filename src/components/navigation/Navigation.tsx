"use client";

import { useState } from "react";

import { NavDesktop } from "@/components/navigation/NavDesktop";
import { NavMobile } from "@/components/navigation/NavMobile";
import { NavToggleButton } from "@/components/navigation/NavToggleButton";

export const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen((prev) => !prev);

	return (
		<nav className="container sticky top-0 flex h-20 w-full items-center justify-end px-4">
			<NavMobile isOpen={isOpen} toggle={toggle} />
			<NavDesktop />
			<NavToggleButton isOpen={isOpen} toggle={toggle} />
		</nav>
	);
};
