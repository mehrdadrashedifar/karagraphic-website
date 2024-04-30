
import { BrowserRouter, Routes, Route , Link} from "react-router-dom";
import './App.css';
import Header from './components/header/header.jsx';
import Navbar from './components/navbar/navbar.jsx';
import HomePage from './pages/homePage/homePage.jsx';
import Information from './pages/information/information.jsx';
import Products from './pages/products/products.jsx';
import Footer from "./components/footer/footer.jsx";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Link to='/' className="stickyBtn">telegram</Link>
      <Header/>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/information' element={<Information/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
      {/* <Route path='*' element={<div>NOT FOUND</div>}/> */}
    </div>
  );
}
export default App;
