import React, { useState, useEffect } from 'react';
import api from '../../service/api';

import DeleteIcon from '@material-ui/icons/DeleteForever';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AddIcon from '@material-ui/icons/Add';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles'

import { SubMenu, Container, ContainerSup, ContainerInf, Products, Product, Location, SectionAddProduct } from './styles';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 0.5rem 0',
  }, 
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  blue: {
    color: 'blue',
    }
  })
)
function Vendedor() {
    const [listProduct, setListProduct] = useState([]);
    const classes = useStyles();

    useEffect (() => {
      api
        .get()
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
        const response = await api.delete(`/${id}`)
      } catch (error){
        console.log(error)
      }
    }

    function addProduct() {
      // redireciona para a página de adição do produto
      console.log('add prod')
      Redirect('')
    }

    return(
      <Container>
        <SubMenu>
          <ContainerSup></ContainerSup>
          <ContainerInf>
            <div  className={classes.root}>
              <Avatar className={classes.large}>V</Avatar>
            </div>
            <LocationOnIcon />
            <Location>São Paulo, SP</Location>
          </ContainerInf>
        </SubMenu>
        <SectionAddProduct>
          <Fab size='small' color='primary' onClick={addProduct()}>
            <AddIcon />
          </Fab>
        </SectionAddProduct>
        <Products>
        {listProduct.map((product) => (
          <Product key={product.id}>
            <Card>
              <CardActionArea>
                <img src={product.photos} title={product.name}/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    R$ {parseInt(product.price).toFixed(2)}
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