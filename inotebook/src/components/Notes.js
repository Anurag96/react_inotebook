import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/NoteContext'
import NoteItem from './NoteItem'
import AddNote from './AddNote'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Notes() {
  const context = useContext(noteContext)
  const { notes, getNotes } = context


  useEffect(() => {
    getNotes()
  }, [])

  const ref = useRef(null)

  const [note, setNote] = useState({ etitle: "", edescription: "", etag: "" })

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag})
  }

  const handleClick = (e) => {
    setShow(false);
    e.preventDefault();

  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  return (
    <>
      <AddNote />
      <Button ref={ref} variant="primary" className='d-none' onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="title">Title</label>
              <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} onChange={onChange} />
            </div>

            <div className="mb-3">
              <label htmlFor="description">Description</label>
              <input type="text" className="form-control" id="edescription" name='edescription' value={note.edescription} onChange={onChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="tag">Tag</label>
              <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange} />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClick}>
            Update Notes
          </Button>
        </Modal.Footer>
      </Modal>

      <div className='row'>
        <h1>Your Notes</h1>
        {
          notes.map(note => {
            return <NoteItem key={note._id} updateNote={updateNote} note={note} />
          })
        }
      </div>
    </>
  )
}

export default Notes
