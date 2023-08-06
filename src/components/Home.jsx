import React from 'react'
import resume from '../images/resume.png'
import {Link} from 'react-router-dom';


const Home = () => {
  return (
    <div className='Home'>
      <h1 className='main'>Resume Builder</h1>
      <br/>
      <h2>Your reputation is often your Resume <br/> -Jacklyn Johnson</h2>
      <img src={resume} alt='Resume' width={500}/>
      <br/>
      <button ><Link className='resume' to='/resumebuild'>Create your Resume now</Link></button>
    </div>
  )
}

export default Home
