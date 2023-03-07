import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteContextProvider = (props) => {

  const host = "http://localhost:5000"

  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial)

  //Get all notes
  const getNotes = async () => {

    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlYmU0MjBiYWI1MTVkNDFlZjZiOGJkIn0sImlhdCI6MTY3NjQwMzc0NH0.CWQmSUQzyhioyU_Y2ZcuOS6KGzrud4z-rmCr7INkeuY"
      }
    });
    const json = await response.json();
    setNotes(json)

  }


  //Add a note
  const addNote = async (title, description, tag) => {

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",    
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlYmU0MjBiYWI1MTVkNDFlZjZiOGJkIn0sImlhdCI6MTY3NjQwMzc0NH0.CWQmSUQzyhioyU_Y2ZcuOS6KGzrud4z-rmCr7INkeuY"
      },
      body: JSON.stringify({title,description,tag})
    });

    const note = {
      "_id": "63ebe5bbbab515d41ef66b8bf",
      "user": "63ebe420bab515d41ef6b8bd4",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-02-14T19:49:15.366Z",
      "__v": 0
    }

    setNotes(notes.concat(note))
  }

  //Delete a note
  const deleteNote = async(id) => {
    
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlYmU0MjBiYWI1MTVkNDFlZjZiOGJkIn0sImlhdCI6MTY3NjQwMzc0NH0.CWQmSUQzyhioyU_Y2ZcuOS6KGzrud4z-rmCr7INkeuY"
      }
    });
    // const json = response.json();

    // console.log('Deleting the note with id' + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  //Edit a note
  const editNote = async (id, title, description, tag) => {

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",    
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlYmU0MjBiYWI1MTVkNDFlZjZiOGJkIn0sImlhdCI6MTY3NjQwMzc0NH0.CWQmSUQzyhioyU_Y2ZcuOS6KGzrud4z-rmCr7INkeuY"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json();

    let newNotes = JSON.parse(JSON.stringify(notes))

    //console.log('Editing the note with id');
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }

    }
    setNotes(newNotes)
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )

}

export default NoteContextProvider;