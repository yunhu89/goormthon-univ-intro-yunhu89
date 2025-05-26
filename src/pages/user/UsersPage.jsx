import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error('유저 가져오기 실패:', err);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>유저 목록</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - <Link to={`/user/${user.id}/todos`}>To-do 보기</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersPage;