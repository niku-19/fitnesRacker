import { useState } from "react";
import { Layout, Loader } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { removeGoals } from "../../redux/action";
import { GoalForm } from "./goalForm";
import moment from "moment/moment";

export const Goals = () => {
	const [toggle, setToggle] = useState(false);
	const goals = useSelector((state) => state.goalData);
	const loading = useSelector((state) => state.loading);
	const dispatch = useDispatch();

	return (
		<Layout>
			<div className="flex flex-col p-4 ">
				<div className="flex w-full justify-between">
					<h1 className="text-2xl text-[#777] font-semibold">Foods</h1>
					<button
						className="p-2 bg-[#FD6B03] cursor-pointer text-white rounded-lg"
						onClick={() => setToggle(true)}>
						Add New Food
					</button>
				</div>
				{toggle && <GoalForm setToggle={setToggle} />}
				{loading ? (
					<Loader />
				) : (
					<div className="flex flex-wrap gap-4 mt-4">
						{goals.length < 1 ? (
							<p className="flex w-full justify-center items-center text-2xl text-[#777]">
								There Is no goals
							</p>
						) : (
							<table className="w-full  flex flex-col items-center bg-slate-50">
								<tr className="flex justify-between w-full border-b px-3 items-center">
									<th className="w-[25%] flex ">Goals</th>
									<th className="w-[15%]">Description</th>
									<th className="w-[15%]">Taget Date</th>
									<th className="w-[15%]">Target Calories</th>
									<th className="w-[15%]">Status</th>

									<th className="w-[15%]">Action</th>
								</tr>

								{goals?.map((item) => (
									<tr
										key={item._id}
										className="flex justify-between w-full items-center px-3 border-b h-8">
										<td className="w-[25%] items-center flex">
											{item.goalName}
										</td>
										<td className="w-[15%] items-center flex justify-center">
											{item.description}
										</td>
										<td className="w-[15%] items-center flex justify-center">
											{moment(item.targetDate).format("DD/MM/YYYY")}
										</td>
										<td className="w-[15%] items-center flex justify-center">
											{item.targetCalories}
										</td>
										<td className="w-[15%] items-center flex justify-center">
											{item.status}
										</td>
										<td className="w-[15%] items-center flex justify-center">
											<button
												className="text-red-500"
												onClick={() => dispatch(removeGoals(item._id))}>
												Remove
											</button>
										</td>
									</tr>
								))}
							</table>
						)}
					</div>
				)}
			</div>
		</Layout>
	);
};
