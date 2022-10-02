import React from 'react'
import './styles.css'
import image from './Landing page image.svg'
import { Link } from 'react-router-dom'
import { GiPartyPopper } from 'react-icons/gi';

function Landing() {
  return (
    <div className='main'>
      <div className='heading'>
        <div className='head'>
          <span className='if1'>Imagine if</span><br />
          <span className='snapchat'>Snapchat</span><br/>
          <span className='if2'>had events.</span>
        </div>
        <div className='subheading'>
            Easily host and share events with your friends across any social media.
        </div>
      </div>
      <img className='img' src={image} alt="event" />
      <Link to="/create">
        <button className='button'>
          <span className='event'><GiPartyPopper /> Create my event</span>
        </button>
      </Link>
    </div>
  )
}

export default Landing
