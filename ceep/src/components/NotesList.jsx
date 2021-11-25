import React, { Component } from 'react';
import NoteCard from './NoteCard';

class NotesList extends Component {
    render() {
        return(
        <ul>
          {Array.of("Work", "Work", "Study").map(category => {
            return(
              <li>
                <h2>{ category }</h2>
                <NoteCard />
              </li>
            )
          })}
        </ul>
        );
    }
}

export default NotesList;