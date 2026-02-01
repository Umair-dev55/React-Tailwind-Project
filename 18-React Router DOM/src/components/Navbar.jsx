import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className=''>
            <div id='nav' className='min-w-screen flex justify-between items-center bg-cyan-900 p-8 rounded-b-4xl '>
                <h2 className='text-2xl font-extrabold'>Umair Tech</h2>
                <div className='*:p-8 '>
                    <Link to='/'>Home</Link>
                    <Link to='/products'>Products</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </div>


            </div>
        </div>
    )
}

export default Navbar