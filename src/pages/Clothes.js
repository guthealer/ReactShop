import React from 'react';
import { useState,useEffect } from 'react';
import axios from "axios";
import styled from 'styled-components';
import { Link } from 'react-router-dom';







const Button = styled.button` 
width: 100%;
padding: 0.5rem;

`   
const Card = styled.div`
width: 300px;
margin: 1rem;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 1rem;
border-radius: 1rem;
background-color: aquamarine;

img{
 width:auto;
 height: 300px;
 aspect-ratio: 2/3;
 
}
`;

const Container  = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`

function Clothes(props) {
    const [products, setProducts] = useState([]);

       
async function fetchData() {
    try {
      const response = await axios.get('https://fakestoreapi.com/products/category/jewelery')
      setProducts(response.data)
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
            Ele
            <Container>
        {products && products.length > 0 && products.map((userObj, index) => (
            <Card key={userObj.id}>
                
           
              <img src={userObj.image} alt="img" width='100%'/>
              <h4 key={userObj.id}>{userObj.title}</h4>
             <Link to='./Productpage' state={{user:{userObj}}} key={userObj.id}>
              <Button key={userObj.id}>Visit</Button>
              </Link>
            
              </Card>
              
          ))}
      </Container> 

        </div>
    );
}

export default Clothes;