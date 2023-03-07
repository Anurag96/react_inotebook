import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteContextProvider = (props) => {

    const notesInitial = [
        {
          "_id": "63ebe5bbbab515d41ef66b8bf",
          "user": "63ebe420bab515d41ef6b8bd",
          "title": "02/14-Todays Tasks",
          "description": "Go to the gym after the office",
          "tag": "general",
          "date": "2023-02-14T19:49:15.366Z",
          "__v": 0
        },
        {
          "_id": "63ebe677def5d5531829c523",
          "user": "63ebe420bab515d41ef6b8bd",
          "title": "02/14-Todays Tasks",
          "description": "Cook Dinner after gym.",
          "tag": "general",
          "date": "2023-02-14T19:52:23.924Z",
          "__v": 0
        },{
            "_id": "63ebe5bbbab515d41ef65b8bf",
            "user": "63ebe420bab515d41ef6b8bd",
            "title": "02/14-Todays Tasks",
            "description": "Go to the gym after the office",
            "tag": "general",
            "date": "2023-02-14T19:49:15.366Z",
            "__v": 0
          },
          {
            "_id": "63ebe677def5d5531829c34243",
            "user": "63ebe420bab515d41ef6b8bd",
            "title": "02/14-Todays Tasks",
            "description": "Cook Dinner after gym.",
            "tag": "general",
            "date": "2023-02-14T19:52:23.924Z",
            "__v": 0
          },{
            "_id": "63ebe5bbbab515d41ef6b8bf3",
            "user": "63ebe420bab515d41ef6b8bd",
            "title": "02/14-Todays Tasks",
            "description": "Go to the gym after the office",
            "tag": "general",
            "date": "2023-02-14T19:49:15.366Z",
            "__v": 0
          },
          {
            "_id": "63ebe677def5d5531829c3233",
            "user": "63ebe420bab515d41ef6b8bd",
            "title": "02/14-Todays Tasks",
            "description": "Cook Dinner after gym.",
            "tag": "general",
            "date": "2023-02-14T19:52:23.924Z",
            "__v": 0
          }
      ]

      const [notes, setNotes] = useState(notesInitial)

      //Add a note
      const addNote = (title,description,tag) =>{
         const note = {
          "_id": "63ebe5bbbab515d41ef66b8bf",
          "user": "63ebe420bab515d41ef6b8bd4",
          "title":title,
          "description": description,
          "tag": tag,
          "date": "2023-02-14T19:49:15.366Z",
          "__v": 0
        }

        setNotes(notes.concat(note))
      }

      //Delete a note
      const deleteNote = (id) =>{
        console.log('Deleting the note with id'+id);
      const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
      }

      //Edit a note
      const editNote = (id,title,description,tag) =>{
        console.log('Editing the note with id');
        setNotes()
      }

    return (
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteContextProvider;