import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';

import { useLocation } from 'react-router';




const Container = styled.div`
         display: grid;
         grid-template-columns: auto auto;
         place-items: center;
         @media screen and (max-width:700px){
              grid-template-columns: auto;
         }

`
const ProductImage= styled.div`

`
const ProductInfo = styled.div`
max-width :500px ;
`

function ProductPage(props) {


    let { state } = useLocation();
    console.log(state.user.userObj)
    return (
        <div>
               <Container>
                    <ProductImage>
                            <img src={state.user.userObj.image} alt='img' width='300px'/>
                    </ProductImage>


                    <ProductInfo>
                            <h2>{state.user.userObj.title}</h2>
                            <p>{state.user.userObj.description}</p>
                            <h3>{state.user.userObj.price}$</h3>
                            <Button variant='contained' color='success'>Add to Cart</Button>
                    </ProductInfo>

               </Container>
            
            
        </div>
    );
}

export default ProductPage;