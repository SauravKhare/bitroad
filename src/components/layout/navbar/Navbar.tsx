"use client";

import Link from "next/link";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { NavbarItem } from "./NavbarItem";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SidebarNav } from "../sidebar-nav/SidebarNav";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["700"],
});

const navbarItems = [
	{ href: "/", children: "Home" },
	{ href: "/about", children: "About" },
	{ href: "/features", children: "Features" },
	{ href: "/pricing", children: "Pricing" },
	{ href: "/contact", children: "Contact" },
];

export const Navbar = () => {
	const pathname = usePathname();
	const [isSidebaarNavOpen, setIsSidebarNavOpen] = useState(false);

	return (
		<nav className="h-20 flex border-b justify-between font-medium bg-white">
			<Link href="/" className="flex pl-6 items-center">
				<span className={cn("text-5xl font-semibold", poppins.className)}>
					bitroad
				</span>
			</Link>
			<div className="items-center gap-4 hidden lg:flex">
				{navbarItems.map((item) => (
					<NavbarItem
						key={item.href}
						href={item.href}
						children={item.children}
						isActive={pathname === item.href}
					/>
				))}
			</div>
			<div className="hidden lg:flex">
				<Button
					asChild
					variant="noShadow"
					className="h-full border-l border-t-0 border-b-0 border-r-0 rounded-none px-12 bg-white hover:bg-pink-400 transition-colors text-lg"
				>
					<Link href="/signin">Login</Link>
				</Button>
				<Button
					asChild
					variant="noShadow"
					className="h-full border-l border-t-0 border-b-0 border-r-0 rounded-none px-12 bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg"
				>
					<Link href="/signup">Start selling</Link>
				</Button>
				<SidebarNav
					items={navbarItems}
					open={isSidebaarNavOpen}
					onOpenChange={setIsSidebarNavOpen}
				/>
			</div>
			<div className="flex lg:hidden items-center justify-center ">
				<Button
					variant="ghost"
					className="size-12 bg-white border-transparent"
					onClick={() => setIsSidebarNavOpen(true)}
				>
					<MenuIcon />
				</Button>
			</div>
		</nav>
	);
};
