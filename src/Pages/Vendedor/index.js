import React, { useState, useEffect } from 'react';
import axios from 'axios';

import DeleteIcon from '@material-ui/icons/DeleteForever';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { SubMenu, Container, ContainerSup, ContainerInf, Products, Product, DescDel, Desc, Delete } from './styles';

const api = axios.create({
  baseURL: 'https://us-central1-labenu-apis.cloudfunctions.net/eloFourOne',
});

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
        const response = await api.delete(`/products/${id}`)
      } catch (error){
        console.log(error)
      }
    }

    return(
      <Container>
        <SubMenu>
          <ContainerSup></ContainerSup>
          <ContainerInf>
            VENDEDOR
            <LocationOnIcon />São Paulo
          </ContainerInf>
        </SubMenu>
        <Products>
        {listProduct.map((product) => (
          <Product key={product.id}>
            <Card>
              <CardActionArea>
                <CardMedia
                />
                <img src={product.photos} title={product.name}/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    R$ {product.price.toFixed(2)}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small">
                  <DeleteIcon onClick={() => deleteProduto(product.id)}/>
                </Button>
              </CardActions>
            </Card>
          </Product>
        ))}
        </Products>
        
      </Container>
    )
}

export default Vendedor;