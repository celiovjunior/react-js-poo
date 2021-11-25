import { React } from 'react';
import { NotesList } from './components/NotesList';

function App() {
  return (
    <div>
      <form action="">
        <input type="text" placeholder="Title" />
        <textarea placeholder="Write your note" />
        <button>Post note</button>
      </form>
      <NotesList />
    </div>
  );
}

export default App;
