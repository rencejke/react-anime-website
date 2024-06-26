import React from 'react'
import { GrLinkNext } from 'react-icons/gr'
import { Link } from 'react-router-dom'

const SectionBanner = ({title="trending", hasLink=false, link="#"}) => {
  return (
   <div className='flex justify-between items-center'>
    <h3 className='text-2xl pl-3 border-l-4 border-line'>{title}</h3>
    {hasLink &&  <Link to={link} className='flex gap-2 items-center justify-center'>View all <GrLinkNext/></Link>}
   
   </div>
  )
}

export default SectionBanner