import { useState } from "react";
import { Input } from "../../components";
import { useDispatch } from "react-redux";
import { addExercise } from "../../redux/action";

export const ExerciseForm = ({ setToggle }) => {
	const dispatch = useDispatch();
	const [newExercise, setNewExercise] = useState({
		name: "",
		duration: 0,
		typeValue: 0,
		calories: 0,
	});
	return (
		<>
		<div className="overlay" onClick={() => setToggle(false)} > </div>
		<div className="flex justify-center items-center w-full fixed top-0 left-0 right-0 bottom-0 bg-[#ffffff17] z-10">
			<form
				onSubmit={(e) => e.preventDefault()}
				className="shadow-md flex flex-col p-4 relative gap-4 rounded-lg w-80 bg-slate-50 z-50">
				<h1 className="text-xl flex justify-center items-center text-[#555]">
					Add New Exercise
				</h1>
				<Input
					label={"Exercise Name"}
					placeholder={"Exercise Name"}
					type={"text"}
					onChange={(e) =>
						setNewExercise({ ...newExercise, name: e.target.value })
					}
					value={newExercise.name}
				/>
				<Input
					label={"Duration (in Minutes)"}
					placeholder={"Duration in minutes"}
					type={"number"}
					onChange={(e) =>
						setNewExercise({ ...newExercise, duration: e.target.value })
					}
					value={newExercise.duration}
				/>
				<select
					className="border focuse:outline-none text-[#666]"
					onChange={(e) =>
						setNewExercise({
							...newExercise,
							calories: parseInt(e.target.value * newExercise.duration),
						})
					}>
					<option value="0"> Excercise type</option>
					<option value="9.0">Endurance Exercise</option>
					<option value="6.0">Strength training</option>
					<option value="8.0">Balance Exercise</option>
					<option value="2.7">Flexibility Exercise</option>
				</select>

				<Input
					label={"Calories Burned"}
					placeholder={"Calories Burn"}
					type={"number"}
					readOnly
					value={parseInt(newExercise.calories)}
				/>

				<div className="flex justify-between mt-4 ">
					{" "}
					<button
						className="text-green-500"
						onClick={() => {
							dispatch(addExercise(newExercise));
							setToggle(false);
						}}>
						Add
					</button>
					<button className="text-red-400" onClick={() => setToggle(false)}>
						Discard
					</button>
				</div>
			</form>
		</div>
		</>
	);
};
