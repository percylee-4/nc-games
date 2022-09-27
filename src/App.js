
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './Routes/Categories';
import Category from './Routes/Category';
import Home from './Routes/Home';
import Review from './Routes/Review';
import Reviews from './Routes/Reviews';

function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Categories' element={<Categories />} />
      <Route path='/Reviews' element={<Reviews />} />
      <Route path='/categories/:slug' element={<Category />} />
      <Route path='/Review/:review_id' element={<Review />} />


    </Routes>
  );
}

export default App;
