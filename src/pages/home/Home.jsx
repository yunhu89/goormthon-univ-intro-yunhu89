import { Link, useParams } from 'react-router-dom';

function Home() {
  const { username } = useParams();
  return (
    <div>
      <h1>  홈페이지와 투두 리스트... </h1>
      <br></br>
      {/* Link로 감싼 버튼: 클릭 시 /mypage로 이동 */}
      <Link to="/mypage">
        <button>My Page로 고고씽</button>
      </Link>
       <Link to="/todoapp">
        <button>투두리스트로 고고씽</button>
      </Link>
    </div>
  );
}

export default Home;