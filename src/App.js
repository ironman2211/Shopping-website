import './App.css';
import Homepage from './pages/home-page/homepage.comonent';
import ShopPages from './pages/shop-page/shop-page.jsx';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header-component/header-component.jsx';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/shop" element={<ShopPages />}></Route>
      </Routes>
    </div>
  );
}
// element
export default App;
