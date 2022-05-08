import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Items from './components/Items/Items';
import Blogs from './components/Blogs/Blogs';
import Login from './components/Login/Login';
import SIgnUp from './components/SignUp/SIgnUp';
import ManageItems from './components/ManageItems/ManageItems';
import AddItems from './components/AddItems/AddItems';
import MyItems from './components/MyItems/MyItems';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Inventory from './components/Inventory/Inventory';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Reviews from './components/Reviews/Reviews';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/items" element={<Items></Items>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SIgnUp></SIgnUp>}></Route>
        <Route path="/manageItems" element={<ManageItems></ManageItems>}></Route>
        <Route path="/addItems" element={<AddItems></AddItems>}></Route>
        <Route path="/myItems" element={<MyItems></MyItems>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        <Route path="/inventory/:id" element={<RequireAuth>
          <Inventory></Inventory>
        </RequireAuth>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
