import React from "react";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  // State

  // Functions

  return (<>
    <header>
      <ul>
          <li><span onClick={() => {navigate('/')}}>Main</span></li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          
      </ul>
    </header>
    
    

  </>)
}

export default Navbar;