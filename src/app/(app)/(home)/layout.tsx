import configPromise from "@payload-config";
import { getPayload } from "payload";
import { Category } from "@/payload-types";

import { Footer } from "@/components/layout/footer/Footer";
import { Navbar } from "@/components/layout/navbar/Navbar";
import { SearchFilters } from "@/components/layout/search-filters/SearchFilters";

const HomeLayout = async ({
	children,
}: Readonly<{ children: React.ReactNode }>) => {
	const payload = await getPayload({
		config: configPromise,
	});

	const data = await payload.find({
		collection: "categories",
		depth: 1,
		pagination: false,
		where: {
			parent: {
				exists: false,
			},
		},
	});

	const categories = data.docs.map((doc) => ({
		...doc,
		subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
			...(doc as Category),
		})),
	}));

	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<SearchFilters data={categories} />
			<div className="flex-1 bg-subtle-bg">{children}</div>
			<Footer />
		</div>
	);
};

export default HomeLayout;
