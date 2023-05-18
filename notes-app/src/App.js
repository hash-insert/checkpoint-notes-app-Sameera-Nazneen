import React from 'react';
import NoteList from './components/NoteList/NoteList';
import "./App.css";
import { useState } from 'react';
import { nanoid } from "nanoid";
import Header from "./components/Header"
import AddNote from "./components/AddNode/AddNote"
const App = () => {
  const [notes, setNotes] = useState([
    {
      id : nanoid(),
      text : "Hello! This is my first note",
      date : "13/09/23"
    },
    {
      id : nanoid(),
      text : "Hello! This is my secomd note",
      date : "13/09/23"
    },
    {
      id : nanoid(),
      text : "Hello! This is my third note",
      date : "13/09/23"
    },
    {
      id : nanoid(),
      text : "Hello! This is my last note",
      date : "13/09/23"
    }
  ]);

  return (
    <div className='container'>
      <Header/>
      <AddNote/>
      <NoteList notes = {notes}/>
    </div>
  );
};

export default App;
