import React from 'react'
import './styles.css'
import image from './Birthday cake.png'
import {BiCalendar} from 'react-icons/bi';
import {GoLocation} from 'react-icons/go'

function Events() {
  return (
    <div className='main1'>
        <img className='img1' src={image} />
      <div className='head'>
        <span className='event1'>Birthday Bash</span>
        <span className='host'>Hosted by <span className='name'>Elysia</span></span>
      </div>
      <div className='date'>
        <div className='info'>
            <div className='icon'><BiCalendar /></div>
            <div className='text'>
                <span className='start'>18 August 6:00PM</span>
                <span className='end'>to 19 August 1:00PM UTC+10</span>
            </div>
        </div>
        <div className='arrow'>
            &gt;
        </div>
      </div>
      <div className='location'>
        <div className='info'>
            <div className='icon'><GoLocation /></div>
            <div className='text'>
                <span className='strt'>Street name</span>
                <span className='addr'>Suburb, State, Postcode</span>
            </div>
        </div>
        <div className='arrow'>
            &gt;
        </div>
      </div>
    </div>
  )
}

export default Events
