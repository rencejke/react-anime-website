import React from 'react'
import SectionBanner from './SectionBanner'
import { FaComment, FaEye } from 'react-icons/fa'
import SectionComment from './SectionComment'

const PopularShow = () => {
  return (
   <section className='popular mt-16'>
    <SectionBanner title="Popular Shows" hasLink={true} link='/trending'/>
    <div className='grid grid-cols-3 gap-6 mt-5'>
   
    {/* card-item-1 */}
    <div className="card-item-1 relative">
    <div className="card-image">
    <img src="../../public/img/trend-1.jpg" alt=""  className='rounded-md'/>
    </div>
    <div className="card-image-episode absolute top-3 left-2 text-[14px]">
    <div className='bg-line px-4 py-1 rounded-md'>
    <p className='text-white mb-0 font-bold'>18/18</p>
    </div>
    </div>

    <div className="card-image-comments absolute top-[69%] left-2 text-[14px]">
    <div className='flex gap-1 items-center bg-gray-500 px-3 py-1 rounded-md'>
    <FaComment/>
    <p className='text-white mb-0'>11</p>
    </div>
    </div>

    <div className="card-image-views absolute top-[69%]  right-2 text-[14px]">
    <div className='flex gap-1 items-center bg-gray-500 px-3 py-1 rounded-md'>
    <FaEye />
    <p className='text-white mb-0'>98755</p>
    </div>
    </div>

    <div className="card-content">
     <div className="tag flex gap-1 mt-2 text-[11px]">
      <p className='bg-white/40 px-2 rounded-full'>Active</p>
      <p className='bg-white/40 px-2 rounded-full'>Series</p>
     </div>

     <div className="card-title">
        <h3>Boruto: Naruto Next Generations</h3>
     </div>
    </div>
    </div>
    
    {/* card-item-2*/}
    <div className="card-item-2 relative">
    <div className="card-image">
    <img src="../../public/img/trend-2.jpg" alt=""  className='rounded-md'/>
    </div>
    <div className="card-image-comments absolute top-3 left-2 text-[14px]">
    <div className='bg-line px-4 py-1 rounded-md'>
    <p className='text-white mb-0 font-bold'>18/18</p>
    </div>
    </div>

    <div className="card-image-comments absolute top-[69%] left-2 text-[14px]">
    <div className='flex gap-1 items-center bg-gray-500 px-3 py-1 rounded-md'>
    <FaComment/>
    <p className='text-white mb-0'>11</p>
    </div>
    </div>

    <div className="card-image-views absolute top-[69%]  right-2 text-[14px]">
    <div className='flex gap-1 items-center bg-gray-500 px-3 py-1 rounded-md'>
    <FaEye />
    <p className='text-white mb-0'>98755</p>
    </div>
    </div>

    <div className="card-content">
     <div className="tag flex gap-1 mt-2 text-[11px]">
      <p className='bg-white/40 px-2 rounded-full'>Active</p>
      <p className='bg-white/40 px-2 rounded-full'>Series</p>
     </div>

     <div className="card-title">
        <h3>Id: Invaded</h3>
     </div>
    </div>
    </div>
    
    {/* card-item-3 */}
    <div className="card-item-3 relative">
    <div className="card-image">
    <img src="../../public/img/trend-3.jpg" alt="" className='rounded-md'/>
    </div>
    <div className="card-image-comments absolute top-3 left-2 text-[14px]">
    <div className='bg-line px-4 py-1 rounded-md'>
    <p className='text-white mb-0 font-bold'>18/18</p>
    </div>
    </div>

    <div className="card-image-comments absolute top-[69%] left-2 text-[14px]">
    <div className='flex gap-1 items-center bg-gray-500 px-3 py-1 rounded-md'>
    <FaComment/>
    <p className='text-white mb-0'>11</p>
    </div>
    </div>

    <div className="card-image-views absolute top-[69%]  right-2 text-[14px]">
    <div className='flex gap-1 items-center bg-gray-500 px-3 py-1 rounded-md'>
    <FaEye />
    <p className='text-white mb-0'>98755</p>
    </div>
    </div>

    <div className="card-content">
     <div className="tag flex gap-1 mt-2 text-[11px]">
      <p className='bg-white/40 px-2 rounded-full'>Active</p>
      <p className='bg-white/40 px-2 rounded-full'>Series</p>
     </div>

     <div className="card-title">
        <h3>Death Note</h3>
     </div>
    </div>
    </div>
    
    {/* card-item-4 */}
    <div className="card-item-4 relative">
    <div className="card-image">
    <img src="../../public/img/trend-4.jpg" alt=""  className='rounded-md'/>
    </div>
    <div className="card-image-episode absolute top-3 left-2 text-[14px]">
    <div className='bg-line px-4 py-1 rounded-md'>
    <p className='text-white mb-0 font-bold'>18/18</p>
    </div>
    </div>

    <div className="card-image-comments absolute top-[69%] left-2 text-[14px]">
    <div className='flex gap-1 items-center bg-gray-500 px-3 py-1 rounded-md'>
    <FaComment/>
    <p className='text-white mb-0'>11</p>
    </div>
    </div>

    <div className="card-image-views absolute top-[69%]  right-2 text-[14px]">
    <div className='flex gap-1 items-center bg-gray-500 px-3 py-1 rounded-md'>
    <FaEye />
    <p className='text-white mb-0'>98755</p>
    </div>
    </div>

    <div className="card-content">
     <div className="tag flex gap-1 mt-2 text-[11px]">
      <p className='bg-white/40 px-2 rounded-full'>Active</p>
      <p className='bg-white/40 px-2 rounded-full'>Series</p>
     </div>

     <div className="card-title">
        <h3>Fate/Stay Night</h3>
     </div>
    </div>
    </div>
    
    {/* card-item-5 */}
    <div className="card-item-5 relative">
    <div className="card-image">
    <img src="../../public/img/trend-5.jpg" alt=""  className='rounded-md'/>
    </div>
    <div className="card-image-comments absolute top-3 left-2 text-[14px]">
    <div className='bg-line px-4 py-1 rounded-md'>
    <p className='text-white mb-0 font-bold'>18/18</p>
    </div>
    </div>

    <div className="card-image-comments absolute top-[69%] left-2 text-[14px]">
    <div className='flex gap-1 items-center bg-gray-500 px-3 py-1 rounded-md'>
    <FaComment/>
    <p className='text-white mb-0'>11</p>
    </div>
    </div>

    <div className="card-image-views absolute top-[69%]  right-2 text-[14px]">
    <div className='flex gap-1 items-center bg-gray-500 px-3 py-1 rounded-md'>
    <FaEye />
    <p className='text-white mb-0'>98755</p>
    </div>
    </div>

    <div className="card-content">
     <div className="tag flex gap-1 mt-2 text-[11px]">
      <p className='bg-white/40 px-2 rounded-full'>Active</p>
      <p className='bg-white/40 px-2 rounded-full'>Series</p>
     </div>

     <div className="card-title">
        <h3>Fate/Stay Night: Unlimited Blade Works</h3>
     </div>
    </div>
    </div>
    
    {/* card-item-6 */}
    <div className="card-item-6 relative">
    <div className="card-image">
    <img src="../../public/img/trend-6.jpg" alt="" className='rounded-md'/>
    </div>
    <div className="card-image-comments absolute top-3 left-2 text-[14px]">
    <div className='bg-line px-4 py-1 rounded-md'>
    <p className='text-white mb-0 font-bold'>18/18</p>
    </div>
    </div>

    <div className="card-image-comments absolute top-[69%] left-2 text-[14px]">
    <div className='flex gap-1 items-center bg-gray-500 px-3 py-1 rounded-md'>
    <FaComment/>
    <p className='text-white mb-0'>11</p>
    </div>
    </div>

    <div className="card-image-views absolute top-[69%]  right-2 text-[14px]">
    <div className='flex gap-1 items-center bg-gray-500 px-3 py-1 rounded-md'>
    <FaEye />
    <p className='text-white mb-0'>98755</p>
    </div>
    </div>

    <div className="card-content">
     <div className="tag flex gap-1 mt-2 text-[11px]">
      <p className='bg-white/40 px-2 rounded-full'>Active</p>
      <p className='bg-white/40 px-2 rounded-full'>Series</p>
     </div>

     <div className="card-title">
        <h3>Sword Art Online</h3>
     </div>
    </div>
    </div>
    </div>
   </section>
  )
}

export default PopularShow