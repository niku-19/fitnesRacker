import { NavLink } from "react-router-dom";

const navItems = [
	{
		id: 1,
		name: "Dashboard",
		route: "/",
	},
	{
		id: 2,
		name: "Exercise Tracking",
		route: "/exercises",
	},
	{
		id: 3,
		name: "Food Tracking:",
		route: "/foods",
	},
	{
		id: 4,
		name: "Goal Tracking",
		route: "/goals",
	},
];

export const Sidebar = () => {
	const ActiveStyle = ({ isActive }) => ({
		background: isActive ? "#FD6B03" : "",
	});
	return (
		<div className="flex flex-col justify-center items-center pt-4 w-full">
			<ul className="w-full font-bold  text-xl text-[#fff] ">
				{navItems.map((item) => (
					<li
						className="w-full h-10 justify-center items-center flex"
						key={item.id}>
						<NavLink
							className="w-full flex h-full  items-center p-4 pl-10 hover:bg-[#f0f0f0c3] ease-in-out"
							style={ActiveStyle}
							to={item.route}>
							{item.name}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};
