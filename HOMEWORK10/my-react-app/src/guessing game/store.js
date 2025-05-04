import gameReducer from "./reducers/gameReducer";
import { createStore} from "redux"

export const store = createStore(gameReducer);