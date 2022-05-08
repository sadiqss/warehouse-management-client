import logo from './logo.svg';
import './App.css';
import Headers from './Pages/Shared/Headers/Headers';
import Footer from './Pages/Shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Inventory from './Pages/Inventory/Inventory';
import Manage from './Pages/Manage/Manage';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './Pages/Login/RequireAuh/RequireAuth';
import AddProduct from './Pages/AddProduct/AddProduct';
import Blog from './Pages/Blog/Blog';


function App() {
  return (
    <div className="App">
      <Headers></Headers>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/addproduct' element={<AddProduct></AddProduct>}></Route>
        <Route path='/manage' element={


          <Manage></Manage>


        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;