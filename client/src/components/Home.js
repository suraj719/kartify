import React from 'react'
import './home.css'
import Products from './Products'

export default function Home() {
    return (
        <div className=''>
            <div className=''>
                <img src="../images/home.jpg" alt="shopping" className='homeimg'/>
            </div>
            <Products />
        </div>
    )
}

