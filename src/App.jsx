import styled from 'styled-components';
import { useEffect, useState } from 'react';
// flutter와 비슷한 css? 

/*
margin :외부 여백
padding : 내부 여백
border-radius : 컨테이너 모서리 둥글게
display 에서 
text - aligin : 텍스트 정렬 등... 그냥 똑같다 
rem = root em으로, 루트요소의 폰트 크기를 기준으로함. 1rem정= 16px
em = 현재 요소의 폰트 크키를 ,부모 요소에 따라 결정
*/ 

const Container = styled.div`
  max-width: 800px;
  max-height: 300px;
  margin: 3rem auto;
  margin-left: 16rem;
  padding: 8rem;
  background-color: #f5f5f5;
  border-radius: 20px;
  text-align: center;
`;


const Title = styled.h1`
  color: #333; 
  margin-bottom: 1rem;
`;

//color : black 
const Info = styled.p`
  color: #333;
  margin: 0.5rem 0;
  font-size: 1.1rem;
`;

//dispaly는 페이지에 요소가 어떻게 나타날지 정함
/* inline-block : 줄바꿈x 크기 지정 가능
   block : 줄바꿈o 가로 전체 차지
   flex : 요소를 가로 or 세로로 정렬 등... 
   grid : 격자 레이아웃 -> GridView? 
   none : 요소 숨기기 
*/
const Link = styled.a`
  display: inline-block;
  margin-top: 1rem;
  color: #0070f3;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
    color: #0051aa;
  }
`;

const Button = styled.button`
padding: 0.7rem 1.6rem;
margin: 0.4rem;
background-color: #000000;
border: none;
border-radius: 10px;
font-size: 0.8rem;
 &:hover {
    background-color: #0051aa;
    color: #FFFFFF;
  }
`;

const clr = {
  color : 'black'
}; //텍스트 색 

function App() {
  /* flutter에서 onPressed와 동일한 기능. -> 버튼 누르면 효과 및 팝업 나타나는 기능. 
    onClick, onChange, onSumbit와 같은 이벤트 타입을 주로 활용함. 
    <button onClick={핸들러함수}>버튼</button> 이렇게 사용함. 
    console.log, setState, navigate, fetch/axios 등등 다양한 동작 활용 가능*/
  
    /* const handleClick = () =>  {
    alert("React handler 기능 테스트중입니다.")
  }; */
  const handleClickInfo = () => {
   // alert("뻥이야😂")
    setCount(count + 1);
    if(count >= 10) {
      alert("와우 10번이나 눌렀어! 그만 눌러")
    }
  }; 

  const [count, setCount] = useState(0); 
  const [view, setViews] = useState(0);
  const [like, setLikes] = useState(0);
  //coun는 실행할 함수, setCount는 의존성 배열임. 의존성 배열이 핵심임 
  
  /* useEffect(() => {
    데이터 불러오기~;
  }, []); //빈 배열이면 처음 페이지가 열릴때 단 한번 실행. 
  */ 
  useEffect(() => {
    alert("어서오세요, 반갑습니다!")
    setViews((view) => view + 1);
  }, []);
  
  const handleLike = () => setLikes((like) => like + 1); //좋아요 버튼 
  return (
    <Container>
      <Title>안녕하세요 저는 김윤후입니다.</Title>
      <Info>앱/웹 프론트엔드 개발자 지망하고 있습니다.</Info>
      <Info>관심 기술: Flutter / RN / React  </Info>
      <Link href="https://velog.io/@yunhu89" target="_blank">블로그 보러가기</Link>
      
    <div>
      <h3 style={{color: 'black'}}>누른 횟수: {count}회</h3>
      <p style={clr}>좋아요: {like}</p>
      <p style={clr}>조회수: {view}</p>
      <Button onClick={handleLike}>좋아요 누르기</Button>
    </div>
    </Container>
  );
}

 // <button style={{marginRight: '1rem'}}onClick={handleClick}>Test</button>
 // <button onClick={handleClickInfo}>Info</button> 
 // <Button onClick={handleClickInfo}>누르기</Button>

export default App;