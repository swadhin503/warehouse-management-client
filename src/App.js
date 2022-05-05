import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Items from './components/Items/Items';
import Blogs from './components/Blogs/Blogs';
import AboutUs from './components/AboutUs/AboutUs';
import Login from './components/Login/Login';
import SIgnUp from './components/SignUp/SIgnUp';
import ManageItems from './components/ManageItems/ManageItems';
import AddItems from './components/AddItems/AddItems';
import MyItems from './components/MyItems/MyItems';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/items" element={<Items></Items>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/aboutus" element={<AboutUs></AboutUs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SIgnUp></SIgnUp>}></Route>
        <Route path="/manageItems" element={<ManageItems></ManageItems>}></Route>
        <Route path="/addItems" element={<AddItems></AddItems>}></Route>
        <Route path="/myItems" element={<MyItems></MyItems>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
