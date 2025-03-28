import React from 'react'
import Banner from './Banner'
import Discover from './Discover'
import About from './About'
import Explorebeats from './Explorebeats'
import { SiBeats } from 'react-icons/si'
import Browsebeats from './Browsebeats'
import BuyBeats from './BuyBeats'

const Home = () => {
  return (
    <>
      <Banner />
      <Discover />
      <About/>
      <Explorebeats />
      <Browsebeats />
      <BuyBeats/>
    </>
  )
}

export default Home
