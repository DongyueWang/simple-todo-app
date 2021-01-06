import React from "react";
import TodoItem from "./TodoItem";
class TodosList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => (
          <TodoItem
            deleteTodoProps={this.props.deleteTodoProps}
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
          />
        ))}
      </div>
    );
  }
}
export default TodosList;
