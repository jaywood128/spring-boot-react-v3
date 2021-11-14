import { Link } from "react-router-dom";
import styled from "styled-components";

const UserIconLinkContainer = styled.div`
  display: flex;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  height: 60%;
  width: 30%;
  background-color: #404040;
`;

const StyledUserLink = styled(Link)`
  color: white;
  background-color: #181818;
  text-align: center;
  text-decoration: none;
  padding: 20px 20px;
  font-size: 1.2rem !important;
  font-family: "Roboto Mono";
  border-radius: 30%;
  border: 1.5px;
  margin: 10px 15px;

  :hover {
    background-color: rgba(64, 64, 64, 0.45);
    -webkit-box-shadow: 3px 5px 24px grey; /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */
    -moz-box-shadow: 3px 5px 24px grey; /* Firefox 3.5 - 3.6 */
    box-shadow: 5px 5px 10px grey;
  }
`;

export { UserIconLinkContainer, StyledUserLink };
