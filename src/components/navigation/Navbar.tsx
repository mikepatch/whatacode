import { ActiveLink } from "@/components/ActiveLink";
import { NAV_ITEMS } from "@/constants";

type NavbarProps = {
	toggle: () => void;
};

export const Navbar = ({ toggle }: NavbarProps) => {
	return (
		<nav className="sticky top-0 h-20 w-full">
			<div className="container mx-auto flex h-full items-center justify-end px-4">
				<button className="block md:hidden" onClick={toggle} aria-label="toggle navigation">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-8 w-8"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M4 6h16M4 12h16m-7 6h7"
						/>
					</svg>
				</button>
				<ul className="hidden text-lg md:flex">
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
			</div>
		</nav>
	);
};
