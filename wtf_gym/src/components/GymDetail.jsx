import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getdata } from '../Redux/GYMDetail/action'

export const GymDetail = () => {
    const {user_id}=useParams()
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(getdata(user_id))
    },[])
  return (
    <div>GymDetail</div>
  )
}
