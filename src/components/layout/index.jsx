import { Header } from "../navbar";
import { Sidebar } from "../sidebar";

export const Layout = ({ children }) => {
	return (
		<div className="flex flex-col w-full h-screen">
			<Header />
			<div className="flex w-full h-screen">
				<section className="flex flex-col w-[20%] bg-[#272C48]">
					<Sidebar />
				</section>
				<section className="w-[80%]">{children}</section>
			</div>
		</div>
	);
};
