import * as types from "./actionTypes"

const initState={
    data:[],
    isLoading:false,
    isError:false
}
export const reducer=(state=initState,{type,payload})=>{
        switch(type){

           case  types.GET_DATA_REQUEST:{
            return {...state,isLoading:false,isError:false}
           }
           case  types.GET_DATA_SUCCESS:{
            return {...state,isLoading:false,isError:false,data:payload}
           }
           case  types.GET_DATA_REQUEST:{
            return {...state,isLoading:false,isError:false}
           }
            default:{
                return state
            }
        }
}