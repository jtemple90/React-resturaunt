import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero/index';
import Sidebar from './components/SideBar';
import Products from './components/Products';
import { productData, productData2 } from './components/Products/data'
import Feature from './components/Feature';

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <Hero />
        <Products heading="New to the Menu!" data={productData} />
        <Sidebar />
        <Feature />
        <Products heading="Our Best Sellers!!" data={productData2} />
      </Router>
    </div>
  );
}

export default App;
