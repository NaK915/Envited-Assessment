import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Create from './pages/create/Create';
import Landing from './pages/landing/Landing';
import Events from './pages/events/Events';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
        </Route>
        <Route path="/create" element={<Create />}>
        </Route>
        <Route path='/event' element={<Events />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
