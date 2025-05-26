import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserTodosPage() {
  const { userId } = useParams();
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUserAndTodos() {
      try {
        const [userRes, todosRes] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
          fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
        ]);
        const userData = await userRes.json();
        const todosData = await todosRes.json();

        setUser(userData);
        setTodos(todosData);
      } catch (err) {
        console.error('데이터 가져오기 실패:', err);
      }
    }

    fetchUserAndTodos();
  }, [userId]);

  return (
    <div>
      <h2>{user ? `${user.name}님의 할 일 목록` : '로딩 중...'}</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} readOnly />
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserTodosPage;