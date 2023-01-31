import React, { useContext,useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

const About = () => {
  const a = useContext(noteContext)

  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, [])
  

    return (
    <div>
      <h1>Welcome to About</h1>
      <p> Hello {a.state.name} and age is {a.state.age}</p>
    </div>
  )
}

export default About 
