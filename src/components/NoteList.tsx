import { NoteListProps } from '../types';
import Note from './Note';

function NoteList({ notes, onDelete }: NoteListProps) {
  return (
    <div className="grid grid-cols-1 gap-4">
      {notes.map(note => (
        <Note 
          key={note.id} 
          note={note} 
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default NoteList; 