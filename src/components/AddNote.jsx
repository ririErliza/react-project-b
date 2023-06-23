import React, { useState } from 'react'

function AddNote() {
  const[noteText,setNoteText]=useState('');

  const handleChange = (event) =>{
    // console.log(event.target.value)
    setNoteText(event.target.value)
  }
  return (
    <div className='note new'>
        <textarea 
            cols="10" 
            rows="8"
            placeholder='Type to add a note...'
            onChange={handleChange}
            value={noteText}
        ></textarea>
        <div className="note-footer">
            <small>... Remaining</small>
            <button className="save">Save</button>
        </div>
    </div>
  )
}

export default AddNote
