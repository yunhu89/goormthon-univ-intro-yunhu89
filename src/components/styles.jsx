import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 20px;
  text-align: center;
`;

export const Title = styled.h1`
  color: #333;
  margin-bottom: 1rem;
`;

export const Info = styled.p`
  color: #333;
  margin: 0.5rem 0;
  font-size: 1.1rem;
`;

export const Linkstyle = styled.a`
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

export const Button = styled.button`
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
export const GitLink = styled.a`
  font-size: 13px; 
  color:blue;
  &:hover {
    text-decoration: underline;
  }
`;

export const VelogLink = styled.a`
  font-size: 13px; 
  color: blue;
  &:hover {
    text-decoration: underline;
  }
`;