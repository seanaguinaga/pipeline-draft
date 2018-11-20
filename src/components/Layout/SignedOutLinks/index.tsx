import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "../../../configs/styled-components";

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/signup">Sign Up</NavLink>
      </li>
      <li>
        <NavLink to="/signin">Log In</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
