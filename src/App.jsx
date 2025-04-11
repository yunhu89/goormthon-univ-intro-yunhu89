import styled from 'styled-components';
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
  color: #FF2D00;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

function App() {
  return (
    <Container>
      <Title>안녕하세요 저는 김윤후입니다.</Title>
      <Info>앱/웹 프론트엔드 개발자 지망하고 있습니다.</Info>
      <Info>관심 기술: Flutter / RN / React / TypeScript </Info>
      <Link href="https://velog.io/@jeong011010" target="_blank">블로그 보러가기</Link>
    </Container>
  );
}

export default App;