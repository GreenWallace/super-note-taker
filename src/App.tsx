import { useState } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import { Note } from './types';
import './App.css';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (note: Omit<Note, 'id'>) => {
    setNotes([...notes, { id: Date.now(), ...note }]);
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 grid grid-cols-1 gap-6">
      <h1 className="text-3xl font-bold text-gray-800">My Super Note Taker</h1>
      <NoteForm onSubmit={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}

export default App;