import React, {PropTypes} from "react";

const Header = ({user}) =>
  <header>
    <span className="title">Animated Octo Succotash</span>

    <ul>
      <li className="logged-in-user">{user.email}</li>
    </ul>
  </header>;

Header.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Header;
