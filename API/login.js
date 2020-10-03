import { doGet, doPost } from "./request.js"
export const login = (data) => {
    return doPost("/user/login", data)
}

export const signin = (data) => {
    return doPost("/signin", data)
}