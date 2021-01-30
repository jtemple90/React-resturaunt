import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero/index';
import Sidebar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle/>
        <Hero/>
        <Sidebar/>
      </Router>
    </div>
  );
}

export default App;
