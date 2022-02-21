import {createStore,} from "redux"
import reducer from "./reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';
import { devToolsEnhancer } from 'redux-devtools-extension';

const initialState = {
    users:[
        {
            id:0,
            name:"Pablo Cesar",
            lastName:"Aimar",
            email:"payasito10@gmail.com",
            password:"1234"
        },
        {
            id:1,
            name:"Ariel Arnaldo",
            lastName:"Ortega",
            email:"burrito10@gmail.com",
            password:"1234"
        }

    ]
}

export const store = createStore(
    reducer, initialState, devToolsEnhancer()
)