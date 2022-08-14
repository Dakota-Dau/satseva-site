import React from "react";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (<>
    <h1>This is the Home Page</h1>
    <p>This is a paragraph</p>
    <p onClick={() => {navigate('/article')}}>
      Click here to navigate to article
    </p>
  </>);
};

export default HomePage;