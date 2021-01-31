import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero/index';
import Sidebar from './components/SideBar';
import Products from './components/Products';
import { productData } from './components/Products/data'

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle/>
        <Hero/>
        <Products heading='Choose Your Favorite' data={productData}/>
        <Sidebar/>
      </Router>
    </div>
  );
}

export default App;
