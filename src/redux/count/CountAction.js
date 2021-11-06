import { ADD_NUM, DEL_NUM } from "./CountType";

export const addNum = () => {
  return {
    type: ADD_NUM,
  };
};

export const delNum = () => {
  return {
    type: DEL_NUM,
  };
};
