import React from 'react'
import { FaEye } from 'react-icons/fa'


const SectionComment = ({title="trending"}) => {
  return (
   <>
    <div className='flex justify-between items-center mt-16'>
    <h3 className='text-2xl pl-3 border-l-4 border-line'>{title}</h3>
   </div>
    
    <div className="comment-1">
    <div className="flex gap-2 mt-4">
     <div className="image">
        <img src="../../public/img/trend-1.jpg" alt="" className='w-full h-[130px]'/>
     </div>
     <div className="comment-desc mt-4">
     <div className="tag flex gap-1 text-[11px]">
      <p className='bg-white/40 px-2 rounded-full'>Active</p>
      <p className='bg-white/40 px-2 rounded-full'>Series</p>
     </div>
     <div className="title">
     <p className='w-[80%] font-extrabold text-[16px]'>Boruto: Naruto Next Generations</p>
     </div>

     <div className="comment-views text-[14px]">
    <div className='flex gap-1 items-center rounded-md'>
    <FaEye />
    <p className='text-white mb-0'>14000 Views</p>
    </div>
    </div>
     </div>
    </div> 
    </div>  

    <div className="comment-2">
    <div className="flex gap-2 mt-4">
     <div className="image">
        <img src="../../public/img/trend-2.jpg" alt="" className='w-full h-[130px]'/>
     </div>
     <div className="comment-desc mt-4">
     <div className="tag flex gap-1 text-[11px]">
      <p className='bg-white/40 px-2 rounded-full'>Active</p>
      <p className='bg-white/40 px-2 rounded-full'>Series</p>
     </div>
     <div className="title">
     <p className='w-[80%] font-extrabold text-[16px]'>Shirogane Tamashii hen Kouhan sen</p>
     </div>

     <div className="comment-views text-[14px]">
    <div className='flex gap-1 items-center rounded-md'>
    <FaEye />
    <p className='text-white mb-0'>14000 Views</p>
    </div>
    </div>
     </div>
    </div> 
    </div>  

    <div className="comment-3">
    <div className="flex gap-2 mt-4">
     <div className="image">
        <img src="../../public/img/trend-3.jpg" alt="" className='w-full h-[130px]'/>
     </div>
     <div className="comment-desc mt-4">
     <div className="tag flex gap-1 text-[11px]">
      <p className='bg-white/40 px-2 rounded-full'>Active</p>
      <p className='bg-white/40 px-2 rounded-full'>Series</p>
     </div>
     <div className="title">
     <p className='w-[80%] font-extrabold text-[16px]'>Kizumonogatari III: Reiket su-hen</p>
     </div>

     <div className="comment-views text-[14px]">
    <div className='flex gap-1 items-center rounded-md'>
    <FaEye />
    <p className='text-white mb-0'>14000 Views</p>
    </div>
    </div>
     </div>
    </div> 
    </div>  

    <div className="comment-4">
    <div className="flex gap-2 mt-4">
     <div className="image">
        <img src="../../public/img/trend-4.jpg" alt="" className='w-full h-[130px]'/>
     </div>
     <div className="comment-desc mt-4">
     <div className="tag flex gap-1 text-[11px]">
      <p className='bg-white/40 px-2 rounded-full'>Active</p>
      <p className='bg-white/40 px-2 rounded-full'>Series</p>
     </div>
     <div className="title">
     <p className='w-[80%] font-extrabold text-[16px]'>Monogatari Series: Second Season</p>
     </div>

     <div className="comment-views text-[14px]">
    <div className='flex gap-1 items-center rounded-md'>
    <FaEye />
    <p className='text-white mb-0'>14000 Views</p>
    </div>
    </div>
     </div>
    </div> 
    </div>  
   </> 
  )
}

export default SectionComment