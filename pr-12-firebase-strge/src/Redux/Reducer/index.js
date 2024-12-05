import { combineReducers } from "redux";
import crudReducer from './Todoredcer'
const rootReducer = combineReducers({
    crud :crudReducer
})

export default rootReducer