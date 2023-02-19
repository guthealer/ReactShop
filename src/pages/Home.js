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


//  const Button = styled.button` 
//  width: 100%;
 
//  font-size: 1.6rem;
//  border-radius: 10px;
//  bac

// `   
const Card = styled.div`
width: 300px;
margin: 1rem;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 1rem;
border-radius: 1rem;
box-shadow: 0 0 5px 5px rgba(20,20,20,0.5);

img{
  width:auto;
  height: 300px;
  aspect-ratio: 2/3;
  
}
a{
  text-decoration: none;
}
`;

const Container  = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;

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
 <h2 style={{textAlign:'center'}}>Home</h2>




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