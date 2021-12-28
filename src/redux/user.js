import {} from "../services/api";
import userServices from "../services/userServices";
import { numberOfUserPerPage } from "../utils/config";

// Constants
const initialData = {
  numberUsers: 0,
  numberPages: 0,
};

const SET_NUMBER_USERS = "SET_NUMBER_USERS";
const SET_NUMBER_PAGES = "SET_NUMBER_PAGES";

// Reducer
export default function userReducer(state = initialData, action) {
  switch (action.type) {
    case SET_NUMBER_USERS:
      return { ...state, numberUsers: action.payload };
    case SET_NUMBER_PAGES:
      return { ...state, numberPages: action.payload };
    default:
      return state;
  }
}

// Actions
export const getNumberUsers =
  (page = 0, limit = 0) =>
  async (dispatch, getState) => {
    try {
      const response = await userServices.getListOfUsers(page, limit);
      dispatch({
        type: SET_NUMBER_USERS,
        payload: response.data.length,
      });
      dispatch({
        type: SET_NUMBER_PAGES,
        payload: Math.ceil(response.data.length / numberOfUserPerPage),
      });
    } catch (error) {
      console.error(error);
    }
  };
