import React from 'react';
import NoteList from './components/NoteList/NoteList';
import "./App.css";
import { useState } from 'react';
import { nanoid } from "nanoid";
import Header from "./components/Header"
import AddNote from "./components/AddNode/AddNote";
import Search from './components/Search/Search';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState(''); 
 
  const addNote = ( text ) => {
    console.log(text);
    const date = new Date();
    const newNote = {
      id : nanoid(),
      text : text,
      date : date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id );
    setNotes(newNotes);
  }
  return (
    <div className='container'>
      <Header/>
      <Search handleSearchNote = {setSearchText}/>
      <AddNote handleAddNote={addNote}/>
      
      <NoteList notes = {notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote = {addNote} handleDeleteNote = {deleteNote}/>
    </div>
  );
};

export default App;
