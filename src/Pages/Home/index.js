import React, {useEffect, useState}from 'react';
import styled from 'styled-components';
import Advertising01 from '../../assets/images/advertising-1.png';
import Advertising02 from '../../assets/images/advertising-2.png';
import api from '../../service/api';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';

// import { Container } from './styles';

const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	paper: {
	  padding: theme.spacing(2),
	  textAlign: 'center',
	  color: theme.palette.text.secondary,
	},
}));


const MainDiv= styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 100%;
	
`
const Advertising = styled.img`
	width: 70vw;
	height: 200px;
	margin: 10px;
`
const Section = styled.section`
	display: flex;
	flex-direction: row;
	justify-content: center;
	text-align: center;	
	margin-bottom: 10px;
	width: 100%;
	height: 50vh;
`
const SectionName = styled.div`	
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	margin-left: 15px;
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
////////////////////////////////
const Grid4 = styled.div`
	width: 50%;
	height: 100%;	
	img{
		border-radius: 7px;
		border: 1px grey;
		background-color: #D8D8D8;
		width: 45%;
		height: 50%;
		margin:1px 1px;
	}
`
const Grid1 = styled.div`	
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50%;
	height: 100%;
	img{
		border-radius: 7px;
		border: 0.5px grey;	
		background-color: #D8D8D8;
		width: 90%;
		height: 95%;
	}
`
//////////////

function Home() {
	const [products, setProducts] = useState([]);
	const classes = useStyles();
	
	useEffect(()=>{
		api
			.get('')
			.then((response)=>{				
				//ndow.alert('Dados encontrados')
				setProducts(...products, response.data.products)
			})
			.catch((err)=>{
				window.alert(`Dados não encontrados. Erro: ${err}`)
			})
	}, []);
	
	const imageListSection1 = products.filter((product => {
		console.log(product.category)
			if (product.category==='Anel'){	
				return product						
			}else{
				return false
			}
		})							
	)
	const imageListSection2 = products.filter((product => {
		console.log(product.category)
			if (product.category==='1'){	
				return product						
			}else{
				return false
			}
		})							
	)
	const imageListSection3 = products.filter((product => {
		console.log(product.category)
			if (product.category==='Carro'){	
				return product						
			}else{
				return false
			}
		})							
	)

	const imageList = imageListSection1.map((item => {
		console.log('teste' +item.photos)
		return (
		<img src={item.photos}/>
		);
	}))

	const imageList2 = imageListSection2.map((item => {
		console.log('teste' +item.photos)
		return (
		<img src={item.photos}/>
		);
	}))

	const imageList3 = imageListSection3.map((item => {
		console.log('teste' +item.photos)
		return (
		<img src={item.photos}/> 
		);
	}))
	

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
		<Section  className={classes.root} >
			<Grid4 className={classes.paper}>
				{imageList[0]}
				{imageList[0]}
				{imageList[0]}
				{imageList[0]}
			</Grid4>
			<Grid1>
				{imageList[0]}
			</Grid1>	
			<Grid4 className={classes.paper} >
				{imageList[0]}
				{imageList[0]}
				{imageList[0]}
				{imageList[0]}
			</Grid4>		
		</Section>
		
		<SectionName>
			<h5>Paisagens</h5>
			<p>descrição da seção</p>
		</SectionName>	
		<Section  className={classes.root} >
			<Grid1>
				{imageList2[0]}
			</Grid1>	
			<Grid4 className={classes.paper} >
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
		<Section  className={classes.root} >
			<Grid4 className={classes.paper}>
				{imageList3[0]}
				{imageList3[0]}
				{imageList3[0]}
				{imageList3[0]}
			</Grid4>
			<Grid1>
				{imageList3[0]}
			</Grid1>			
			<Grid4 className={classes.paper}>
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

}

export default Home;
