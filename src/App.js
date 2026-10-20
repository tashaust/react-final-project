import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Nav from './components/nav';
import Contact from './pages/contact';
import Landing from './components/landing';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Nav setIsModalOpen={setIsModalOpen} />
        {isModalOpen && (
          <Contact setIsModalOpen={setIsModalOpen} />
        )}
        <Landing />
        <Routes>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
