import React, {Component} from 'react';

export default class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            todoText: "",
        };
    }

    handleChanges = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value,
        });
    };

    render() {
        return (
            <form>
                <label htmlFor="todo-input">Add Todo: </label>
                <input 
                    id="todo-input" 
                    name= "todoText"
                    value={this.state.todoText}
                    onChange={this.handleChanges}
                    />
            </form>
        )
    }
}