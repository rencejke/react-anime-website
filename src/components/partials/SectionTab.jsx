import React from 'react'
import { FaEye } from 'react-icons/fa'

const SectionTab = ({title="trending"}) => {
  return (
  <>
     
     <div className='flex justify-between items-center'>
    <h3 className='text-2xl pl-3 border-l-4 border-line'>{title}</h3>

    <div className="tabs-container text-white/40">
     <ul className='flex gap-2 items-center cursor-pointer'>
        <li className='active text-white'>Day</li>
        <li>Week</li>
        <li>Months</li>
        <li>Years</li>
     </ul>
    </div>
   </div>

<div className="content mt-5 grid grid-rows-1 gap-3">
<div className="content-item-1 relative">
 <div className="content-image">
    <img src="../../public/img/tv-1.jpg" alt="" className='rounded-md'/>
 </div>

 <div className="content-title absolute bottom-3 left-3">
 <h3>Boruto: Naruto Next Generations</h3>
 </div>
  
 <div className="content-image-episode absolute top-3 left-2 text-[14px]">
    <div className='bg-line px-4 py-1 rounded-md'>
    <p className='text-white mb-0 font-bold'>18/?</p>
    </div>
    </div>

 <div className="content-views absolute top-3  right-2 text-[14px]">
    <div className='flex gap-1 items-center bg-gray-500 px-3 py-1 rounded-md'>
    <FaEye />
    <p className='text-white mb-0'>98755</p>
    </div>
    </div>
 
</div>

<div className="content-item-2 relative">
 <div className="content-image">
    <img src="../../public/img/tv-2.jpg" alt="" className='rounded-md'/>
 </div>

 <div className="content-title absolute bottom-3 left-3">
 <h3>Id: Invaded</h3>
 </div>
  
 <div className="content-image-episode absolute top-3 left-2 text-[14px]">
    <div className='bg-line px-4 py-1 rounded-md'>
    <p className='text-white mb-0 font-bold'>18/?</p>
    </div>
    </div>

 <div className="content-views absolute top-3  right-2 text-[14px]">
    <div className='flex gap-1 items-center bg-gray-500 px-3 py-1 rounded-md'>
    <FaEye />
    <p className='text-white mb-0'>98755</p>
    </div>
    </div>
 
</div>

<div className="content-item-3 relative">
 <div className="content-image">
    <img src="../../public/img/tv-3.jpg" alt="" className='rounded-md'/>
 </div>

 <div className="content-title absolute bottom-3 left-3">
 <h3>Sword Art Online</h3>
 </div>
  
 <div className="content-image-episode absolute top-3 left-2 text-[14px]">
    <div className='bg-line px-4 py-1 rounded-md'>
    <p className='text-white mb-0 font-bold'>18/?</p>
    </div>
    </div>

 <div className="content-views absolute top-3  right-2 text-[14px]">
    <div className='flex gap-1 items-center bg-gray-500 px-3 py-1 rounded-md'>
    <FaEye />
    <p className='text-white mb-0'>98755</p>
    </div>
    </div>
 
</div>
</div>

  </>
  )
}

export default SectionTab