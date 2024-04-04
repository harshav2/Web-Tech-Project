import React, { useState } from "react";
import SideBar from "./SideBar";
import "./WorkoutComponent.css"; // Import your stylesheet

const WorkoutComponent = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleAddNote = () => {
    if (newNote.trim() !== "") {
      setNotes([...notes, { id: Date.now(), text: newNote }]);
      setNewNote("");
    }
  };

  const handleDeleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div className="overall">
      <div className="side-container">
        <SideBar />
      </div>
      <div className="content-container">
        <h1>Workout Notes</h1>

        <label>
          Add Note:
          <input
            type="text"
            value={newNote}
            onChange={handleNoteChange}
            style={{ margin: "8px 0" }}
          />
        </label>

        <button onClick={handleAddNote} style={{ marginTop: "16px" }}>
          Add Note
        </button>

        <ul
          className="notes-list"
          style={{ marginTop: "16px", paddingInlineStart: "20px" }}
        >
          {notes.map((note) => (
            <li key={note.id}>
              {note.text}
              <button
                onClick={() => handleDeleteNote(note.id)}
                style={{ marginLeft: "8px" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkoutComponent;
