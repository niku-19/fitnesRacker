import { useState } from "react";
import { Layout, Loader } from "../../components";
import { FoodForm } from "./foodForm";
import { useDispatch, useSelector } from "react-redux";
import { removeFood } from "../../redux/action";

export const Foods = () => {
	const [toggle, setToggle] = useState(false);

	const loading = useSelector((state) => state.loading);
	const foods = useSelector((state) => state.foodData);
	const dispatch = useDispatch();

	console.log(foods)

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
				{toggle && <FoodForm setToggle={setToggle} />}
				{loading ? (
					<Loader />
				) : (
					<div className="flex flex-wrap gap-4 mt-4">
						{foods.length < 1 ? (
							<p className="flex w-full justify-center items-center text-2xl text-[#777]">
								There Is no Foods
							</p>
						) : (
							<table className="w-full  flex flex-col items-center bg-slate-50">
								<tr className="flex justify-between w-full border-b px-3 items-center">
									<th className="w-[25%] flex ">Food</th>
									<th className="w-[15%]">Protein (in grams)</th>
									<th className="w-[15%]">Calories(in cal)</th>
									<th className="w-[15%]">Carbohydrates (in grams)</th>
									<th className="w-[15%]">Fat (in grams)</th>

									<th className="w-[15%]">Action</th>
								</tr>

								{foods?.map((item) => (
									<tr
										key={item._id}
										className="flex justify-between w-full items-center px-3 border-b h-8">
										<td className="w-[25%] items-center flex">
											{item.foodName}
										</td>
										<td className="w-[15%] items-center flex justify-center">
											{item.protein}
										</td>
										<td className="w-[15%] items-center flex justify-center">
											{item.calories}
										</td>
										<td className="w-[15%] items-center flex justify-center">
											{item.carbohydrate}
										</td>
										<td className="w-[15%] items-center flex justify-center">
											{item.fat}
										</td>
										<td className="w-[15%] items-center flex justify-center">
											<button
												className="text-red-500"
												onClick={() => dispatch(removeFood(item._id))}>
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
