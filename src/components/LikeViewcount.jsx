import { useEffect, useState } from 'react';
import { Button } from './styles';

const LikeViewcount = () => {
  const [like, setLikes] = useState(0);
  const [view, setViews] = useState(0);
  /* 조회수가 2씩 증가하는 일이 생김 -> useEffect가 2번 실행되기 때문이다. 
  main.jsx 에서 Striptmode 태그로 app태그가 감싸져있기 때문에 이를 지움 
  -> 그렇다면 왜 존재하는 것일까? Striptmode는 검사 도구이다. 
  */
  useEffect(() => {
    const storedLike = localStorage.getItem('likeCount');
    if (storedLike) setLikes(parseInt(storedLike));

    const storedView = localStorage.getItem('viewCount');
    const newView = storedView ? parseInt(storedView) + 1 : 1;
    setViews(newView);
    localStorage.setItem('viewCount', newView.toString());
  }, []);

  const handleLike = () => {
    if (localStorage.getItem('alreadyLiked') === 'true') {
      alert('이미 좋아요를 누르셨습니다.');
      return;
    }

    const newLike = like + 1;
    setLikes(newLike);
    localStorage.setItem('likeCount', newLike.toString());
    localStorage.setItem('alreadyLiked', 'true');
  };

  return (
    <div>
      <p style={{ color: 'black' }}>좋아요: {like}</p>
      <p style={{ color: 'black' }}>조회수: {view}</p>
      <Button onClick={handleLike}>좋아요 누르기</Button>
    </div>
  );
};

export default LikeViewcount;