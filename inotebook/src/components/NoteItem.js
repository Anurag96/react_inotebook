import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/NoteContext'

function NoteItem(props) {
    const context = useContext(noteContext)
    const { deleteNote } = context

    const { note, updateNote } = props
    return (
        <div className='col-md-3 my-3'>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <hr/>
                    <p className="card-text">{note.description}</p>
                    <p className="card-text" style={{ width:"65px",backgroundColor: (note.tag == 'work') ? '#73c7af' : (note.tag == 'personal') ? "pink" : "yellow" }}>{note.tag}</p>
                    <hr/>
                    <i className='far fa-trash-alt mx-2' onClick={() => { deleteNote(note._id) }}></i>
                    <i className="far fa-edit mx-2" onClick={() => { updateNote(note) }}></i>
                </div>
            </div>

        </div>
    )
}

export default NoteItem
