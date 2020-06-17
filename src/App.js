import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'test',
          status: 'imcomplete',
        },
        {
          id: 2,
          title: 'test2',
          status: 'imcomplete',
        },
      ],
    };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo = (e) => {
    e.preventDefault();
    const todo = {
      id: this.state.todos.length + 1,
      title: e.target.title.value,
      status: 'imcomplete',
    };
    this.setState({
      todos: this.state.todos.concat(todo),
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
                <td>{todo.id}</td>
                <td className="todo-item__title">{todo.title}</td>
                <td className="button-wrapper">
                  <button>作業中</button>
                  <button>削除</button>
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
