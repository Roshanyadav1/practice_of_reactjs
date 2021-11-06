import { combineReducers } from "redux";
import cakeReducer from "./cake/CakeReducer";
import countReducer from "./count/CountReducer";
import { iceCreamReducer } from "./iceCream/IceCreamReducer";
import { userReducer } from "./user/UserReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  count: countReducer,
  users: userReducer
});

export default rootReducer;
