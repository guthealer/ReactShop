import React from 'react';
import { useEffect ,useState} from 'react';
import axios from 'axios';

import styled from 'styled-components';
import { NavLink,Link } from 'react-router-dom';
import ProductPage from './ProductPage';
import Loader from '../components/Loader';
import { Button } from '@mui/material';
function Home(props) {

  
    const [allProducts, setallProducts] = useState([]);
   const [loader,setloader]=useState(false)

  
  //  fetch('https://dummyjson.com/auth/login', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
      
  //     username: 'kminchelle',
  //     password: '0lelplR',
  //     // expiresInMins: 60, // optional
  //   })
  // })
  // .then(res => res.json())
  // .then(console.log);



//  const Button = styled.button` 
//  width: 100%;
 
//  font-size: 1.6rem;
//  border-radius: 10px;
//  

// `   
const Card = styled.div`
width: 200px;

margin: 0.5rem;
display: flex;
flex-direction: column;
justify-content: space-between;
padding:1rem;
border-radius: 1rem;
box-shadow: 0 0 5px 5px rgba(200,200,200,0.5);

   @media screen and  (max-width:400px){
      width: 100%;
     
    
   }

img{
  width:100%;
  height:200px;
 
  object-fit: contain;
  
}
a{
  text-decoration: none;
}
`;

const Container  = styled.div`
display: flex;
flex-wrap: wrap;
justify-content:flex-start;

  @media screen and (max-width:700px){
            justify-content: center;
    
  }

`;




   
async function fetchData() {

  setloader(true);
  try {
    const response = await axios.get('https://fakestoreapi.com/products')
    setallProducts(response.data)
    setloader(false)
  } catch (error) {
    console.error(error);
  }
}


useEffect(() => {
  

  fetchData();


},[])

console.log(allProducts)

const productTitle = allProducts.map((product)=>product.title)
const productId = allProducts.map((product)=>product.id)

const productDescription = allProducts.map((product)=>product.description)
const productImage = allProducts.map((product)=>product.image)
const productPrice = allProducts.map((product)=>product.price)

const productRating = allProducts.map((product)=>product.rating.rate)
const productRatingCount = allProducts.map((product)=>product.rating.count)







    return (
        <div>
 <h2 style={{textAlign:'center'}}>All Products</h2>




{loader?<Loader/>:undefined}
          
  
  
      <Container>
        {allProducts && allProducts.length > 0 && allProducts.map((userObj, index) => (
            <Card key={userObj.id}>
                
           
              <img src={userObj.image} alt="img" width='100%'/>
              <h4 key={userObj.id}>{userObj.title}</h4>
             <Link to='/Productpage' state={{user:{userObj}}} key={userObj.id}>
              <Button key={userObj.id} variant='contained' sx={{width:'100%'}} color='success'>Visit</Button>
              </Link>
            
              </Card>
              
          ))}
      </Container> 

     

        </div>
    );
}

export default Home;