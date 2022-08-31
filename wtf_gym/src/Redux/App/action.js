import axios from "axios"
import * as types from "./actionTypes"

export const getdatarequest=()=>{
    return {
        type:types.GET_DATA_REQUEST
    }
}
export const getdatasuccess=(payload)=>{
    return{
        type:types.GET_DATA_SUCCESS,
        payload
    }
}
export const getdatafailure=()=>{
    return {
        type:types.GET_DATA_FAILURE,

    }
}
export const getdata=()=>(dispatch)=>{
    dispatch(getdatarequest())
    return axios.get("https://devapi.wtfup.me/gym/nearestgym?lat=30.325488815850512&long=78.0042384802231").then((res)=>{
        dispatch(getdatasuccess(res.data.data))
    }).catch((err)=>{
        dispatch(getdatafailure())
    })
    
}