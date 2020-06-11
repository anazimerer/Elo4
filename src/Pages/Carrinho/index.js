import React from "react";
import styled from "styled-components";

const DivRoot = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const SectionCart = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 70%;
  h3{
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
  h3{
	  margin: 5px;
	  padding: 3px;
  }
`;

const SectionPayment = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 100%;
  }
  div {
    width: 100%;
    height: 7vh;
    border: 1px solid grey;
	margin: 10px;
  }  
  h3{
	  margin: 5px;
	  padding: 3px;
  }
`
const InfosPayment = styled.div`
	height: 15vh !important;
`
const DivPhoto = styled.div`
  width: 50px;
  height: 55px;
  img {
    width: 100%;
    height: 100%;
  }
`
const ProductCart = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid grey;
  margin: 10px;
`

const ProductInfo = styled.div`
  padding: 2px;
  h4,
  p {
    margin: 0;
  }
`
const DivRadio = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 10%;
`;

function Carrinho() {
  return (
    <DivRoot>
      	<SectionCart>
        	<h3>Produto</h3>
        	<ProductCart>
        	  	<DivPhoto>
        	  	  <img src="https://photos.enjoei.com.br/public/240x240/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy85NjE0MTYvNWNiNWExNWYxOTA3OTI0NzZlZWI1ZTRmZWFjMGQ5MzkuanBn" />
        	  	</DivPhoto>
        	  	<ProductInfo>
        	  	  <h4>nome do produto</h4>
        	  	  <p>tamanho</p>
        	  	  <p>preço colorido</p>
        		</ProductInfo>
			</ProductCart>

			<ProductCart>
        	  <DivPhoto>
        	    <img src="https://photos.enjoei.com.br/public/240x240/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy85NjE0MTYvNWNiNWExNWYxOTA3OTI0NzZlZWI1ZTRmZWFjMGQ5MzkuanBn" />
        	  </DivPhoto>
        	  <ProductInfo>
        	    <h4>nome do produto</h4>
        	    <p>tamanho</p>
        	    <p>preço colorido</p>
        	  </ProductInfo>		  
        	</ProductCart>
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
        Frete
    	<input type="radio" value="0" name="frete-padrao"/>
    	<label for="campo-radio1">Padrão (R$12,80)</label>
    	<input type="radio" value="0" name="frete-gratis"/>
    	<label for="campo-radio2">Reduzido (grátis) </label>		
		</div>
      </SectionInfos>

      <SectionPayment>
        <h3>Pagamento</h3>
        <InfosPayment>
			<h4>produtos</h4>
			<p>preço total </p>
			<p>frete</p>
			<p>taxa de serviço </p>
			<p>cupom</p>
		</InfosPayment>

        <h3>total a pagar:</h3>

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
