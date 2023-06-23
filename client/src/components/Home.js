import React from 'react'
import './home.css'
import Products from './Products'

export default function Home() {
    return (
        <div className=''>
            <div className='py-4 d-flex justify-content-around align-items-center' style={{backgroundColor:"#F4F6F5"}}>
                <div  className=''>
                    <div className='home-text'>
                        <p className='txt-1'>LET'S</p>
                        <p>EXPLORE</p>
                        <p className='txt-2'>UNIQUE</p>
                        <p>ITEMS</p>
                    </div>
                    <p className='fw-semibold fs-6'>KARTIFY, Your Ultimate Online Retail Destination!</p>
                    <button className='btn btn-dark px-3 py-2'>SHOP NOW</button>
                </div>
                <div>
                    <img src='../images/home-new.png' alt="home-tb" />
                </div>
            </div>
            <Products />
        </div>
    )
}

