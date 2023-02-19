import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import { Button } from '@mui/material';






const Card = styled.div`
width: 300px;
margin: 1rem;
display: flex;
flex-direction: column;
justify-content:space-between;
padding: 1rem;
border-radius: 1rem;
box-shadow: 0 0 5px 5px rgba(20,20,20,0.5);

img{
 width:auto;
 height: 300px;
 aspect-ratio: 2/3;
 
}
`;

const Container  = styled.div`
display: grid;
grid-template-columns: auto auto auto;
place-items: center;
@media screen and (max-width:700px){
    grid-template-columns: auto;
}
`

function Electronics(props) {
    const [products, setProducts] = useState([]);
    const [loader,setloader]=useState(false)
       
async function fetchData() {
  setloader(true)
    try {
      const response = await axios.get('https://fakestoreapi.com/products/category/electronics')
      setProducts(response.data)
      setloader(false)
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    fetchData();
  },[])

  console.log(products)
    return (
        <div>
                
                <h2 style={{textAlign:'center'}}>Electronics</h2>
            {loader?<Loader/>:undefined}

            <Container>
        {products && products.length > 0 && products.map((userObj, index) => (
            <Card key={userObj.id}>
                
           
              <img src={userObj.image} alt="img" width='100%'/>
              <h4 key={userObj.id}>{userObj.title}</h4>
             <Link to='/Productpage' state={{user:{userObj}}} key={userObj.id}>
              <Button key={userObj.id} variant='contained' color='success' sx={{width:'100%'}}>Visit</Button>
              </Link>
            
              </Card>
              
          ))}
      </Container> 

        </div>
    );
}

export default Electronics;