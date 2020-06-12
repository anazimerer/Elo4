import React, {useEffect} from 'react';
import api from '../../service/api'

import { Container, Box, Button, Card, Grid, styled } from '@material-ui/core'
import { Panel, DetailsBox, TitleBox, MainProductImage, ProductImage } from './styles'

function Solo_Product() {
    const [product, setProduct] = React.useState(
    
    );

    useEffect(() => {
        GetProductlist();
    }, []);

    const GetProductlist = () => {
        api.get()
        .then((response) => {
            console.log(response.data.products[0]);
            setProduct(response.data.products[0]);
        })
    }

    const GetProductInfo = () => {
        if(product !== undefined){
            return (
            <DetailsBox id="teste">
                <TitleBox>
                    <h2>{product.name}</h2>
                    <p>{product.category}</p>
                </TitleBox>
                <div>
                    <p>{product.description}</p>
                </div>
                <div>
                    <img src="https://picsum.photos/20/20"/>
                    <p>Leticia</p>
                    <p>Araraquara, SP</p>
                    <Button variant="contained" color="primary">Seguir Loja</Button>
                </div>
                <div>
                    <p>{product.installments}</p>
                    <p>Disponiveis</p>
                    <p>80</p>
                    <p>Vendidos</p>
                    <p>15</p>
                    <p>Recomendações</p>
                </div>
            </DetailsBox> 
            );
        }
    }

    const GetPhotos = () => {
        if(product !== undefined){
            return <Box>
                <MainProductImage src="https://picsum.photos/1000/1000"/>
                <div>
                    <ProductImage src="https://picsum.photos/1000/1000"/>
                    <ProductImage src="https://picsum.photos/1000/1000"/>
                    <ProductImage src="https://picsum.photos/1000/1000"/>
                    <ProductImage src="https://picsum.photos/1000/1000"/>
                </div>
            </Box> 
        }
    }

    const GetPrice = () => {
        if(product !== undefined){
            return <Box>
                <Card variant="outlined">
                    <p>{product.price}</p>
                    <Button variant="contained" color="primary" >Quero Comprar</Button>
                    <Button variant="contained" color="primary" >Adicionar ao Carrinho</Button>
                </Card>
                <Card variant="outlined">
                    <img src="https://picsum.photos/20/20"/>
                    <p>Comprar na Elo4 é seguro</p>
                    <img src="https://picsum.photos/20/20"/>
                    <p>Se não gostar a devolução é gratis</p>
                    <img src="https://picsum.photos/20/20"/>
                    <p>Denunciar</p>
                </Card>
            </Box> 
        }
    }

  return ( 
  <Container>
      <Panel>
        {GetProductInfo()}
        {GetPhotos()}
        {GetPrice()}
      </Panel>
  </Container>
  );
}

export default Solo_Product;
