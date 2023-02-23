import logo from './logo.svg';
import './App.css';

import { useEffect ,useState} from 'react';
import axios, { Axios } from "axios";
import { NavLink,BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './Products';
import Home from './pages/Home';
import styled from 'styled-components';
import ProductPage from './pages/ProductPage';

import Clothes from './pages/Clothes'
import Electronics from './pages/Electronics'
import Jewelery from './pages/Jewelary';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import DrawerAppBar from './components/Navbar';
import { SellTwoTone } from '@mui/icons-material';
import Account from './pages/Account';


const AppBar = styled.div`
position:sticky;
top: 0px;
`


function App() {

const [user, setUser] = useState([]);
const[logged,setlogged]=useState(false);
const[cart,setCart]=useState()




const[username,setUsername]=useState()
const[email,setemail]=useState()
const[firstName,setfirstName]=useState()
const[lastName,setlastName]=useState()







function localInfo(){

  setUsername(localStorage.getItem('username'))
  setemail( localStorage.getItem('email'))
  setfirstName(localStorage.getItem('firstName'))
  setlastName(localStorage.getItem('lastName'))
}



console.log(username,email,firstName,lastName)

useEffect(()=>{
  localInfo();
  const item = localStorage.getItem('log')
setlogged(item)
console.log(item+'logged')
},[logged])





async function fetchCart(){
  try{
    const response =await Axios.get('https://fakestoreapi.com/carts');
    setCart(response.data);
  }
  catch(error){
    console.error(error);
  }
}

// useEffect(() => {
//   const item = JSON.parse(localStorage.getItem('log'));
//   logged=item;
    
// }, []);
   
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
      <DrawerAppBar  logged={logged} setlogged={setlogged}/>
    
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
  <Route exact path='/' element={<Home logged={logged} setlogged={setlogged}/>}/>
  <Route path='/ProductPage' element={<ProductPage/>}/> 
  <Route path='/Electronics' element={<Electronics/>}/>
  <Route path='/Jewelery' element={<Jewelery/>}/>
  <Route path='/SignUp' element={<SignUp/>}/>
  
  <Route path='/SignIn' element={<SignIn  logged={logged} setlogged={setlogged}/>}/>
{logged? <Route path='/Account' element={<Account  username={username} email={email} firstName={firstName} lastName={lastName}   />}/>:undefined}
  {/* <Route path='/Account' element={<Account/>}/> */}
 
 
 
</Routes>
   
    </div>
  );
}

export default App;
