import React from 'react'
import Header from '../partials/Header'
import Sliders from '../partials/Sliders'
import Trending from '../partials/Trending'
import PopularShow from '../partials/PopularShows'

const Home = () => {
  return (
    <>
      <Header />
      <Sliders />
      <Trending/>
      <PopularShow/>
    </>  
  )
}

export default Home