import { useState } from "react";
import {nanoid} from "nanoid";
import NotesList from "./components/NotesList";


function App() {
  const [notes,setNotes] = useState([{
    id: nanoid(),
    text: 'Notes text...',
    date: '04/04/23'
  }
]);

  const addNote = (text) =>{
    // console.log(text)
    const date = new Date();
    const newNote = {
      id:nanoid(),
      text:text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes,newNote];
    setNotes(newNotes)
  }

  const deleteNote = (id) =>{
    const newNotes = notes.filter((note)=> notes.id !== id)
    setNotes(newNotes)

  }
  return (
    <div className="container">
      <NotesList 
      notes={notes} 
      handleAddNote={addNote}
      handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
