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

      const [notes, setnotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{notes,setnotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteContextProvider;