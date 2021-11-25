import { Component } from 'react';
import React from 'react';
import FormRegister from './components/FormRegister';
import NotesList from './components/NotesList';

class App extends Component {
  render() {
    return (
      <div>
        <FormRegister />
        <NotesList />
      </div>
    )
  }
}

export default App;
