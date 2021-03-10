import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { storage } from "redux-persist/lib/storage";

// import someReducer from './reducers'

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["someName"],
};

const rootReducer = combineReducers({
  // someName: someReducer,
});

export default persistReducer(persistConfig, rootReducer);
