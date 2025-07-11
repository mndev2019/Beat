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
import Whyprojectbeat from '../Whyprojectbeat'

const Home = () => {
  return (
    <>
      <Banner />
      <Whyprojectbeat />
      <About />
      <Discover />

      <Explorebeats />
      <Success />
      <Browsebeats />
      <SellBeat />
      <BuyBeats />
      <Connectpeople />
    </>
  )
}

export default Home
