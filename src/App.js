
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './Routes/Categories';
import Home from './Routes/Home';
import Reviews from './Routes/Reviews';

function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Categories' element={<Categories />} />
      <Route path='/Reviews' element={<Reviews />} />


    </Routes>
  );
}

export default App;
