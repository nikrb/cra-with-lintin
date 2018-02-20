import styled from 'styled-components';

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
