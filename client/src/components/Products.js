import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './product.css'
export default function Products() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then(json =>{
            return json.json()
          }).then(data =>{
             setData(data)
          })
    }, [])

return (
<div>
    <div className='d-flex flex-wrap page justify-content-evenly'>
        {
            data.map((pro) => {
                return (
                    <Link to={`/products/${pro.id}`} state={{data:pro}} key={pro.id}>
                    <div className='card pro-card mt-5 ms-5 px-3 pt-2 ' style= {{width:"20rem",height:"30rem"}}>
                        <div className='top-d'>
                            <span className='top-price'>${pro.price}</span>
                            <i className="fa-sharp fa-solid fa-heart"></i>
                        </div>
                        <img src={pro.image} className='card-image-top mt-4' alt="product img" style= {{height:"15rem"}}/>
                        <div className='card-body text-center'>
                        <h5 className='card-title'>{pro.title}</h5>
                        <div className='text-center ratingdiv'>5 <img src="../images/rating.png" alt="rating"/> <span>({Math.ceil((pro.price)*5+1)})</span></div>
                        <p className='card-text' style={{marginTop:"-20px",fontSize:"20px"}}><span style={{color:"red"}}>${pro.price}</span> <span className='text-decoration-line-through text-muted'>${(pro.price)*2}</span>(50% off)</p>
                        </div>
                    </div>
                    </Link>
                )
            })
        }
    </div>
</div>
  )
}
