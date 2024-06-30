import React from 'react'
import { FaArrowCircleUp } from 'react-icons/fa';

const BackToTop = () => {

 const [visible, setVisible] = React.useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
      setVisible(true) 
    }  
    else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }; 
  
  const scrollToTop = () =>{ 
    window.scrollTo({ 
      top: 0,  
      behavior: 'smooth'
    }); 
  }; 


    window.addEventListener('scroll', toggleVisible);


  return (
    <>
      <button
      className='fixed w-full left-[94%] top-[90%] bottom-[40px] h-[20px] text-[3rem] z-[1] cursor-pointer text-line'
      style={{ display: visible ? 'inline' : 'none' }}
      onClick={scrollToTop}
    >
      <FaArrowCircleUp />
    </button>
    </>
  )
}

export default BackToTop