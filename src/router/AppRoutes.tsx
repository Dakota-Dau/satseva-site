import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Article from '../components/article/Article';
import HomePage from '../components/home/HomePage';

export const AppRoutes: React.FC<unknown> = () => (
  <Routes>
    <Route path='/' element={< HomePage />}/>
    <Route path='/article' element={< Article />}/>
  </Routes>
);
