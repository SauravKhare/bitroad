import { Categories } from "../categories/Categories";
import { SearchInput } from "../search-input/SearchInput";

interface SearchFiltersProps {
	data: any;
}

export const SearchFilters = ({ data }: SearchFiltersProps) => {
	return (
		<div className="px-4 lg:px-12 py-8 border-b flex flex-col gap-4 w-full">
			<SearchInput />
			<Categories data={data} />
		</div>
	);
};
