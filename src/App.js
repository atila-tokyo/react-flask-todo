import React from 'react';
import './App.css';
import { TodoPage } from './Pages/TodoPage'
import { Display } from './Pages/ShowPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<TodoPage />} />
        </Routes>
        <Routes>
          <Route exact path='/:id' element={<Display />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
