import { Title, Info } from './styles';

function Information({name, interest}) {
	return (
	<div>
		<Title>안녕하세요 저는 {name} 입니다.</Title>
 	   <Info>앱/웹 프론트엔드 개발자 지망하고 있습니다.</Info>
 	   <Info>관심 기술: {interest} </Info>
	</div>
	);
}

export default Information;