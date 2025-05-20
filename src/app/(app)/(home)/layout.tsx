import { Footer } from "@/components/layout/footer/Footer";
import { Navbar } from "@/components/layout/navbar/Navbar";

const HomeLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<div className="flex-1 bg-subtle-bg">{children}</div>
			<Footer />
		</div>
	);
};

export default HomeLayout;
