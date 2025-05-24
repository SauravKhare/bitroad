"use client";

import { useDropdownPosition } from "@/app/hooks/use-dropdown-position/useDropdownPosition";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Category } from "@/payload-types";
import { useRef, useState } from "react";
import { SubcategoryMenu } from "../subcategory-menu/SubcategoryMenu";

interface CategoryDropdownProps {
	category: Category;
	isActive?: boolean;
	isHovered?: boolean;
}

export const CategoryDropdown = ({
	category,
	isActive,
	isHovered,
}: CategoryDropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const { getDropdownnPosition } = useDropdownPosition(ref);

	const onMouseEnter = () => {
		setIsOpen(true);
	};

	const onnMoveLeave = () => {
		setIsOpen(false);
	};

	const position = getDropdownnPosition();

	return (
		<div ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onnMoveLeave}>
			<div className="relative">
				<Button
					className={cn(
						"h-11 px-4 rounded-full",
						isActive && !isHovered && "bg-white border-primary"
					)}
				>
					{category.name}
				</Button>
				{/* @ts-ignore */}
				{category.subcategories && category.subcategories.length > 0 && (
					<div
						className={cn(
							"opacity-0 absolute -bottom-3 w-0 h-0  border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent border-b-black left-1/2 -translate-x-1/2",
							isOpen && "opacity-100"
						)}
					/>
				)}
			</div>
			<SubcategoryMenu
				category={category}
				isOpen={isOpen}
				position={position}
			/>
		</div>
	);
};
