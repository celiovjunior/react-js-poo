import React, { Component } from 'react';

export class NotesList extends Component {
    render() {
        return(
        <ul>
            <li>
              <section>
                <header>
                  <h3>Title</h3>
                </header>
                <p>Write your post</p>
              </section>
            </li>
        </ul>
        );
    }
}