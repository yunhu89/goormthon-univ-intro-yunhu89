import { useParams } from 'react-router-dom';

function UserPage() {
  const { username } = useParams();

  return (
    <div style={{ padding: '2rem' }}>
      <h1>어서오세요, {username}님!</h1>
      <p>이 페이지는 useParams를 활용해 유저별로 바뀌는 동적 페이지입니다. </p>
      <p>한번 url 뒤의 본인의 이름을 쳐보세요</p>
    </div>
  );
}

export default UserPage;