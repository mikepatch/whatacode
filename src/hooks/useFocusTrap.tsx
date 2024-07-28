import { useEffect, useRef, type RefObject } from "react";

export const useFocusTrap = (
	containerRef: RefObject<HTMLElement>,
	isOpen: boolean,
	onClose: () => void,
) => {
	const previouslyFocusedElement = useRef<HTMLElement | null>(null);

	useEffect(() => {
		if (isOpen && containerRef.current) {
			previouslyFocusedElement.current = document.activeElement as HTMLElement;

			const focusableElements = Array.from(
				containerRef.current.querySelectorAll<HTMLElement>(
					'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])',
				),
			);

			if (focusableElements.length > 0) {
				focusableElements[0]?.focus();
			}

			const handleKeyDown = (event: KeyboardEvent) => {
				if (event.key === "Tab") {
					const { activeElement } = document;
					const firstElement = focusableElements[0];
					const lastElement = focusableElements[focusableElements.length - 1];

					if (event.shiftKey && activeElement === firstElement) {
						event.preventDefault();
						lastElement?.focus();
					} else if (!event.shiftKey && activeElement === lastElement) {
						event.preventDefault();
						firstElement?.focus();
					}
				} else if (event.key === "Escape") {
					onClose();
				}
			};

			document.addEventListener("keydown", handleKeyDown);

			return () => {
				document.removeEventListener("keydown", handleKeyDown);
				previouslyFocusedElement.current?.focus();
			};
		}
	}, [isOpen, onClose, containerRef]);

	return {};
};
