import { ActiveLink } from "@/components/ActiveLink";
import { NAV_ITEMS } from "@/constants";

export const Navigation = () => {
	return (
		<nav className="fixed right-12 top-4">
			<ul className="flex px-8 py-4 text-lg">
				{NAV_ITEMS.map((item) => (
					<li key={item.href}>
						<ActiveLink
							className="border-b-2 border-primary border-opacity-30 px-2 py-1 transition-all hover:border-opacity-100"
							href={item.href}
							activeClassName="!border-opacity-100"
						>
							{item.label}
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
