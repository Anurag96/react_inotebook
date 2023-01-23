import React, { useContext,useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {
  const a = useContext(noteContext)

    return (
    <div>
      <h1>Welcome to About</h1>
      <p> Hello {a.name} and age is {a.age}</p>
    </div>
  )
}

export default About 
