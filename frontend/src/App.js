import React from 'react';
import { BrowserRouter } from 'react-router-dom';

//CUSTOM COMPONENT
import Routes from './routes';
import Header from './components/header/Header'

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes />
    </BrowserRouter>
    
  );
}

export default App;