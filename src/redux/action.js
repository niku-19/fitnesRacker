import axios from "axios";
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

const baseURL =
  process.env.REACT_APP_BASE_URL ||
  "https://habit-tracker-backend-kappa.vercel.app/v1/api";

export const fetchData = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.get(`${baseURL}/exercises/exercises`);

    if (response.data.success) {
      dispatch({ type: EXERCISE_LOAD_SUCCESS, payload: response.data.data });
    }
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

export const addExercise = (newExercise) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });

    const response = await axios.post(`${baseURL}/exercises/add-exercise`, {
      ...newExercise,
    });
    if (response.data.success) {
      dispatch({ type: EXERCISE_ADDED, payload: response.data.data });
    }
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

export const removeExercise = (exerciseId) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.delete(`${baseURL}/exercises/${exerciseId}`);
    if (response.status === 204) {
      dispatch({ type: REMOVE_EXERCISE, payload: exerciseId });
    }
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

// food actions

export const addFood = (newFood) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.post(`${baseURL}/foods/add-food`, {
      ...newFood,
    });
    dispatch({ type: ADD_FOOD, payload: response.data.data });
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

export const fetchGoals = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.get(`${baseURL}/goals`);

    if (response.data.success) {
      dispatch({ type: LOAD_GOALS, payload: response.data.data });
    }
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

export const removeGoals = (goalId) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.delete(`${baseURL}/goals/${goalId}`);
    if (response.status === 204) {
      dispatch({ type: REMOVE_GOAL, payload: goalId });
    }
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

// goals
export const addGoal = (newGoal) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.post(`${baseURL}/goals/add-goal`, {
      ...newGoal,
    });
    dispatch({ type: ADD_GOALS, payload: response.data.data });
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

export const fetchFood = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.get(`${baseURL}/foods`);

    if (response.data.success) {
      dispatch({ type: LOAD_FOOD, payload: response.data.data });
    }
  } catch (error) {
    dispatch({ type: ERROR });
  }
};

export const removeFood = (foodId) => async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.delete(`${baseURL}/foods/${foodId}`);
    if (response.status === 204) {
      dispatch({ type: REMOVE_FOOD, payload: foodId });
    }
  } catch (error) {
    dispatch({ type: ERROR });
  }
};
