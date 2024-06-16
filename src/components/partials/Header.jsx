import React from 'react'
import { FaSearch, FaUser } from 'react-icons/fa'
import { PiCaretDownBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className='header pt-5 bg-header'>
        <div className="container">
            <nav className='flex justify-between text-[16px]'>
            <h2>Ani<span className='text-line'>mei</span></h2>
             <div className='flex justify-between gap-10'>
             <div><Link>Home</Link></div>
             <div className='dropdown-categories relative inline-block'>
                <div className='flex items-center gap-1'> 
                <button className='drop-btn'>Categories</button>
                <PiCaretDownBold /> 
                </div>
                <ul className="dropdown-content hidden absolute bg-[#f1f1f1] min-w-[160px] z-1  transition-all">
                  <li><Link>Anime Details</Link></li>
                  <li><Link>Trailers</Link></li>
                  <li><Link>Blogs</Link></li>
                  <li><Link>Sign Up</Link></li>
                  <li><Link>Login</Link></li>
                </ul>
               </div>

               <div><Link>Blog</Link></div>
               <div><Link>Contacts</Link></div>

             </div>
  
               <div className='flex gap-5'>
               <Link><FaSearch /></Link>
               <Link><FaUser /></Link>
               </div>
            </nav>

        </div>
      </div>
    </>
  )
}

export default Header