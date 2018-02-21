import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  color: palevioletred;
`;

export const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  border: 2px solid transparent;

  &:focus {
    // outline: 2px solid green;
    border: 2px solid green;
  }
`;

export const CoolStyledButton = styled.button`
  background-color: #bada55;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 2px gray;
  margin: 2rem;
  outline: none;
  padding: 0.5rem;
  position: relative;
  width: 250px;

  &:active {
    box-shadow: 0 0 transparent;
    top: 1px;
  }
`;

export const IntroText = styled.p`
  font-size: 2rem;
`;

export const TitleWithParameter = styled.h1`
  color: ${p => (p.danger ? 'red' : 'inherit')};
  font-size: 2rem;
`;
