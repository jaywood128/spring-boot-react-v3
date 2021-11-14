import styled from "styled-components";

const SignInContainerStyles = styled.div`
  display: flex;
  justify-content: center;
  background-color: yellow;
`;
const InputWrapContainer = styled.div`
  background-color: purple;
  padding: 20px;
`;

const SignInButtonContainer = styled.div`
  background-color: red;
  /* display: flex;
  align-items: center; */
`;

const BreakStylesContainer = styled.div`
  flex-basis: 100%;
  height: 0;
  background-color: greenyellow;
`;

export {
  SignInContainerStyles,
  InputWrapContainer,
  SignInButtonContainer,
  BreakStylesContainer,
};
