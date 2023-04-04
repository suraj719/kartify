import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './home.css'
export default function Cart() {
     let items = JSON.parse(localStorage.getItem("items"))
    
    const [data, setData] = useState([])

    var totalqty = items.reduce((acc,i) => {
        return acc+i.quantity
    },0)
    var totalprice = items.reduce((acc,i) => {
      return acc+((i.quantity) * (i.price))
    },0)
    
    function delitem(itemid) {
      items = items.filter((i) => i.id !== parseInt(itemid))
      localStorage.setItem("items", JSON.stringify(items));
        totalqty = items.reduce((acc,i) => {
        return acc+i.quantity
        },0)
        totalprice = items.reduce((acc,i) => {
          return acc+((i.quantity) * (i.price))
        },0)
        document.querySelector('.cntitems').innerHTML=`${totalqty}`
        
        document.getElementById(`${itemid}`).innerHTML=""
        document.querySelector('.grand-price').innerHTML=`Subtotal (${totalqty} items): $${totalprice.toFixed(2)}` 
   } 
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/electronics').then(json =>{
          return json.json()
        }).then(data =>{
           setData(data)
        })
  }, [])
  return (
  <div className=''>
    {
      items.length>0?
      <div className='cart'>
      <div className='cart-items ms-5'>
        <h3 className='ms-5 mt-3'>Shopping Cart</h3>
        <hr className='mx-5' />
        {
        items.map((it) => {
          
          return (
              
            <div key={it.id} id={it.id}>
              <div className='cart-item mx-5'>
                <div>
                    <img src={it.image} alt="cart-item-img" className='cart-img' style={{height:"10rem",width:"10rem"}}/>
                </div>
                  <div className='card-body ms-5'>
                      <h5 className='card-title'>{it.title}</h5>
                      <p><span className='best-seller'>#1 Best Seller</span> in {it.category}</p>
                      <span className='text-success'>In stock</span>
                      <div className='d-flex qty'>
                        <select>
                          <option>Qty: {it.quantity}</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                        <span className='ms-3 delitem' onClick={() => delitem(it.id)}><img src="../images/icon-delete.svg" alt="icon-del" className='mb-1'/> Delete</span>
                      </div>
                      <p className='card-text'>
                        price: ${it.price}
                      </p>
                  </div>
              
              </div>
              <hr className='mx-5' />
            </div>
          )
        })
      }
      
      </div>
      <div className='grand mx-5'>
        <div className='grand-text ms-2 mb-3 mt-3 me-5'>
          <h5 className='grand-price'>Subtotal ({totalqty} items): ${totalprice.toFixed(2)}</h5>
          <button className='proceed mt-3'>
            Proceed to Buy
          </button>
        </div>
      </div>
    </div>
      : <div>
          <div className='no-items ms-5 mt-5 d-flex'>
            <img src="../images/nocart.gif" alt='no-items img' style={{height:"20rem"}}/>
            <div className='mt-3 ms-5'>
              <h4 className='mb-5'>Your kart is empty</h4>
              <Link to="/" className=''><button className='proceed'>shop more items</button></Link>
            </div>
          </div>
      </div>
    }
    
    <h4 className='ms-5 mt-5'>Recommended based on your shopping trends</h4>
    <div className='rec d-flex flex-wrap page justify-content-evenly'>
      
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