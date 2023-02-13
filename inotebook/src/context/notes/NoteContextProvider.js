import React, { useState,createContext } from "react";
import NoteContext from "./NoteContext";

const NoteContextProvider = (props) => {

    return (
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteContextProvider;