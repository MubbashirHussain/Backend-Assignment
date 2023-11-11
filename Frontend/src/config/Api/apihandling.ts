import axios from "axios"
const ApiHandle = axios.create({
    baseURL: "http://localhost:8080"
})


let Get = (endPoint: string, id?: string | number) => ApiHandle.get(`${endPoint}/${id ? id : ""}`)
let Post = (endPoint: string, Obj: {}) => ApiHandle.post(`${endPoint}`, Obj)
let Put = (endPoint: string, id: string | number | undefined, Obj: {}) => ApiHandle.put(`${endPoint}/${id}`, Obj)
let Patch = (endPoint: string, id: string | number | undefined, Obj: {}) => ApiHandle.patch(`${endPoint}/${id}`, Obj)
let Delete = (endPoint: string, id: string | number,) => ApiHandle.delete(`${endPoint}/${id}`)

export { Get, Post, Put, Patch, Delete, }
