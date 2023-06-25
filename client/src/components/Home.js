import React from 'react'
import './home.css'
import Products from './Products'
export default function Home() {
    return (
        <div className=''>
            <div className='p d-flex flex-wrap justify-content-around align-items-center pb-5' style={{backgroundColor:"#F4F6F5"}}>
                <div  className=''>
                    <div className='home-text'>
                        <p className='txt-1'>EXPLORE</p>
                        <p>DISCOVER</p>
                        <p className='txt-2'>BUY IT!</p>
                    </div>
                    <p className='fw-semibold fs-6'>KARTIFY, Your Ultimate Online Retail Destination!</p>
                    <button className='btn btn-dark px-3'>SHOP NOW</button>
                </div>
                <div>
                    <img className='mt-3' src='../images/home-new.png' alt="home-tb" />
                </div>
            </div>
            <Products />
        </div>
    )
}

