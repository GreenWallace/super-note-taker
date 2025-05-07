export interface Note {
    id: number;
    title: string;
    content: string;
  }
  
  export interface NoteListProps {
    notes: Note[];
    onDelete: (id: number) => void;
  }
  
  export interface NoteProps {
    note: Note;
    onDelete: (id: number) => void;
  }
  
  export interface NoteFormProps {
    onSubmit: (note: Omit<Note, 'id'>) => void;
  }