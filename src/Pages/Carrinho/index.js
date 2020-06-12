import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { formatPrice } from '../../util/format';

const DivRoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 80px;
`;

const SectionCart = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 70%;
  h3 {
    margin: 5px;
    padding: 3px;
  }
`;

const SectionInfos = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  div {
    width: 100%;
    height: 25vh;
    border: 1px solid grey;
    margin: 10px;
  }
  h3 {
    margin: 5px;
    padding: 3px;
  }
`;

const SectionPayment = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  div {
    width: 100%;
    height: 7vh;
    border: 1px solid grey;
    margin: 10px;
  }
  h3 {
    margin: 5px;
    padding: 3px;
  }
`;
const InfosPayment = styled.div`
  height: 15vh !important;
`;
const DivPhoto = styled.div`
  width: 50px;
  height: 55px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const ProductCart = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid grey;
  margin: 10px;
`;

const ProductInfo = styled.div`
  padding: 2px;
  p {
    margin: 0;
    color: hotpink;
  }
  h4 {
    margin: 0;
  }
`;
const DivRadio = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 10%;
`;

function Carrinho() {
  //const [products, setProducts] = useState()
  const [items, setItems] = useState([]);
  const [myCart, setmyCart] = useState();
  const [installments, setInstallments] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState([]);

  useEffect(() => {
    {
      const storage = localStorage.getItem('cart');
      setItems(JSON.parse(storage));
      setmyCart();
    }
  }, []);

  const installmentsSetItem = () => {
    localStorage.setItem('installments', JSON.stringify(installments));
    console.log('prestações');
  };

  const paymentMethodSetItem = () => {
    localStorage.setItem('paymentMethod', JSON.stringify(paymentMethod));
    console.log('metodo');
  };

  const listOfProducts = () => {
    if (JSON.parse(localStorage.getItem('cart') !== null)) {
      return JSON.parse(localStorage.getItem('cart')).map((product) => {
        console.log(product);
        return (
          <div>
            <h1>{product.price}</h1>
            <ProductCart>
              <DivPhoto>
                <img src={product.photos[0]} />
              </DivPhoto>
              <ProductInfo>
                <h4>{product.name}</h4>
                <p>{formatPrice(product.price)}</p>
              </ProductInfo>
            </ProductCart>
          </div>
        );
      });
    }
  };

  return (
    <DivRoot>
      <SectionCart>
        <h3>Produto</h3>
        {listOfProducts()}
      </SectionCart>
      <SectionInfos>
        <h3>Informações</h3>
        <div>
          <h4>endereço de entrega</h4>
          <p>Avenida Brasil, 556</p>
          <p>Centro - 02336-070</p>
          <p>São Paulo - SP</p>
          <a>Alterar endereço</a>
          <hr />
          <p>Frete </p>
          <label for="frete">Padrão (R$12,80)</label>
          <input type="radio" id="0" name="frete" value="0" />
          <br />

          <label for="frete">Reduzido (grátis) </label>

          <input type="radio" id="1" name="frete" value="1" />
        </div>
      </SectionInfos>

      <SectionPayment>
        <h3>Pagamento</h3>
        <InfosPayment>
          <h4>produtos</h4>
          <span>
            <span>
              preço total
              {formatPrice(
                items.reduce(
                  (acumulador, product) => acumulador + product.price,
                  0
                )
              )}
            </span>
          </span>
          <p>frete</p>
          <p>taxa de serviço </p>
          <p>cupom</p>
        </InfosPayment>
        <h3>total a pagar:</h3>
        <p>
          {formatPrice(
            items.reduce((acumulador, product) => acumulador + product.price, 0)
          )}
        </p>
        <section>
          <div>Paypal</div>
          <div>Cartão de Crédito</div>
          <div>Boleto bancario</div>
        </section>
        <button
          onClick={() => {
            paymentMethodSetItem();
            installmentsSetItem();
          }}
        >
          COMPRAR
        </button>
      </SectionPayment>
    </DivRoot>
  );
}

export default Carrinho;
