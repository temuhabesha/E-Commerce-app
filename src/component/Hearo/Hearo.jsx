import React from 'react'
import './Hearo.css'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_img from '../assets/hero_image.png'

const Hearo = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
       <h2>NEEW ARRIVALS ONLY</h2>
       <div>
        <div className="hand-hand-icon">
            <p>new </p>
            <img src={hand_icon} alt="" />
        </div>
        <p>collection</p>
        <p>for everyone</p>
       </div>
       <div className="hero-latest-btn">
        <div>Latest collection</div>
        <img src={arrow_icon} alt="" />
       </div>
      </div>


      <div className="hero-right">
        <img src={hero_img} alt="" />
      </div>
    </div>
  )
}

export default Hearo
