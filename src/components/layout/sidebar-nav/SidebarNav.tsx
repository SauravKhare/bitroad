import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

interface SidebarNavItem {
	href: string;
	children: React.ReactNode;
}

interface SidebarNavProps {
	items: SidebarNavItem[];
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export const SidebarNav = ({ items, open, onOpenChange }: SidebarNavProps) => {
	return (
		<Sheet open={open} onOpenChange={onOpenChange}>
			<SheetContent side="left" className="p-o transition-none gap-0">
				<SheetHeader className="p-4 border-b">
					<div className="flex items-center">
						<SheetTitle>Menu</SheetTitle>
					</div>
				</SheetHeader>
				<ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
					{items.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							onClick={() => onOpenChange(false)}
							className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
						>
							{item.children}
						</Link>
					))}
					<div className="border-t">
						<Link
							href="signin"
							onClick={() => onOpenChange(false)}
							className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
						>
							Login
						</Link>
						<Link
							href="signup"
							onClick={() => onOpenChange(false)}
							className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
						>
							Start selling
						</Link>
					</div>
				</ScrollArea>
			</SheetContent>
		</Sheet>
	);
};
