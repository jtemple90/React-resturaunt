import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle/>
        <Hero />
      </Router>
    </div>
  );
}

export default App;
