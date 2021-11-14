import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import authService from "../../../services/auth.service";

import {
  SignInContainerStyles,
  InputWrapContainer,
  SignInButtonContainer,
} from "./SignInContainerStyles";

// eslint-disable-next-line no-unused-vars
const SignInTitleStyles = styled.h2`
  color: white;
  font-size: 3rem;
  padding: 0 20px;
  text-decoration: none;
  font-family: "Poppins";
`;

const SignIn = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const history = useHistory();

  const [message, setMessage] = useState("");

  const submitSignIn = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log("Inside submit sign in");
    // eslint-disable-next-line no-console
    console.log(input);
    authService.login(input.username, input.password).then(
      () => {
        // eslint-disable-next-line no-console
        console.log(authService.getCurrentUser);
        history.push("/");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
        // eslint-disable-next-line no-console
        console.log(message);
      }
    );
  };

  const handleInputChange = (e) => {
    e.persist();

    setInput((userInput) => ({
      ...userInput,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <SignInContainerStyles>
      <SignInTitleStyles>Sign in</SignInTitleStyles>
      <form onSubmit={(e) => submitSignIn(e)}>
        <InputWrapContainer>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={(e) => handleInputChange(e)}
            value={input.username}
            required
          />
          <br />
        </InputWrapContainer>
        <InputWrapContainer>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => handleInputChange(e)}
            value={input.password}
          />
        </InputWrapContainer>
        <SignInButtonContainer>
          <button type="submit">Submit</button>
        </SignInButtonContainer>
      </form>
    </SignInContainerStyles>
  );
};

export default SignIn;
