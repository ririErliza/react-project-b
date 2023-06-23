import { useState } from "react";
import {nanoid} from "nanoid";
import NotesList from "./components/NotesList";


function App() {
  const [notes,setNotes] = useState([{
    id: nanoid(),
    text: 'Notes text...',
    date: '04/04/23'
  },
  {
    id: nanoid(),
    text: 'second text...',
    date: '04/04/23'
  },
  {
    id: nanoid(),
    text: 'third text...',
    date: '04/04/23'
  }]);

  const addNote = (text) =>{
    console.log(text)

  }
  return (
    <div className="container">
      <NotesList notes={notes}/>
    </div>
  );
}

export default App;
