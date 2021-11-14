import React from "react";
import { FaSignOutAlt, FaSignInAlt } from "react-icons/fa";
import AuthService from "../../../services/auth.service";
import UserService from "../../../services/user.service";
// import { LinkIcon } from "../vertical-nav-bar/VerticalNavBarStyles";
import { UserIconLinkContainer, StyledUserLink } from "./UserIconStyles";

export class UserIcon extends React.Component {
  render() {
    const logout = () => {
      AuthService.logout();
    };

    const renderAuthButton = () => {
      if (UserService.isAuth()) {
        return (
          <UserIconLinkContainer>
            <StyledUserLink to="/signout" onClick={logout}>
              <FaSignOutAlt />
            </StyledUserLink>
          </UserIconLinkContainer>
        );
      }
      return (
        <UserIconLinkContainer>
          <StyledUserLink to="/signin">
            <FaSignInAlt />
          </StyledUserLink>
          <StyledUserLink to="/signup">
            <i className="fas fa-user-plus" />
          </StyledUserLink>
        </UserIconLinkContainer>
      );
    };

    return renderAuthButton();
  }
}
export default UserIcon;
