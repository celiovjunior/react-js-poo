import React, { Component } from 'react';
import NoteCard from './NoteCard/NoteCard';

class NotesList extends Component {
    render() {
        return(
        <ul>
          {Array.of("Work", "Work", "Study").map((category, index) => {
            return(
              <li key={index}>
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