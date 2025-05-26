import { Outlet, useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function TodoLayout() {
  const { username } = useParams();
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <header style={{
        position: 'sticky',
        top: 0,
        backgroundColor: '#1a1a1a',
        padding: '1rem',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: 'white',
        zIndex: 10,
        borderBottom: '1px solid #333'
      }}>
        {username}님의 할 일 공간
      </header>

      <nav style={{
        marginTop: '1rem',
        marginBottom: '1.5rem',
        color: 'skyblue',
        display: 'flex',
        gap: '1rem'
      }}>
       {username ? (
    <>
      <Link to={`/todoapp/${username}/list`}>할 일 목록</Link>
      <Link to={`/todoapp/${username}/history`}>완료한 일</Link>
      <Link to={`/todoapp/${username}/settings`}>설정</Link>
    </>
  ) : (
    <>
      <Link to="/todoapp/list">할 일 목록</Link>
      <Link to="/todoapp/history">완료한 일</Link>
      <Link to="/todoapp/settings">설정</Link>
    </>
  )}
      </nav>

      <div style={{ marginBottom: '1.5rem' }}>
        <strong style={{ color: 'white' }}>다른 유저 To-do 보기:</strong>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
          {users.map(user => (
           <button //버튼을 누르면 Todo list를 불러올 수 있게 해야함. 근데 json 링크에는 안보이는게 리스트로 불러와지네 
               key={user.id}
              onClick={() => navigate(`/todoapp/${user.username}/list`)}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#333',
                color: 'white',
                borderRadius: '8px',
                border: '1px solid #555',
                cursor: 'pointer'
              }}
               >
              {user.username}
            </button>
          ))}
        </div>
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default TodoLayout;