import {useEffect} from 'react'
import Slider from "../components/Slider"
import TestCards from "../components/TestCards"
import Build from "../components/Build"
import Explore from "../components/Explore"
import Counter from "../components/Counter"
import Order from "../components/Order"
import Footer from "../pages/Footer"


function Home() {
  return (
    <>
    <Slider/>
  <TestCards/>
  <Build/>
  <Explore/>
  <Counter/>
  <Order/>
    
   
    </>
  )
}

export default Home