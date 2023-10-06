import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../../components";
import { fetchData, fetchFood, fetchGoals } from "../../redux/action";
import { useEffect } from "react";

export const Home = () => {
	const dispatch = useDispatch();

	const exerciseData = useSelector((store) => store.exerciseData);
	const foodData = useSelector((store) => store.foodData);
	const goalData = useSelector((store) => store.goalData);

	const totalCalConsumed = foodData?.reduce(
		(acc, curr) => acc + parseFloat(curr.calories),
		0
	);
	const totalCalBurned = exerciseData?.reduce(
		(acc, curr) => acc + parseFloat(curr.caloriesBurned),
		0
	);
	const targetCal = goalData?.reduce(
		(acc, curr) => acc + parseFloat(curr.targetCalories),
		0
	);

	useEffect(() => {
		dispatch(fetchGoals());
		dispatch(fetchData());
		dispatch(fetchFood());
	}, []);
	return (
		<Layout>
			<div className="flex flex-col w-full p-4 ">
				<h1 className="text-2xl font-semibold text-[#777]">Dashboard</h1>
				<div className="flex flex-wrap w-full gap-4 p-4 justify-center items-center">
					<div className="flex flex-col w-[15rem] h-[8rem] border rounded-lg shadow-lg justify-center items-center">
						<h2>Total Calories Burned</h2>
						<h2>{totalCalBurned}</h2>
					</div>
					<div className="flex flex-col w-[15rem] h-[8rem] border rounded-lg shadow-lg justify-center items-center">
						<h2>Total Calories Consumned</h2>
						<h2>{totalCalConsumed}</h2>
					</div>
					<div className="flex flex-col w-[15rem] h-[8rem] border rounded-lg shadow-lg justify-center items-center">
						<h2>Total Calories Goal</h2>
						<h2>{targetCal}</h2>
					</div>
					<div className="flex flex-col w-[15rem] h-[8rem] border rounded-lg shadow-lg justify-center items-center">
						<h2>Remaining Calories to Goal</h2>
						<h2>{totalCalConsumed - totalCalBurned}</h2>
					</div>
				</div>
			</div>
		</Layout>
	);
};
