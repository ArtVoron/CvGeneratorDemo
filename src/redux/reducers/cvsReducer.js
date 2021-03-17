import { v4 as uuidv4 } from "uuid";

import * as ActionsTypes from "../../constants/ActionTypes";

const initialState = [
  {
    id: uuidv4(),
    firstName: "Steve",
    lastName: "Jobs",
    experience: "12",
  },
];

export default function cvsReducer(state = initialState, action) {
  debugger;
  switch (action.type) {
    case ActionsTypes.CREATE_CV:
      debugger;
      return [
        ...state,
        {
          id: uuidv4(),
          firstName: action.cv.firstName,
          lastName: action.cv.lastName,
          experience: action.cv.experience,
        },
      ];

    case ActionsTypes.DELETE_CV:
      return state.filter((cv) => cv.id !== action.id);

    case ActionsTypes.EDIT_CV:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );

    case ActionsTypes.PRINT_CV:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      return state;
  }
}
