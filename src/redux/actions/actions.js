import * as types from "../../constants/ActionTypes";

export const createCV = (cv) => {
  debugger;
  return { type: types.CREATE_CV, cv };
};
export const deleteCV = (id) => ({ type: types.DELETE_CV, id });
export const editCV = (id, cv) => ({ type: types.EDIT_CV, id, cv });
export const printCV = (id) => ({ type: types.PRINT_CV, id });
