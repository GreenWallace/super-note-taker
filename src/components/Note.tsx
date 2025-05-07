import { NoteProps } from '../types';

function Note({ note, onDelete }: NoteProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold text-gray-800">{note.title}</h3>
      <p className="mt-2 text-gray-600">{note.content}</p>
      <button 
        onClick={() => onDelete(note.id)}
        className="mt-4 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Delete
      </button>
    </div>
  );
}

export default Note;