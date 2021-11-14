import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import authService from "../../../services/auth.service";

const Signup = () => {
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState("");
  const [input, setInput] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const history = useHistory();
  const [message, setMessage] = useState();
  // const [result, setResult] = useState({});

  async function postFormFetch() {
    // eslint-disable-next-line no-console
    console.log(input);
    // const settings = {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(input),
    // };
    // // eslint-disable-next-line no-console
    // console.log(JSON.stringify(input));
    // try {
    //   setLoading("true");
    //   const response = await fetch(
    //     `http://127.0.0.1:8080/api/auth/signup`,
    //     settings
    //   );
    //   const json = await response.json();
    //   if (response.status !== 200) throw Error(json.message);
    //   return json;
    // } catch (error) {
    //   // eslint-disable-next-line no-alert
    //   alert(error);
    //   setLoading("null");
    //   return error;
    // }
    authService
      .register(input.name, input.username, input.email, input.password)
      .then(
        () => {
          // eslint-disable-next-line no-console
          console.log(`Submitted username ${input.username}`);
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
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(input);
    postFormFetch();
  };

  const handleInputChange = (e) => {
    e.persist();
    setInput((userInput) => ({
      ...userInput,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="main">
      <div className="signup-wrap">
        <div className="h2">
          <h2>Sign up</h2>
        </div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="input-wrap">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              // onChange={(e) => setInput(e.target.value)}
              onChange={(e) => handleInputChange(e)}
              value={input.name}
              required
            />
            <br />
          </div>
          <div className="input-wrap">
            <input
              type="text"
              name="username"
              placeholder="Username"
              // onChange={(e) => setInput(e.target.value)}
              onChange={(e) => handleInputChange(e)}
              value={input.username}
              required
            />
            <br />
          </div>
          <div className="input-wrap">
            <input
              type="email"
              name="email"
              // onChange={(e) => setInput(e.target.value)}
              onChange={(e) => handleInputChange(e)}
              value={input.email}
              required
              placeholder="Email"
            />
          </div>
          <div className="input-wrap">
            <input
              type="password"
              name="password"
              placeholder="Password"
              // onChange={(e) => setInput(e.target.value)}
              onChange={(e) => handleInputChange(e)}
              value={input.password}
            />
          </div>
          <div className="signup-button-container">
            <button className="signup-buttom" type="submit">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
