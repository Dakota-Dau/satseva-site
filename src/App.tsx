import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import { AppRoutes } from './router/AppRoutes';

function App() {
  return (<>
    <BrowserRouter>
      <Navbar/>
      <AppRoutes></AppRoutes>
    </BrowserRouter>
  </>);
};

export default App;
