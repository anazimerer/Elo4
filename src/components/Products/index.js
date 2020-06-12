import React,{ useState, useEffect } from 'react';
import api from '../../service/api';
import { ProductsContainer, BoxP } from './styles';

import Box from '@material-ui/core/Box';


export default function Products () {

    const [productList, setProductList] = React.useState([]);

    useEffect (() => {
          api.get()
          .then((response) => {
            console.log(response)
            setProductList(...productList, response.data.products )
          })
          .catch(error => {
            console.log(error)
          })
    },[])

    return(
        <ProductsContainer>
        {productList.map(produtos => {
            return(
                <Box display="flex" flexDirection="row" 
                     p={1} m={1} bgcolor="background.paper">
                    <Box key={produtos.id} p={1} bgcolor="grey.300"
                    justifyContent="center" maxWidth="15vw">
                        <img src={produtos.photos} alt={produtos.name} />
                        <BoxP justifyContent="center">{produtos.name}</BoxP>
                    </Box>
                </Box>
            )
        })}
        </ProductsContainer>
    );
}