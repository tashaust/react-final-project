import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/nav';
import Contact from './pages/contact';

function App() {
  <Router></Router>
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Contact} />
      </div>
    </Router>
  );
}

export default App;
