import React from 'react';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "50px",
        height: "50px",
        transform: "rotate(45deg)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "gray",
        position: "relative",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <div
        style={{
          transform: "rotate(-45deg)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GrLinkNext />
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
        width: "50px",
        height: "50px",
        transform: "rotate(45deg)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "green",
        position: "relative",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <div
        style={{
          transform: "rotate(-45deg)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <GrLinkPrevious />
      </div>
    </div>
  );
}

const Sliders = () => {
  var settings = {
    infinite: true,
    speed: 500,
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
                <h3 className='title'>Haikyuu</h3>
                <p className='description'>Haikyū!! (Japanese: ハイキュー!!) is a shōnen sports anime series based on the manga by Haruichi Furudate, and produced by Production I.G and Toho in conjunction with Japanese television network MBS. The anime consists of four seasons, four movies, and five OVAs. In the United States, Sentai Filmworks has licensed the anime and has dubbed seasons one to four in English.</p>
                <Link to="/more">
                  <button className='btn'>See more</button>
                </Link>
              </div>
            </div>
            <div className='bg-blue-500'>
              <h3>3</h3>
            </div>
            <div className='bg-red-500'>
              <h3>5</h3>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Sliders;
