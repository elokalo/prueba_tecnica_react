import {
  SHOW_MODAL,
  CLOSE_MODAL
} from "./modalTypes";

const initialState = {
  show: false,
  user: {},
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return {
        show: true,
        user: action.payload
      };
    case CLOSE_MODAL:
      return {
        show: false,
        user: {},
      };
    default:
      return state;
  }
};

export default modalReducer;
