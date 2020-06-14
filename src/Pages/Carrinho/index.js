import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { formatPrice } from '../../util/format';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const DivRoot = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  margin-top: 80px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const SectionCart = styled.section`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 70%;
  margin-left: 30px;
  h3 {
    margin: 5px;
    padding: 3px;
  }
`;

const SectionInfos = styled.section`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
  div {
    width: 100%;
    height: 31vh;
	border-radius: 7px;
	padding: 7px;
	background-color: #EFFBFB;
	border: 1px solid #E6E6E6;
  }
  h3 {
    margin: 5px;
    padding: 5px;
  }
  h4{
	padding: 2px;
  }
  label, p{
	  padding-left: 3px;
	  color: #6E6E6E;

  }
  a{
	  font-weight: bold;
	  color:#1da89A;
	  margin-bottom: 5px;
  }
  
  `

const SectionPayment = styled.section`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
  margin-right: 60px; 
  div {
	background-color: #EFFBFB;
    width: 100%;
    height: ${(showCreditOptions) => (showCreditOptions ? '17vh' : '7vh')};
    border: 1px solid #E6E6E6;
	padding: 7px;
	border-radius: 7px;
	margin: 5px;
  }
  h3 {
    margin: 5px;
    padding: 3px;
  }
  h4{
	text-align: center;
	select{
		text-align: center;
	}
  }
  section {
	  h4{
		  display:flex;
		  justify-content: center;
	  }
  }
`;
const InfosPayment = styled.div`
  height: 19vh !important;
  padding: 2px;
  border-radius: 7px;
  background-color: #EFFBFB;
  padding: 10px;
  input{
	  width: 20%;
	  margin: 2px;
  }
  span{

	  display: flex;
	  flex-direction: row;
	  justify-content: space-between;
	  p:first-of-type{
		color: #424242;
		font-weight: bold;
	  }p:last-of-type{
		font-weight: bold;
		color:#04B486;
	  }
  }


`;
const DivPaymentMethod=styled.div`
	display: flex;
	flex-direction: column;
	position: center;
	align-items: center;
	color: #424242;
	select{
		border-radius: 3px;
		color: #424242;
	}
`
const SelectPaymentMethod= styled.select`
     justify-content: center;
	 width:80%;
	 margin: 5px;
`
const Total = styled.span`
p{
	font-size: 1.2em;
	border-radius: 7px;
	background-color: #EFFBFB;
	border: 1px solid #E6E6E6;
	font-weight: bold;
	width: 100%;
	height: 5vh;
	text-align: center;
	margin-left: 5px;
}

`
const DivPhoto = styled.div`
  width: 50px;
  height: 55px;
  margin: 1px; 
  
  img {
	
	border-radius: 7px;
    width: 100%;
    height: 100%;
  }
`;
const ProductCart = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  border-radius:7px;
  width: 80%;
  background-color: #EFFBFB;
  border: 1px solid #E6E6E6;
`;

const ProductInfo = styled.div`
  padding: 2px;
  h5{
	  font-size: 0.95em;
	  
  }
  p{	
	margin: 1px;
    color: #1da89A;
	font-size: 0.85em;
	font-weight: bold;
  }
`;
const ButtonBuy = styled(Button)`
  width: 100%;
  height: 10%;
  margin-left: 10px;
  margin-top: 10px;
  font-size: 1.2em;
  border-color:#1da89A;
  background-color:#1da89A;
	:hover{

	}
`;

const ButtonCoupon = styled(Button)`
	width: 32%;
	height: 27px;
	border-color:#1da89A;
	color:#1da89A;
	text-decoration: none;

  	
`
function Carrinho() {
  const [items, setItems] = useState([]);
  const [myCart, setmyCart] = useState();
  const [installments, setInstallments] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState([]);
  const [shipping, setShipping]=useState(12.80);
  const [serviceCharge, setServiceCharge]=useState(7);
  const [coupon, setCoupon]=useState();
  const [showCreditOptions, setShowCreditOptions]= useState(false)
  const total = formatPrice(
	items.reduce(
	  (acumulador, product) => acumulador + product.price,
	  0
	))

  useEffect(() => {
    {
      const storage = localStorage.getItem('cart');
      setItems(JSON.parse(storage));
	  setmyCart();
	  localStorage.setItem('installments', JSON.stringify(1)); 
	}
  }, []);

  const installmentsSetItem = (event) => {
	localStorage.setItem('installments', JSON.stringify(event.target.value)); 
    console.log('prestações'+installments);
  };

  //teria que criar const paymentMethod = {'paymentMethod': 'card'}
  // e passar localStorage.setItem('paymentMethod', JSON.stringify(paymentMethod)


  const paymentMethodSetItem = (event)=>{
	localStorage.setItem('paymentMethod', JSON.stringify(event.target.value)); 

	if (event.target.value==="card"){
		setShowCreditOptions(true)
	}else{
		setShowCreditOptions(false)
	}
  }

  const listOfProducts = () => {
    if (JSON.parse(localStorage.getItem('cart') !== null)) {
      return JSON.parse(localStorage.getItem('cart')).map((product) => {
        return (
          <div>
            <ProductCart>
              <DivPhoto>
                <img src={product.photos[0]}>
				</img> 
              </DivPhoto>
              <ProductInfo>
                <h5>{product.name}</h5>
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
		  <h3>Endereço de entrega</h3>
  	      <div>  	       
  	        <p>Avenida Brasil, 556</p>
  	        <p>Centro - 02336-070</p>
  	        <p>São Paulo - SP</p>
  	        <a href="">Alterar endereço</a>
  	        <hr />
			<br />
  	        <h4>Frete </h4>
			<input type="radio" id="0" name="frete" value="0" checked="true" />
  	        <label for="frete">Padrão (R$12,80)</label>  	        
  	        <br />
			<input type="radio" id="1" name="frete" value="1" />
  	        <label for="frete">Reduzido (grátis) </label>
  	        
  	      </div>
  	    </SectionInfos>
	
  	    <SectionPayment>
  	      <h3>Pagamento</h3>
  	    	<InfosPayment>
			    <span><p>Frete:</p><p>{formatPrice(shipping)}</p></span><br></br>
			    <span><p>Taxa de serviço:</p><p>{formatPrice(serviceCharge)}</p></span><br></br>
  	            <span><p>CUPOM: 
					<input></input>
					<ButtonCoupon variant="outlined" color="primary" fullWidth="true" >APLICAR</ButtonCoupon></p>
					<p>R$-0,00</p>
				</span>
  	      </InfosPayment>
	
  	      <section>
			<DivPaymentMethod>
			  <h4>Forma de pagamento:</h4>
			  	<SelectPaymentMethod onChange={paymentMethodSetItem}>						  
					<option value="paypal">Paypal</option>
					<option value="paymentSlip">Boleto Bancário</option>
					<option value="card">Cartão de Crédito</option>
				</SelectPaymentMethod>
			<p>	
				{showCreditOptions? <span>
					  <input type="radio" id="0" name="frete" value="0" checked="true"/>
					  <label for="frete"> á vista ({total})</label>  	        		  
  	        		  <br />
					  <input type="radio" id="0" name="frete" value="1" />
  	        		  <label for="frete"> á prazo </label>
					  <select onChange={installmentsSetItem}>					  
						  <option value="2">2X</option>
						  <option value="3">3X</option>
						  <option value="4">4X</option>
						  <option value="5">5X</option>
						  <option value="6">6X</option>
						  <option value="7">7X</option>
						  <option value="8">8X</option>
						  <option value="9">9X</option>
						  <option value="10">10X</option>
						  <option value="11">11X</option>
						  <option value="12">12X</option>
						  
					  </select>			          
			  </span> 
			  : <p></p>}
			
			</p>	
			</DivPaymentMethod>

			<Total> 
				<p>TOTAL: {total} </p>
			</Total>
  	      </section>
  	      <Link to={'/buy'}>
  	      <ButtonBuy variant="contained" color="primary" fullWidth="true" >
  	      	  QUERO COMPRAR!
		   </ButtonBuy>
			</Link>
  	    </SectionPayment>
  	  </DivRoot>
  	);
}	

export default Carrinho;
