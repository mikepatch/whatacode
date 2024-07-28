import clsx from "clsx";

import { useRef } from "react";
import { ActiveLink } from "@/components/ActiveLink";
import { NAV_ITEMS } from "@/constants";
import { useFocusTrap } from "@/hooks/useFocusTrap";

type MobileProps = {
	isOpen: boolean;
	toggle: () => void;
};

export const NavMobile = ({ isOpen, toggle }: MobileProps) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useFocusTrap(containerRef, isOpen, toggle);

	return (
		<aside
			ref={containerRef}
			className={clsx(
				"glassmorphism fixed inset-0 flex items-center bg-black bg-opacity-70 transition-all duration-300 ease-in-out",
				isOpen
					? "pointer-events-auto visible opacity-100"
					: "pointer-events-none invisible opacity-0",
			)}
			aria-hidden={!isOpen}
		>
			<div className="absolute inset-0" onClick={toggle} />
			{isOpen && (
				<nav>
					<ul className="relative z-10 flex flex-col gap-8 text-5xl">
						{NAV_ITEMS.map((item, index) => (
							<li
								key={item.href}
								className="w-full animate-fade-up pl-6"
								style={{ animationDelay: `${index * 200}ms` }}
							>
								<ActiveLink
									className="border-l-8 border-primary border-opacity-0 pl-2 transition-all  hover:border-opacity-100"
									href={item.href}
									activeClassName="!border-opacity-100"
									onClick={toggle}
								>
									{item.label}
								</ActiveLink>
							</li>
						))}
					</ul>
				</nav>
			)}
		</aside>
	);
};
