import React, { Component } from 'react';
import './style.css'

class NoteCard extends React.Component {
    render() { 
        return(
            <section className="note-card">
            <header>
                <h3>Title</h3>
            </header>
            <p>Write your post</p>
            </section>
        ) 
    }
}
 
export default NoteCard;