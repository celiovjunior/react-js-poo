import React, { Component } from 'react';
import NoteCard from './NoteCard';

class NotesList extends Component {
    render() {
        return(
        <ul>
            <li>
              <NoteCard />
            </li>
            <li>
              <NoteCard />
            </li>
            <li>
              <NoteCard />
            </li>
            <li>
              <NoteCard />
            </li>
        </ul>
        );
    }
}

export default NotesList;