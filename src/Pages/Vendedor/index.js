import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne',
});
// import { Container } from './styles';

function Vendedor() {
    const [listProduct, setListProduct] = useState([]);
    
    
    useEffect (() => {
      api
        .get('/products')
        .then(response => {
          console.log(response.data.products)
          setListProduct(response.data.products)
        })
        .catch(error => {
          console.log(error)
        })
    })
    
    
    async function deleteProduto(id) {
      try{
        const response = await api.delete(`https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne/products/${id}`)
      } catch (error){
        console.log(error)
      }
    }

    return(
      <div>
        
        {listProduct.map((product) => (
          <span key={product.id}><img src={product.photos} />{product.name} <span onClick={() => deleteProduto(product.id)}>X</span></span>
        ))}
        
      </div>
    )
}

export default Vendedor;