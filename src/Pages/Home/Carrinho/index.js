import React from "react";
import styled from "styled-components";

const DivRoot = styled.div`
  display: flex;
  flex-direction: row;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 70%;
`;
const SectionInfos = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  div {
    width: 100%;
    height: 40vh;
    border: 1px solid black;
  }
`;

const SectionPayment = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  div {
    width: 100%;
    height: 15vh;
    border: 1px solid black;
  }
`;
const DivPhoto = styled.div`
  width: 50px;
  height: 55px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const Product = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
`;
const ProductInfo = styled.div`
  padding: 2px;
  h4,
  p {
    margin: 0;
  }
`;
function Carrinho() {
  return (
    <DivRoot>
      <Section>
        <p>Produtos</p>
        <Product>
          <DivPhoto>
            <img src="https://photos.enjoei.com.br/public/240x240/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy85NjE0MTYvNWNiNWExNWYxOTA3OTI0NzZlZWI1ZTRmZWFjMGQ5MzkuanBn" />
          </DivPhoto>
          <ProductInfo>
            <h4>nome do produto</h4>
            <p>tamanho</p>
            <p>preço colorido</p>
          </ProductInfo>
        </Product>
      </Section>

      <SectionInfos>
        <p>informaçoes</p>
        <div>endereço de entrega</div>
        <div>frete</div>
      </SectionInfos>

      <SectionPayment>
        <p>Pagamento</p>
        <div>produtos/ preço total frete taxa de serviço cupom</div>

        <div>total a pagar</div>

        <section>
          <div>Paypal</div>
          <div>Cartão de Crédito</div>
          <div>Boleto bancario</div>
        </section>
      </SectionPayment>
    </DivRoot>
  );
}

export default Carrinho;
