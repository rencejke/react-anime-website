import React from 'react';
import { GrLinkNext, GrLinkPrevious, GrNext, GrPrevious } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className={className}
    style={{
      ...style,
      width: "70px",  
      height: "70px", 
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#0b0c2a",
      position: "absolute",
      top: "50%",
      right: "-25px",  
      cursor: "pointer",
      zIndex: 1,
      transform: "rotate(45deg)"
    }}
    onClick={onClick}
  >
   <div className='bg-white/40 p-4'>
   <GrNext
      style={{
        transform: "rotate(-45deg)",
        color: "white" 
      }}
      size={20}
    />
   </div>
  </div>
);
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
    className={className}
    style={{
      ...style,
      width: "70px",  
      height: "70px",  
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#0b0c2a",
      position: "absolute",
      top: "50%",
      left: "-25px",  
      cursor: "pointer",
      zIndex: 1,
      transform: "rotate(45deg)"
    }}
    onClick={onClick}
  >
   <div className='bg-white/40 p-4'>
   <GrPrevious
      style={{
        transform: "rotate(-45deg)",
        color: "white" 
      }}
      size={20}
    />
   </div>
  </div>
  );
}

const Sliders = () => {
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    cssEase: "linear",
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <>
      <div className="relative overflow-hidden mt-10 z-[1]">
        <div className="container">
          <Slider {...settings}>
            <div className=''>
              <div className="image">
                <img src="../../public/img/anime4.jpg" alt="" />
              </div>
              <div className="content absolute top-[35%] w-[1140px] pl-[7%] -translate-x-[50%] z-[9999]">
                <p className='genre'>Shōnen Sports</p>
                <h1 className='title'>Haikyuu</h1>
                <p className='description'>Haikyū!! (Japanese: ハイキュー!!) is a shōnen sports anime series based on the manga by Haruichi Furudate, and produced by Production I.G and Toho in conjunction with Japanese television network MBS. The anime consists of four seasons, four movies, and five OVAs. In the United States, Sentai Filmworks has licensed the anime and has dubbed seasons one to four in English.</p>
                <Link to="/more" className='flex gap-2 '>
                  <button className='btn-left'>See more</button>
                  <button className='btn-right'><GrNext/></button>
                </Link>
              </div>
            </div>
            <div className=''>
              <div className="image">
                <img src="../../public/img/anime2.jpg" alt=""/>
              </div>
              <div className="content absolute top-[35%] w-[1140px] pl-[7%] -translate-x-[50%] z-[9999]">
                <p className='genre'>Shōnen Sports</p>
                <h1 className='title'>Haikyuu</h1>
                <p className='description'>Haikyū!! (Japanese: ハイキュー!!) is a shōnen sports anime series based on the manga by Haruichi Furudate, and produced by Production I.G and Toho in conjunction with Japanese television network MBS. The anime consists of four seasons, four movies, and five OVAs. In the United States, Sentai Filmworks has licensed the anime and has dubbed seasons one to four in English.</p>
                <Link to="/more" className='flex gap-2 '>
                  <button className='btn-left'>See more</button>
                  <button className='btn-right'><GrNext/></button>
                </Link>
              </div>
            </div>
            <div className=''>
              <div className="image">
                <img src="../../public/img/anime1.jpg" alt="" />
              </div>
              <div className="content absolute top-[35%] w-[1140px] pl-[7%] -translate-x-[50%] z-[9999]">
                <p className='genre'>Shōnen Sports</p>
                <h1 className='title'>Haikyuu</h1>
                <p className='description'>Haikyū!! (Japanese: ハイキュー!!) is a shōnen sports anime series based on the manga by Haruichi Furudate, and produced by Production I.G and Toho in conjunction with Japanese television network MBS. The anime consists of four seasons, four movies, and five OVAs. In the United States, Sentai Filmworks has licensed the anime and has dubbed seasons one to four in English.</p>
                <Link to="/more" className='flex gap-2 '>
                  <button className='btn-left'>See more</button>
                  <button className='btn-right'><GrNext/></button>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Sliders;
