import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavbarItemProps {
	href: string;
	children: React.ReactNode;
	isActive?: boolean;
}

export const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
	return (
		<Button
			asChild
			variant="noShadow"
			className={cn(
				"bg-transparent hover:bg-transparent rounded-full hover:border-primary border-transparent px-3.5 text-lg",
				isActive && "bg-black text-white hover:bg-black hover:text-white"
			)}
		>
			<Link href={href}>{children}</Link>
		</Button>
	);
};
