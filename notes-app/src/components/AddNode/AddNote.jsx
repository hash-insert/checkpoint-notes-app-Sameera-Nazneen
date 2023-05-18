import React from 'react';
import "./AddNote.css"
const AddNote = () => {
    return (
        <div className='add-note'>
            <textarea  name = "addNote" rows = "7" cols="128" placeholder='Type something here...' ></textarea>
            <div className='note-footer'>
                <button className='save'>Save</button>
            </div>
        </div>
    );
};

export default AddNote;