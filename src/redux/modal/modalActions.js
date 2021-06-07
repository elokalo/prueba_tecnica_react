import {
  SHOW_MODAL,
  CLOSE_MODAL
} from "./modalTypes";

export const showModal = (user) => {
  return {
    type: SHOW_MODAL,
    payload: user,
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
