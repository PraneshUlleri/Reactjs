import React from 'react';
import CreateTask from './CreateTask';
import TaskList from './TaskList';

const tasks = [];
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks,
    };
  }
  createTask = (task) => {
    if (task.trim() === '') {
      alert('Task cant be empty');
      return;
    }
    tasks.push({ task, isCompleted: false });
    this.setState({ tasks: tasks });
  };

  deleteTask = (id) => {
    tasks.splice(id, 1);
    this.setState({ tasks: tasks });
  };
  editTask = (id, task) => {
    const taskItem = tasks[id];
    taskItem.task = task;
    this.setState({ tasks: tasks });
  };
  toggleTask = (id) => {
    const taskItem = tasks[id];
    taskItem.isCompleted = !taskItem.isCompleted;
    this.setState({ tasks: tasks });
  };
  render() {
    return (
      <div className="main">
        <h1>TODOs</h1>
        <div className="content">
          <CreateTask createTask={this.createTask} />
          <br />
          <TaskList
            tasks={this.state.tasks}
            editTask={this.editTask}
            deleteTask={this.deleteTask}
            toggleTask={this.toggleTask}
          />
        </div>
      </div>
    );
  }
}
export default Main;
