import { ADD_USER, DELETE_USER, LOGIN_USER } from "./types"


export const addUserAction = (user) => ({
    type: ADD_USER,
    payload: user
})

export const deleteUserAction = userId => ({
    type: DELETE_USER,
    payload: userId
})

export const loginUser = () => ({
    type: LOGIN_USER
})