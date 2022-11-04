import React, { useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print';

const Resumebuild = () => {

  // download as pdf
  const componentRef = useRef();
  const handlePrint  = useReactToPrint({
    content: () => componentRef.current,
  });

  // hooks
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState();
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [obj, setObj] = useState('');
  const [edu, setEdu] = useState('');
  const [exp, setExp] = useState('');
  const [skills, setSkills] = useState('');
  
  

  return (
    <div>
      <h1>Welcome to Resume builder</h1>
      <div className='build'>
        <section className='details'>
          <header>
            <h1>Fill in the details</h1>
            <form action="">
              <label htmlFor="fname">Name</label>
              <input
                type='text'
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <br />
              <label htmlFor="title">Title</label>
              <input
                type='text'
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <br />
              <label htmlFor="email">Email</label>
              <input
                type='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <br />
              <label htmlFor="num">Phone No.</label>
              <input
                type='tel'
                onChange={(e) => setNumber(e.target.value)}
                value={number}
              />
              <br />

              <label htmlFor="city">City</label>
              <input
                type='text'
                onChange={(e) => setCity(e.target.value)}
                value={city}
              />
              <br />
              <label htmlFor="state">Country</label>
              <input
                type='text'
                onChange={(e) => setCountry(e.target.value)}
                value={country}
              />
              <br />
              <label htmlFor="about">Objective</label>
              <textarea
                type='text'
                onChange={(e) => setObj(e.target.value)}
                rows='5'
                columns='100'
              />
              <br />
              <label htmlFor="edu">Education</label>
              <input
                type='text'
                onChange={(e) => setEdu(e.target.value)}
                value={edu}
              />
              <br />
              <label htmlFor="skills">Skills</label>
              <input
                type='text'
                onChange={(e) => setSkills(e.target.value)}
                value={skills}
              />
              <br />
              <label htmlFor="exp">Experience</label>
              <input
                type='text'
                onChange={(e) => setExp(e.target.value)}
                value={exp}
              />
              <br />
            </form>
          </header>
        </section>
        <section className='preview' id='final' ref={componentRef}>
          <header>
            <span className='names'>
              <h1>{name}</h1>
              <p>{title}</p>
            </span>
            <span className='contact'>
              <p>{email}</p>
              <p>{number}</p>
              <p>{city}</p>
              <p>{country}</p>
            </span>
          </header>
          <h2>Objective</h2>
          <p className='obj'>{obj}</p>
          <h2>Skills</h2>
          <p>{skills}</p>
          <h2>Education</h2>
          <p>{edu}</p>
          <h2>Experience</h2>
          <p>{exp}</p>
          {/* <img src={pic} alt="" width={200} height={200} /> */}


        </section>
        
      </div>
      <button id='download' onClick={handlePrint} download>Download</button>
    </div>
    
  )
}

export default Resumebuild
