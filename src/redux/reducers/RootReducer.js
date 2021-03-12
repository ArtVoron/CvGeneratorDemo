import AsyncStorage from "@react-native-community/async-storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import cvsReducer from "./cvsReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  // whitelist: ["cv"],
};

const rootReducer = combineReducers({
  cvs: cvsReducer,
});

export default persistReducer(persistConfig, rootReducer);
