type MenuToggleProps = {
	isOpen: boolean;
	toggle: () => void;
};

export const NavToggleButton = ({ isOpen, toggle }: MenuToggleProps) => {
	const genericHamburgerLine = `h-0.5 w-7 my-1 rounded-full bg-white transition ease transform duration-300`;

	return (
		<button
			onClick={toggle}
			className="group relative z-[100] flex h-12 w-12 cursor-pointer flex-col items-center justify-center sm:hidden"
		>
			<div className={`${genericHamburgerLine} ${isOpen && "translate-y-2 rotate-45"}`} />
			<div className={`${genericHamburgerLine} ${isOpen && "opacity-0"}`} />
			<div className={`${genericHamburgerLine} ${isOpen && "-translate-y-3 -rotate-45"}`} />
		</button>
	);
};
