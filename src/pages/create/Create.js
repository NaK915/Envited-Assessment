import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function Create() {
  return (
    <div className='main'>
      <center>
        <div className='head'>
          <h1>Create your own Event now!</h1>
        </div>
        <input type={Text} className='inputbox' placeholder='Event Name'></input><br /><br />
        <input type={Text} className='inputbox' placeholder='Host Name'></input><br /><br />
        <input type={Text} className='inputbox' placeholder='Location'></input><br /><br />
        <label className='lbl'>Date and Time</label><br /><br /><br />
        <input type={Text} className='inputbox1' placeholder='Start Date'></input>
        <input type={Text} className='inputbox2' placeholder='24-hour format'></input><br /><br />
        <input type={Text} className='inputbox1' placeholder='End Date'></input>
        <input type={Text} className='inputbox2' placeholder='24-hour format'></input><br /><br />

        <Link to="/event"><button className='button'><span className='buttontext'>Next</span></button></Link>
      </center>
    </div>
  )
}

export default Create
