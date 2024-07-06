"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type Route } from "next";
import clsx from "clsx";

type ActiveLinkProps = {
	children: React.ReactNode;
	href: Route;
	className?: string;
	disabled?: boolean;
	activeClassName?: string;
	target?: "_self" | "_blank";
	ariaLabel?: string;
	onClick?: () => void;
};

export const ActiveLink = ({
	children,
	href,
	className = "",
	disabled = false,
	activeClassName = "",
	target = "_self",
	ariaLabel = "",
	onClick,
}: ActiveLinkProps) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			aria-current={isActive ? "page" : undefined}
			href={`${href}` as Route}
			className={clsx(className, { [activeClassName]: isActive })}
			target={target}
			aria-label={ariaLabel}
			aria-disabled={disabled}
			onClick={onClick}
		>
			{children}
		</Link>
	);
};
