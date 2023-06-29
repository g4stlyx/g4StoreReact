import {applyMiddleware, createStore} from "redux" // react-redux ile değiştir çalışmazsa
import rootReducer from "./index"
import thunk from "redux-thunk"


export default function configureStore(){
    return createStore(rootReducer,applyMiddleware(thunk))

}