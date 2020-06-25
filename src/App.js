import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      display: 'all',
    };
  }

  addTodo = (e) => {
    e.preventDefault();
    if (e.target.title.value) {
      const todos = this.state.todos;
      const todo = {
        id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
        title: e.target.title.value,
        status: 'working', // working/complete
      };
      this.setState({
        todos: todos.concat(todo),
      });
      // タスクを追加後、フォームの値を空にする
      e.target.title.value = '';
    }
  };

  toggleTodoStatus = (todoId) => {
    const todos = this.state.todos.map((todo) => {
      // ボタン押下のtodoのみstatusのステータスを変更
      if (todoId === todo.id) {
        if (todo.status === 'working') {
          todo.status = 'complete';
        } else {
          todo.status = 'working';
        }
      }
      return todo;
    });
    this.setState({ todos });
  };

  changeDisplayStatus = (e) => {
    this.setState({
      display: e.target.value,
    });
  };

  deleteTodo = (id) => {
    const filterdTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: filterdTodos,
    });
  };

  render() {
    return (
      <div className="wrapper">
        <h1>ToDoリスト</h1>
        <ul className="progress-list">
          <li>
            <input
              type="radio"
              value="all"
              name="progress"
              id="all"
              onChange={(e) => this.changeDisplayStatus(e)}
            />
            <label htmlFor="all">すべて</label>
          </li>
          <li>
            <input
              type="radio"
              value="working"
              name="progress"
              id="working"
              onChange={(e) => this.changeDisplayStatus(e)}
            />
            <label htmlFor="working">作業中</label>
          </li>
          <li>
            <input
              type="radio"
              value="complete"
              name="progress"
              id="complete"
              onChange={(e) => this.changeDisplayStatus(e)}
            />
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
            {this.state.todos
              // 表示ステータスが一致or'all'の場合のみレンダリング
              .filter(todo => this.state.display === 'all' || this.state.display === todo.status)
              .map((todo) => (
                <tr key={todo.id} className="todo-item">
                  <td>{todo.id}</td>
                  <td className="todo-item__title">{todo.title}</td>
                  <td className="button-wrapper">
                    <button
                      onClick={() => this.toggleTodoStatus(todo.id)}
                      className="button"
                    >
                      {todo.status === 'complete' ? '完了' : '作業中'}
                    </button>
                    <button
                      onClick={() => this.deleteTodo(todo.id)}
                      className="button"
                    >
                      削除
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
        <section>
          <h2>新規タスクの追加</h2>
          <form onSubmit={(e) => this.addTodo(e)}>
            <input type="text" name="title" />
            <input type="submit" value="追加" className="add-button" />
          </form>
        </section>
      </div>
    );
  }
}

export default App;
