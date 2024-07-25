import { ActiveLink } from "@/components/ActiveLink";
import { NAV_ITEMS } from "@/constants";

export const NavDesktop = () => {
	return (
		<ul className="container relative z-50 mx-auto hidden justify-end text-lg sm:flex">
			{NAV_ITEMS.map((item) => (
				<li key={item.href}>
					<ActiveLink
						className="border-b-2 border-primary border-opacity-30 px-2 py-2 transition-all hover:border-opacity-100"
						href={item.href}
						activeClassName="!border-opacity-100"
					>
						{item.label}
					</ActiveLink>
				</li>
			))}
		</ul>
	);
};
