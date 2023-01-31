import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const s1 = {
        "name": "Anurag",
        "age": "29"
    }

    const [state, setstate] = useState(s1)

    const update = () => {
        setTimeout(() => {
            setstate(
                {
                    "name": "Kumar",
                    "age": "30"
                }
            )
        }, 2000);
    }

    return (
        <NoteContext.Provider value={{ state, update }}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState;