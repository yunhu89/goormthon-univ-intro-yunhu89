import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function TodoList() {
  const { username } = useParams();
  const [todos, setTodos] = useState([]);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch users');
        return res.json();
      })
      .then(users => {
        const user = users.find(u => u.username === username);
        if (user) {
          setUserId(user.id);
        } else {
          throw new Error(`유저 ${username}를 찾지 못했습니다`);
        }
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, [username]); //username값이 변할때마다 실행됨 

  useEffect(() => {
    if (userId) {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
        .then(res => {
          if (!res.ok) throw new Error('Failed to fetch todos');
          return res.json();
        })
        .then(data => {
          setTodos(data);
          setLoading(false);
        })
        .catch(err => {
          console.error(err);
          setError(err.message);
          setLoading(false);
        });
    }
  }, [userId]); //userId값이 변할때마다 실행됨

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;

  return (
    <div>
      <h2>{username}님의 To-do 리스트</h2>
      {todos.length === 0 ? (
        <p>할 일이 없습니다.</p>
      ) : (
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <input type="checkbox" checked={todo.completed} readOnly />
              {todo.title}
            </li> //map함수를 활용해서 토글 체크 
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;