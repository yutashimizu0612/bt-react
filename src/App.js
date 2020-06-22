import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo = (e) => {
    e.preventDefault();
    if (e.target.title.value) {
      const todo = {
        title: e.target.title.value,
        complete: false,
      };
      this.setState({
        todos: this.state.todos.concat(todo),
      });
      // タスクを追加後、フォームの値を空にする
      e.target.title.value = '';
    }
  };

  toggleTodoStatus = (todoIndex) => {
    const todos = this.state.todos.map((todo, index) => {
      // ボタン押下のtodoのみcompleteのステータスを変更
      if (todoIndex === index) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    this.setState({ todos });
  };

  deleteTodo = (index) => {
    this.state.todos.splice(index, 1);
    this.setState({
      todos: this.state.todos,
    });
  };

  render() {
    return (
      <div className="wrapper">
        <h1>ToDoリスト</h1>
        <ul className="progress-list">
          <li>
            <input type="radio" name="progress" id="all" />
            <label htmlFor="all">すべて</label>
          </li>
          <li>
            <input type="radio" name="progress" id="working" />
            <label htmlFor="working">作業中</label>
          </li>
          <li>
            <input type="radio" name="progress" id="complete" />
            <label htmlFor="complete">完了</label>
          </li>
        </ul>
        <table className="todo-status">
          <thead>
            <tr>
              <th>ID</th>
              <th>コメント</th>
              <th>状態</th>
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map((todo, index) => (
              <tr key={index} className="todo-item">
                <td>{index}</td>
                <td className="todo-item__title">{todo.title}</td>
                <td className="button-wrapper">
                  <button
                    onClick={() => this.toggleTodoStatus(index)}
                    className="button"
                  >
                    {todo.complete ? '完了' : '作業中'}
                  </button>
                  <button
                    onClick={() => this.deleteTodo(index)}
                    className="button"
                  >
                    削除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <section>
          <h2>新規タスクの追加</h2>
          <form onSubmit={this.addTodo}>
            <input type="text" name="title" />
            <input type="submit" value="追加" className="add-button" />
          </form>
        </section>
      </div>
    );
  }
}

export default App;
