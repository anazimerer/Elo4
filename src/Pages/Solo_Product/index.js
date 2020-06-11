import React, { useEffect } from 'react';
import api from '../../service/api';

//import { Container } from './styles';

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
    <div>
      {GetProductInfo()}
      {GetPhotos()}
      {GetPrice()}
    </div>
  );
}

export default Solo_Product;
