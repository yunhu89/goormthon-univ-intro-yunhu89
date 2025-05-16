// 기존 App.jsx 내용 그대로 복붙!
import { useState } from 'react';
import Information from '../../components/Information';
import Link from '../../components/Link';
import LikeViewcount from '../../components/LikeViewcount';
import { Container, Button } from '../../components/styles';
import { Link as RouterLink } from 'react-router-dom'; // 컴포넌트와 이름 충돌

function MyPage() {
  const [showLink, setShowLink] = useState(false);
  const velogUrl = "https://velog.io/@yunhu89"; 
  const githubUrl = "https://github.com/yunhu89";

  return (
    <Container>
      <Information name="김윤후" interest="Flutter / RN / React" />
      <Button onClick={() => setShowLink(prev => !prev)}> 
        {showLink ? "링크 숨김" : "링크 더보기"}
      </Button>
      <br />
      {showLink && (
        <>
          <Link url={velogUrl} text="벨로그 보러가기" />
          <br />
          <Link url={githubUrl} text="깃허브 보러가기" />
        </>
      )}
      <LikeViewcount />
    </Container>
  );
}

export default MyPage;