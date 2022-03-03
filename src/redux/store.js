import {createStore,} from "redux"
import reducer from "./reducers/index";
// import { composeWithDevTools } from 'redux-devtools-extension';
import { devToolsEnhancer } from 'redux-devtools-extension';

const initialState = {
    users:[],
    logged:false
}

export const store = createStore(
    reducer, initialState, devToolsEnhancer()
)