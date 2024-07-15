import clsx from "clsx";

import { ActiveLink } from "@/components/ActiveLink";
import { NAV_ITEMS } from "@/constants";

type MobileProps = {
	isOpen: boolean;
	toggle: () => void;
};

export const NavMobile = ({ isOpen, toggle }: MobileProps) => {
	return (
		<aside
			className={clsx(
				"fixed inset-0 flex bg-black bg-opacity-70 bg-clip-padding backdrop-blur-md backdrop-filter transition-all duration-300 ease-in-out",
				isOpen
					? "pointer-events-auto visible opacity-100"
					: "pointer-events-none invisible opacity-0",
			)}
		>
			<div className="absolute inset-0" onClick={toggle} />
			<ul className="relative z-10 flex flex-col justify-center gap-6 overflow-hidden text-4xl">
				{NAV_ITEMS.map((item) => (
					<li key={item.href} className="w-full">
						<ActiveLink
							className="border-b-2 border-primary border-opacity-0 py-1 pl-6 pr-2 transition-all hover:border-opacity-100"
							href={item.href}
							activeClassName="!border-opacity-100"
							onClick={toggle}
						>
							{item.label}
						</ActiveLink>
					</li>
				))}
			</ul>
		</aside>
	);
};
