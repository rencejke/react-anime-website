import React from 'react'
import { Link } from 'react-router-dom'
import BackToTop from './BackToTop'

const Footer = () => {
  return (
    <>
        <footer className='footer relative pt-12 pb-20 mt-10 bg-header'>
            <div className="container">
                <div className="flex justify-between items-center">
                   <div className="logo">
                   <h2>Ani<span className='text-line mb-0'>mei</span></h2>
                   </div>
                   
                <div>
                <ul className='flex gap-20 items-center text-gray-400'>
                    <li><Link>Home</Link></li>
                    <li><Link>Blog</Link></li>
                    <li><Link>Contact</Link></li>
                    <li><Link>Contact</Link></li>
                   </ul>
                </div>

                   <div className='flex items-center'>
                    <input type="text" placeholder='Subscribe' className='placeholder:px-2 py-1 rounded-l-md outline-none'/>
                    <Link><button className='bg-line py-1 px-2 mb-0 rounded-r-md'>Subscribe</button></Link>
                   </div>
                </div>
            </div>
        </footer>
        <BackToTop/>
    </>
  )
}

export default Footer