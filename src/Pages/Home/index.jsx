import React from 'react'
import Banner from './Banner'
import Discover from './Discover'
import About from './About'
import Explorebeats from './Explorebeats'
import { SiBeats } from 'react-icons/si'
import Browsebeats from './Browsebeats'
import BuyBeats from './BuyBeats'
import SellBeat from './SellBeat'
import Connectpeople from './Connectpeople'
import Success from './Success'

const Home = () => {
  return (
    <>
      <Banner />
      <About/>
      <Discover />
     
      <Explorebeats />
      <Success/>
      <Browsebeats />
      <SellBeat/>
      <BuyBeats/>
      <Connectpeople/>
    </>
  )
}

export default Home
