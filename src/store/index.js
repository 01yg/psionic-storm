import { combineReducers } from "redux";
import counter from "./counter";
import counter2 from "./counter2";
import stock from "./stock";
import stocks from "./stocks";

const rootReducer = combineReducers({
  counter,
  counter2,
  stock,
  stocks,
});

export default rootReducer;