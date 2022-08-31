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
    return axios.get("https://devapi.wtfup.me/gym/nearestgym?lat=28.5966034&long=77.3286464").then((res)=>{
        // console.log(res.data)
        dispatch(getdatasuccess(res.data.data))
    }).catch((err)=>{
        dispatch(getdatafailure())
    })
    
}

export const getdatabycity=(city)=>(dispatch)=>{
    dispatch(getdatarequest())
    return axios.get(`https://devapi.wtfup.me/gym/places`).then((res)=>{
       
        dispatch(getdatasuccess(res.data.data))
    }).catch((err)=>{
        dispatch(getdatafailure())
    })
    
}