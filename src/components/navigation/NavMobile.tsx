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
				"fixed inset-0 flex items-center bg-black bg-opacity-70 bg-clip-padding backdrop-blur-md backdrop-filter transition-all duration-300 ease-in-out",
				isOpen
					? "pointer-events-auto visible opacity-100"
					: "pointer-events-none invisible opacity-0",
			)}
		>
			<div className="absolute inset-0" onClick={toggle} />
			{isOpen && (
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
			)}
		</aside>
	);
};
