import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
	{ name: "Home", href: "#hero" },
	{ name: "About", href: "#about" },
	{ name: "Projects", href: "#projects" },
	{ name: "Contact", href: "#contact" },
];

export const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.screenY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<nav
			className={cn(
				"fixed top-0 left-0 w-full z-[999] transition-all duration-300 bg-background/95 backdrop-blur-md shadow-xs",
				isScrolled ? "py-3" : "py-5"
			)}
		>
			<div className="flex items-center justify-between px-4 sm:px-8 max-w-full w-full h-16 mx-auto">
				<a
					className="text-base sm:text-xl font-bold text-primary flex items-center whitespace-nowrap max-w-[70vw] leading-tight"
					href="#hero"
				>
					<span className="relative z-10">
						<span className="text-glow text-foreground"> Tushar </span>{" "}
						Portfolio
					</span>
				</a>

				{/* desktop nav */}
				<div className="hidden md:flex space-x-8">
					{navItems.map((item, key) => (
						<a
							key={key}
							href={item.href}
							className="text-foreground/80 hover:text-primary transition-colors duration-300"
						>
							{item.name}
						</a>
					))}
				</div>

				{/* mobile nav */}
				<div className="md:hidden flex items-center">
					<button
						onClick={() => setIsMenuOpen((prev) => !prev)}
						className="p-2 text-foreground z-50"
						aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
					>
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
					</button>
					{isMenuOpen && (
						<div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-md flex flex-row items-center justify-center space-x-6 py-4 z-[999] border-t border-border">
							{navItems.map((item, key) => (
								<a
									key={key}
									href={item.href}
									className="text-foreground/80 hover:text-primary transition-colors duration-300 text-base font-medium"
									onClick={() => setIsMenuOpen(false)}
								>
									{item.name}
								</a>
							))}
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};
