import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { LexicalEditor } from 'lexical';
import Main from './components/Main';

function App() {
  return (
    <>
    <Routes>
    <Route 
    path='/main'
    element={
      <Main/>
    }
    />

</Routes>
</>
  );
}

export default App;
