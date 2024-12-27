import React from 'react'
import './PrizesBg.css'
import bgVideo from '../../assets/themePage/videoBg.mp4'

const PrizesBg = () => {
  return (
    <>
      <div className="video-container">
        <video autoPlay muted loop className='bg-video'>
            <source src={bgVideo} type="video/mp4"/>
        </video>
      </div>
    </>
  )
}

export default PrizesBg;