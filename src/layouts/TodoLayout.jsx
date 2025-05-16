// 공통 레이아웃임 list history settings 나뉨. 
import { Outlet, useParams, Link } from 'react-router-dom';

function TodoLayout() {
  const { username } = useParams();

  return (
    <div style={{ padding: '2rem' }}>
      <h1> {username}님의 할 일 공간</h1>
      <nav style={{ marginBottom: '1rem' }}>
        <Link to="list">할 일 목록</Link> |{" "}
        <Link to="history">완료한 일</Link> |{" "}
        <Link to="settings">설정</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default TodoLayout;