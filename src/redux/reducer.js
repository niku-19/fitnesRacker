import {
	ADD_FOOD,
	ADD_GOALS,
	ERROR,
	EXERCISE_ADDED,
	EXERCISE_LOAD_SUCCESS,
	LOADING,
	LOAD_FOOD,
	LOAD_GOALS,
	REMOVE_EXERCISE,
	REMOVE_FOOD,
	REMOVE_GOAL,
} from "../components";

const initailState = {
	exerciseData: [],
	foodData: [],
	goalData: [],
	loading: false,
	error: false,
};

export const habitReducer = (state = initailState, { type, payload }) => {
	switch (type) {
		case LOADING: {
			return {
				...state,
				loading: true,
				error: false,
			};
		}
		case EXERCISE_LOAD_SUCCESS: {
			return {
				...state,
				loading: false,
				error: false,
				exerciseData: payload,
			};
		}
		case EXERCISE_ADDED: {
			return {
				...state,
				loading: false,
				error: false,
				exerciseData: [...state.exerciseData, payload],
			};
		}
		case REMOVE_EXERCISE: {
			return {
				...state,
				loading: false,
				error: false,
				exerciseData: state.exerciseData.filter((elms) => elms._id !== payload),
			};
		}
		case LOAD_FOOD: {
			return {
				...state,
				loading: false,
				error: false,
				foodData: payload,
			};
		}
		case ADD_FOOD: {
			return {
				...state,
				loading: false,
				error: false,
				foodData: [...state.foodData, payload],
			};
		}
		case REMOVE_FOOD: {
			return {
				...state,
				loading: false,
				error: false,
				foodData: state.foodData.filter((elms) => elms._id !== payload),
			};
		}
		case LOAD_GOALS: {
			return {
				...state,
				loading: false,
				error: false,
				goalData: payload,
			};
		}
		case ADD_GOALS: {
			return {
				...state,
				loading: false,
				error: false,
				goalData: [...state.goalData, payload],
			};
		}
		case REMOVE_GOAL: {
			return {
				...state,
				loading: false,
				error: false,
				goalData: state.goalData.filter((elms) => elms._id !== payload),
			};
		}
		case ERROR: {
			return {
				...state,
				loading: false,
				error: true,
			};
		}
		default: {
			return state;
		}
	}
};
