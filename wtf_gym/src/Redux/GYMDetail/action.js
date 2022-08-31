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
export const getdata=(id)=>(dispatch)=>{
    dispatch(getdatarequest())
    return axios.post(`https://devapi.wtfup.me/gym/plan`,{
        
            "gym_id":id
        
    }).then((res)=>{
       
        dispatch(getdatasuccess(res.data.data))
    }).catch((err)=>{
        dispatch(getdatafailure())
    })
    
}