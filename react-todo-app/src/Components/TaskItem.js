import React, { Component } from 'react';

export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.taskItem.task,
      isEditing: false,
    };
  }
  setEditingState = (isEditing) => {
    this.setState({ isEditing: isEditing });
  };
  deleteTask = () => {
    this.props.deleteTask(this.props.id);
  };
  handleChange = (event) => {
    this.setState({ task: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.editTask(this.props.id, this.state.task);
    this.setState({ isEditing: false });
  };
  render() {
    return (
      <tr>
        {this.state.isEditing ? (
          <>
            <td>
              <form onSubmit={this.handleSubmit}>
                <input
                  value={this.state.task}
                  onChange={this.handleChange}
                  autoFocus
                />
              </form>
            </td>
            <td>
              <button type="submit" onClick={this.handleSubmit}>
                save
              </button>
              <button
                type="back"
                onClick={() => {
                  this.setEditingState(false);
                }}
              >
                back
              </button>
            </td>
          </>
        ) : (
          <>
            <td>{this.props.taskItem.task}</td>
            <td>
              <button onClick={() => this.setEditingState(true)}> edit </button>
              <button onClick={this.deleteTask}> delete</button>
            </td>
          </>
        )}
      </tr>
    );
  }
}
