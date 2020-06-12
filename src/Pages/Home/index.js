import React, {useEffect, useState}from 'react';
import styled from 'styled-components';
import api from '../../service/api';
import AddProducts from '../../components/AddProducts/index.js';
import Solo_Product from '../../Pages/Solo_Product/index.js';

const MainDiv= styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 100%;
	section{
		display: flex;
		flex-direction: row;
		justify-content: center;
	}	
`
const Advertising = styled.img`
	width: 70vw;
	height: 200px;
	margin: 10px;
	margin-top: 70px;
`
const Section = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: center;
	text-align: center;	
	margin-bottom: 10px;
	margin: auto;
	width: 80%;
	height: 50vh;
`
const SectionName = styled.div`	
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	margin-left: 145px;
	margin-top: 15px;
	padding: 5px;	
	h5{		
		font-style: normal;
		font-weight: bold;
		font-size: 24px;
		line-height: 27px;
	}	
	p{
		font-weight: 200;
		font-size: 14px;
		line-height: 16px;	
	}
`
const ProductPrice = styled.span`
	background-color: yellowgreen;
	width: 3.5vw;
	height: 3vh;
	position: absolute;
	:first-of-type{
		position: absolute;
		background-color: purple;
		height: 3vh;
	}
	:last-of-type{
		height: 3vh;
		background-color: hotpink;
	}
`
const Grid4 = styled.div`
	width: 100%;
	height: 100%;	
	padding: 0;
	margin-bottom: 10px;
	img{
		border-radius: 7px;
		border: 1px grey;
		background-color: #D8D8D8;
		width: 45%;
		height: 48%;
		margin: 5px 5px;
		opacity: 0.85;
	}img:hover{
		opacity: 0.95;
	}
`
const Grid1 = styled.div`	
	display: flex;
	justify-content: center;
	width: 100%;
	height: 107%;
	img{
		border-radius: 7px;
		border: 0.5px grey;	
		background-color: #D8D8D8;
		width: 100%;
		height: 95%;
		opacity: 0.85;
	}img:hover{
		opacity: 0.95;
	}	
`
function Home() {
	const [products, setProducts] = useState([]);
	const [clickedProduct, setClickedProduct] = useState();
	const [openSoloProduct, setOpenSoloProduct] = useState(false);

	useEffect(()=>{
		api
			.get('')
			.then((response)=>{				
				setProducts(...products, response.data.products)
			})
			.catch((err)=>{
				window.alert(`Dados não encontrados. ${err}`)
			})
	}, []);
	
	const imageListSection1 = products.filter((product => {
			if (product.category==='Joias'){	
				return product						
			}else{
				return false
			}
		})							
	)
	const imageListSection2 = products.filter((product => {
			if (product.category==='1'){	
				return product						
			}else{
				return false
			}
		})							
	)
	const imageListSection3 = products.filter((product => {
			if (product.category==='Carro'){	
				return product				
			}else{
				return false
			}
		})							
	)

	const imageList1 = imageListSection1.map((item => {
		return (
			<>			
				<img src={item.photos} onClick={() => {OnClickImageProduct(item)}}/>
				<ProductPrice>{item.price}</ProductPrice>				
			</>
		);
	}))

	const imageList2 = imageListSection2.map((item => {
		return (			
			<>			
				<img src={item.photos} onClick={() => {OnClickImageProduct(item)}}/>
				<ProductPrice>{item.price}</ProductPrice>				
			</>		
		);
	}))

	const imageList3 = imageListSection3.map((item => {
		return (
			<>			
				<img src={item.photos} onClick={() => {OnClickImageProduct(item.price)}}/>
				<ProductPrice>{item.price}</ProductPrice>				
			</>
		);
	}))

	function OnClickImageProduct(product){
		setClickedProduct(product)
		setClickedProduct(true)
	}
	
	//if (openSoloProduct===true){
	//	<Solo_Product product={products}/>
	//}else{
	//	<div></div>
	//}

  	return (		  
  	  <MainDiv>
		<section>
			<Advertising 
			src={'https://lojafarm.vteximg.com.br/arquivos/ids/2262860/05-06-desktop-banner_categoria_lp-namorados.jpg?v=637269681486900000'} 
			alt="Propaganda 01"
			/>
		</section>

		<SectionName>
			<h5>Jóias</h5>
			<p>descrição da seção</p>
		</SectionName>
		<Section>
			<Grid4>
				{imageList1[0]}
				{imageList1[4]}
				{imageList1[2]}
				{imageList1[3]}
			</Grid4>
			<Grid1>
				{imageList1[2]}
			</Grid1>	
			<Grid4>
				{imageList1[8]}
				{imageList1[6]}
				{imageList1[4]}
				{imageList1[0]}
			</Grid4>		
		</Section>
		
		<SectionName>
			<h5>Paisagens</h5>
			<p>descrição da seção</p>
		</SectionName>	
		<Section>
			<Grid1>
				{imageList2[0]}
			</Grid1>	
			<Grid4>
				{imageList2[0]}
				{imageList2[0]}
				{imageList2[0]}
				{imageList2[0]}
			</Grid4>
			<Grid1>
				{imageList2[0]}
			</Grid1>			
		</Section>

		<SectionName>
			<h5>Carros</h5>
			<p>descrição da seção</p>
		</SectionName>
		<Section>
			<Grid4>
				{imageList3[0]}
				{imageList3[0]}
				{imageList3[0]}
				{imageList3[0]}
			</Grid4>
			<Grid1>
				{imageList3[0]}
			</Grid1>			
			<Grid4>
				{imageList3[0]}
				{imageList3[0]}
				{imageList3[0]}
				{imageList3[0]}
			</Grid4>			
		</Section>
		
		<section>
		<Advertising 
			src={'https://lojafarm.vteximg.com.br/arquivos/ids/2262860/05-06-desktop-banner_categoria_lp-namorados.jpg?v=637269681486900000'} 
			alt="Propaganda 02"
			/>
		</section>
  	  </MainDiv>
	  );
	  
  return(
	<AddProducts clickedProduct={clickedProduct}/>,
	<Solo_Product product={products}/>
  )	
}

export default Home;
