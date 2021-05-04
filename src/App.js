import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: [
        {
          labor: 'Organize Garage',
          id: 1528817077286,
          completed: false
         },
         {
          labor: 'Bake Cookies',
          id: 1528817084358,
          completed: false
         }
      ],
    };
  }

 //new array with changed data(completed: true), pass in id of task that was clicked
  toggleCompleted = (id) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        } else {
          return task;
        }
      }),
    });
  };

  addItem = (laborName) => {
    const newTask = {
      labor: laborName,
      id: new Date(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          tasks={this.state.tasks} 
          toggleCompleted={this.toggleCompleted}
          />
        <TodoForm addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
