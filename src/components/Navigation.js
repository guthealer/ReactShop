import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container, display, textAlign } from '@mui/system';

import DrawerAppBar from './Navbar';

const Navbar = styled.nav`
display: flex;
justify-content: space-between;
max-width: 500px;
background-color:antiquewhite;

a{
  text-decoration: none;
  font-size: 1.5rem;

}
`;


function Navigation(props) {
  return (
    <div>
          
        {/* <Navbar>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='Electronics'>Electronics</NavLink>
        
          
        </Navbar> */}
        <DrawerAppBar/>
      
    </div>
  );
}

export default Navigation;