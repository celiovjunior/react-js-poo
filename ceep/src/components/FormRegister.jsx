import React from "react";
import { Component } from "react";

// no caso de criar componentes atraves de classes, deve-se usar o método render()
class FormRegister extends Component {
    render() {
        return(
        <form action="">
            <input type="text" placeholder="Title" />
            <textarea placeholder="Write your note" />
            <button>Post note</button>
        </form>
        )
    }
}

export default FormRegister