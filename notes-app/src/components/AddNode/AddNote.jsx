import React from 'react';
import "./AddNote.css";
import { useState } from "react";

const AddNote = ({handleAddNote}) => {
    const [noteText, setNoteText] = useState('');
    const handleChange = (e) => {
        console.log(e.target.value);
        setNoteText(e.target.value);
        
    }

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote( noteText );
            setNoteText(''); 
        }
       
    }


    return (
        <div className='note new'>
            <textarea  rows="7" cols="128" placeholder='Type something here...' onChange={handleChange} value={noteText
            } ></textarea>
            <div className='note-footer'>
                <button className='save' onClick={ handleSaveClick }>Save</button>
            </div>
        </div>
    );
};

export default AddNote;