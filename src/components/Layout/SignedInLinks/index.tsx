import * as React from "react";
import { NavLink } from "react-router-dom";
import styled from "../../../configs/styled-components";


const SignedInLinks = () => {
  return (
      <ul className="right">
        <li><NavLink to='/createproject'>New Project</NavLink></li>
                <li><NavLink to='/'>Log Out</NavLink></li>
        <li><NavLink to='/' className='btn btn-floating pink lighten-1'>SA</NavLink></li>

      </ul>
      
  );
};

export default SignedInLinks;
