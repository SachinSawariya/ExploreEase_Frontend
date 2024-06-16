import React from 'react'
import './Container.css'
import BottomContainer from "./BottomContainer";
import { Carousel } from './Carousel';


const Container = () => {
  return (

    <>
    <div className='Mid-container'></div>
    <Carousel/>
    <BottomContainer/>

    </>
  )
}

export default Container