import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
} from "./userTypes";

const initialState = {
  loading: false,
  username: "",
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_SUCCESS:
      return { loading: false, username: action.payload, error: "" };
    case FETCH_USER_FAILURE:
      return { loading: false, username: "", error: action.payload };
    default:
      return state;
  }
};

export default reducer;
