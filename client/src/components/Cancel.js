import React from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'

export default function Cancel() {
  const navigate = useNavigate()
  swal("There was an error occurred while making your payment!", {
    icon:"error",
    button: "Try again",
  }).then((val) => {
    navigate("/cart")
  })
  return (
    <div style={{height:"60vh"}}>
      
    </div>
  )
}
