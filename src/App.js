import logo from './logo.svg';
import './App.css';

import { useEffect ,useState} from 'react';
import axios from "axios";
import { NavLink,BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './Products';
import Home from './pages/Home';
import styled from 'styled-components';
import ProductPage from './pages/ProductPage';
import Navigation from './components/Navigation';
import Clothes from './pages/Clothes'
import Electronics from './pages/Electronics'
import Jewelery from './pages/Jewelary';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import DrawerAppBar from './components/Navbar';


const AppBar = styled.div`
position:sticky;
top: 0px;
`


function App() {

const [user, setUser] = useState([]);


   
// async function fetchData() {
//   try {
//     const response = await axios.get('https://fakestoreapi.com/products')
//     setUser(response.data)
//   } catch (error) {
//     console.error(error);
//   }
// }

// useEffect(() => {
  
//   fetchData();
  
// },[])

console.log(user)
  return (
    <div className="App">
      <DrawerAppBar/>
    
      {/* <Products user={user}/>
    */}
      <h1>User List</h1>
      {/* <ol>
        {user && user.length > 0 && user.map((userObj, index) => (
            <li key={userObj.id}>
              <a href="">{userObj.title}</a></li>
          ))}
      </ol>  */}

<Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route path='/ProductPage' element={<ProductPage/>}/> 
  <Route path='/Electronics' element={<Electronics/>}/>
  <Route path='/Jewelery' element={<Jewelery/>}/>
  <Route path='/SignUp' element={<SignUp/>}/>
  <Route path='/SignIn' element={<SignIn/>}/>
 
 
</Routes>
   
    </div>
  );
}

export default App;
