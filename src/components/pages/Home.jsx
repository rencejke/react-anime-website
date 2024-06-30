import React from 'react'
import Header from '../partials/Header'
import Sliders from '../partials/Sliders'
import Trending from '../partials/Trending'
import PopularShow from '../partials/PopularShows'
import SectionTab from '../partials/SectionTab'
import SectionComment from '../partials/SectionComment'
import RecentlyAdded from '../partials/RecentlyAdded'
import LiveActions from '../partials/LiveActions'
import Footer from '../partials/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Sliders />
      <div className="contents">
      <div className="container">
      <div className='wrapper grid grid-cols-[3fr_2fr] gap-7'> 
     <div>
          <Trending/>
          <PopularShow/>
          <RecentlyAdded/>
          <LiveActions/>
     </div>
      <div className='mt-10'>
         <SectionTab title="Top Views" />
         <SectionComment title="New Comment"/>
    </div>
      </div>
       </div>
      </div>

      <Footer/>
      
    </>  
  )
}

export default Home