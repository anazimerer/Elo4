import React, { useEffect } from 'react';
import api from '../../service/api';

import {Link} from 'react-router-dom'


import { Container } from './styles';
import { Panel, NonHeightPanel, AvatarPanel, DataTable } from './styles';
import { MainImage, SecondaryImage } from './styles';
import { BuyPanel } from './styles';


import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import ReportProblemIcon from '@material-ui/icons/ReportProblem';

function Solo_Product({
  match: {
    params: { id },
  },
}) {
  const [product, setProduct] = React.useState();

  useEffect(() => {
    if(JSON.parse(localStorage.getItem("cart") === null)){
        localStorage.setItem("cart", JSON.stringify([]));
    }

    GetProductlist();
  }, []);

  const GetProductlist = () => {
    api.get().then((response) => {
        console.log(response);
        response.data.products.forEach(product => {
            if(product.id === "eZWLnhldjC8tg5ImsmFC")
            {
                setProduct(product);
            }
        });
    });
  };

  const AddToCart = (product) =>{
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.push(product);
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

=======
function Solo_Product({
  match: {
    params: { id },
  },
}) {
  const [product, setProduct] = React.useState();

  useEffect(() => {
    GetProductlist();
  }, []);

  const GetProductlist = () => {
    api.get().then((response) => {
      console.log(response.data.products[0]);
      setProduct(response.data.products[0]);
    });
  };

  const GetProductInfo = () => {
    if (product !== undefined) {
      return (
        <div>

          <Panel>
            <div>
                <h2>{product.name}</h2>
                <p>{product.category}</p>
            </div>
          </Panel>
          <Panel>
            <div>
                <p>{product.description}</p> 
            </div>
          </Panel>
          <Panel>
            <div>
                <AvatarPanel>
                    <Avatar src="https://picsum.photos/20/20" />
                    <p>Leticia</p>
                    <p>Araraquara, SP</p>
                </AvatarPanel>
                <Button variant="outlined" color="primary" fullWidth='true' >Seguir Loja</Button>
            </div>
          </Panel>
          <NonHeightPanel>
            <DataTable>
                <table>
                    <tr>
                        <td><p>{product.installments}</p></td>
                        <td><p>80</p></td>
                        <td><p>15</p></td>
                    </tr>
                    <tr>
                        <td><p>Á venda</p></td>
                        <td><p>Vendidos</p></td>
                        <td><p>Comentarios</p></td>
                    </tr>
                </table>
            </DataTable>
          </NonHeightPanel>
        </div>
      );
    }   

          <div>
            <h2>{product.name}</h2>
            <p>{product.category}</p>
          </div>
          <div>
            <p>{product.description}</p>
          </div>
          <div>
            <img src="https://picsum.photos/20/20" />
            <p>Leticia</p>
            <p>Araraquara, SP</p>
            <button>Seguir Loja</button>
          </div>
          <div>
            <p>{product.installments}</p>
            <p>Disponiveis</p>
            <p>80</p>
            <p>Vendidos</p>
            <p>15</p>
            <p>Recomendações</p>
          </div>
        </div>
      );
    }
  };

  const GetPhotos = () => {
    if (product !== undefined) {
      return (
        <div>

          <MainImage src="https://picsum.photos/200/200" />

          <img src="https://picsum.photos/200/200" />
          <img src="https://picsum.photos/200/200" />
          <img src="https://picsum.photos/200/200" />
          <img src="https://picsum.photos/200/200" />
          <img src="https://picsum.photos/200/200" />

        </div>
      );
    }
  };

  const GetPrice = () => {
    if (product !== undefined) {
      return (
        <div>

          <br/><br/>
          <Panel>
            <BuyPanel>
                <p>R${product.price}</p>
                <Link to="/Payment">
                    <Button variant="contained" color="primary" fullWidth="true">Quero Comprar</Button>
                </Link>
                <Button variant="contained" color="primary" fullWidth="true" onClick={() => AddToCart(1)}>Adicionar ao Carrinho</Button>
            </BuyPanel>
          </Panel>
          <table>
            <tr>
              <td><BeenhereIcon/></td>
              <td><p>Comprar na Elo4 é seguro</p></td>
            </tr>
            <tr>
                <td><RemoveShoppingCartIcon/></td>
                <td><p>Se não gostar a devolução é gratis</p></td>
            </tr> 
            <tr>
                <td> <ReportProblemIcon/></td>
                <td> <p>Denunciar</p> </td>
            </tr>
          </table>

          <div>
            <p>{product.price}</p>
            <button>Quero Comprar</button>
            <button>Adicionar ao Carrinho</button>
          </div>
          <div>
            <img src="https://picsum.photos/20/20" />
            <p>Comprar na Elo4 é seguro</p>
            <img src="https://picsum.photos/20/20" />
            <p>Se não gostar a devolução é gratis</p>
            <img src="https://picsum.photos/20/20" />
            <p>Denunciar</p>
          </div>

        </div>
      );
    }
  };

  return (

    <Container>
      {GetProductInfo()}
      {GetPhotos()}
      {GetPrice()}
    </Container>

    <div>
      {GetProductInfo()}
      {GetPhotos()}
      {GetPrice()}
    </div>

  );
}

export default Solo_Product;
