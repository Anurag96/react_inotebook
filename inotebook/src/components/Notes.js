import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem'
import AddNote from './AddNote'

function Notes() {
  const context = useContext(noteContext)
  const { notes, getNotes } = context
  useEffect(() => {
    getNotes()
  }, [])

  return (
    <>

      <AddNote />
      <div className='row'>
        <h1>Your Notes</h1>
        {
          notes.map(note => {
            return <NoteItem key={note._id} note={note} />
          })
        }
      </div>
    </>
  )
}

export default Notes
