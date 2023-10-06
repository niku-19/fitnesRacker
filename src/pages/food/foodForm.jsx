import { useState } from "react";
import { Input } from "../../components";
import { useDispatch } from "react-redux";
import { addFood } from "../../redux/action";

export const FoodForm = ({ setToggle }) => {
  const dispatch = useDispatch();

  const [newFood, setNewFood] = useState({
    foodName: "",
    calories: 0,
    protien: 0,
    carbohydrate: 0,
    fat: 0,
  });
  return (
    <>
      <div className="overlay" onClick={() => setToggle(false)}></div>
      <div className="flex justify-center items-center w-full fixed top-0 left-0 right-0 bottom-0 bg-[#ffffff17] z-10">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="shadow-md flex flex-col p-4 relative gap-4 rounded-lg w-80 bg-slate-50 z-50"
        >
          <h1 className="text-xl flex justify-center items-center text-[#555]">
            Add New Exercise
          </h1>
          <Input
            label={"Food Name"}
            placeholder={"Food Name"}
            type={"text"}
            onChange={(e) =>
              setNewFood({ ...newFood, foodName: e.target.value })
            }
            value={newFood.foodName}
          />
          <Input
            label={"Calories"}
            placeholder={"Calories"}
            type={"number"}
            onChange={(e) =>
              setNewFood({ ...newFood, calories: e.target.value })
            }
            value={newFood.calories}
          />

          <Input
            label={"Protein"}
            placeholder={"Protein"}
            type={"number"}
            value={newFood.protien}
            onChange={(e) =>
              setNewFood({ ...newFood, protien: e.target.value })
            }
          />
          <Input
            label={"Carbohydrates"}
            placeholder={"Carbohydrates"}
            type={"number"}
            value={newFood.carbohydrate}
            onChange={(e) =>
              setNewFood({ ...newFood, carbohydrate: e.target.value })
            }
          />
          <Input
            label={"Fats"}
            placeholder={"Fats"}
            type={"number"}
            onChange={(e) => setNewFood({ ...newFood, fat: e.target.value })}
            value={newFood.fat}
          />

          <div className="flex justify-between mt-4 ">
            {" "}
            <button
              className="text-green-500"
              onClick={() => {
                dispatch(addFood(newFood));
                setToggle(false);
              }}
            >
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
