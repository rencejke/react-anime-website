import React from 'react'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr'

const Slider = () => {
  return (
    <>
    <div className="slider relative overflow-hidden mt-10 z-[1]">
            
    <div className="container">
    <div className="slider-list">

    {/* item 1 */}
    <div className="slider-list-item">

    <img src="../public/img/anime4.jpg" alt=""  className='h-[630px] object-cover '/>

    <div className="slider-content absolute top-[35%] w-[1140px] max-w-[80%] -translate-x-[50%] pl-[31%] box-border text-black">
    <h4 className='genre'>Sports, Comedy, Coming-of-age</h4>
       <h2 className='title text-white font-bold text-[40px]'>Haikyu!</h2>
       <p className='description text-[14px] text-white'>
       Haikyū!! (Japanese: ハイキュー!!, Haikyū!!) is a shōnen sports anime series based on the manga by Haruichi Furudate, and produced is by
        Production I.G and Toho in conjunction with Japanese television network MBS. The anime consists of four seasons, four movies, and five OVAs.
       </p>
       <button className='btn transition-all mt-[15px]'>See more</button>
    </div>

    </div>

    {/* item 2
     <div className="slider-list-item">

        <img src="../public/img/anime1.jpg" alt=""  className='h-[630px] object-cover '/>

        <div className="slider-content absolute top-[50%] w-[1140px] max-w-[80%] -translate-x-[50%] pl-[31%] box-border text-black">
        <h4 className='genre'>Sports, Comedy, Coming-of-age</h4>
         <h2 className='title text-white font-bold text-[40px]'>Haikyu!</h2>
           <p className='description text-[14px] text-white'>
           Haikyū!! (Japanese: ハイキュー!!, Haikyū!!) is a shōnen sports anime series based on the manga by Haruichi Furudate, and produced is by
            Production I.G and Toho in conjunction with Japanese television network MBS. The anime consists of four seasons, four movies, and five OVAs.
           </p>
           <button className='btn transition-all mt-[15px]'>See more</button>
        </div>

    </div>

     item 3
     <div className="slider-list-item">

<img src="../public/img/anime2.jpg" alt=""  className='h-[630px] object-cover '/>

<div className="slider-content absolute top-[50%] w-[1140px] max-w-[80%] -translate-x-[50%] pl-[31%] box-border text-black">
<h4 className='genre'>Sports, Comedy, Coming-of-age</h4>
   <h2 className='title text-white font-bold text-[40px]'>Haikyu!</h2>
   <p className='description text-[14px] text-white'>
   Haikyū!! (Japanese: ハイキュー!!, Haikyū!!) is a shōnen sports anime series based on the manga by Haruichi Furudate, and produced is by
    Production I.G and Toho in conjunction with Japanese television network MBS. The anime consists of four seasons, four movies, and five OVAs.
   </p>
   <button className='btn transition-all mt-[15px]'>See more</button>
</div>

    </div> */}
    </div>

      <div className="slider-thumbnail flex gap-[20px] absolute bottom-[50px] left-[50%] max-w-full z-[100]">
        <div className='thumbnail-item'>
            <img src="../public/img/anime4.jpg" alt="" />
        </div>

        <div className='thumbnail-item'>
            <img src="../public/img/anime1.jpg" alt="" />
        </div>

        <div className='thumbnail-item'>
            <img src="../public/img/anime3.jpg" alt="" />
        </div>

        
      </div>
        <div className="nextSliderButtons absolute top-[80%] right-[52%] z-[100] w-[300px] max-w-[30%]
        flex gap-2 items-center
        ">
        <button className='prev'><GrLinkPrevious /></button>
        <button className='next'><GrLinkNext /></button>
        </div>
        </div>
        </div>
    </>
  )
}

export default Slider