import styled from "styled-components";
import { VelogLink } from './styles';

function Link({ url, text }) {
	if (!url) return null; //url이 없으면 아무것도 렌더링 x 
	//{조건 && <렌더링할_내용 />}
	return (
	<VelogLink href={url} target="_blank" rel="noopener noreferrer">
      {text}
    </VelogLink>
	);
};
export default Link;