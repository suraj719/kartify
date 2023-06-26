import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import { resetCart } from '../redux/cartReducer'

export default function Success() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  swal("The payment was successfull", {
    icon:"success",
    button: "Shop more!",
  }).then((val) => {
    dispatch(resetCart())
    navigate("/home")
  })
  return (
    <div style={{height:"60vh"}}>
      
    </div>
  )
}
