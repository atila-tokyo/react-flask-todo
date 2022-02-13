import React from 'react';
import './App.css';
import { TodoPage } from './Pages/TodoPage'
import { Display } from './Pages/ShowPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="Root">
      <Header className='App-header' />
      <div className='Container'>
          <Router>
            <Routes>
              <Route path='/' element={<TodoPage />} />
            </Routes>
            <Routes>
              <Route exact path='/:id' element={<Display />} />
            </Routes>
          </Router>
        </div>
      <Footer />
      </div>
  );
}

export default App;
