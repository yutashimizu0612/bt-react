import React from 'react';
import './App.css';

function App() {
  const todos = [
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
  ];

  const addTodo = (e) => {
    e.preventDefault();
    const todo = {
      id: todos.length + 1,
      title: e.target.title.value,
      status: 'imcomplete',
    };
  };

  return (
    <div className="wrapper">
      <h1>ToDoリスト</h1>
      <ul className="progress-list">
        <li>
          <input type="radio" name="progress" id="all" />
          <label for="all">すべて</label>
        </li>
        <li>
          <input type="radio" name="progress" id="working" />
          <label for="working">作業中</label>
        </li>
        <li>
          <input type="radio" name="progress" id="complete" />
          <label for="complete">完了</label>
        </li>
      </ul>
      <table class="todo-status">
        <thead>
          <tr>
            <th>ID</th>
            <th>コメント</th>
            <th>状態</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
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
        <form onSubmit={addTodo}>
          <input type="text" name="title" />
          <input type="submit" value="追加" className="add-button" />
        </form>
      </section>
    </div>
  );
}

export default App;
