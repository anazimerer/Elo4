import React, {useEffect}from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Advertising01 from '../../assets/images/advertising-1.png';
import Advertising02 from '../../assets/images/advertising-2.png';

// import { Container } from './styles';

const Advertising = styled.img`
	width: 600px;
	height: 150px;
	margin: 10px;
`
function Home() {
	useEffect(()=>{
		
	})


  	return (
  	  <div>
		<Header />
		<section>
			<Advertising 
			src={Advertising01} 
			alt="Propaganda 01"
			/>
		</section>

		<section>
			<div>
				image1
			</div>
			<div>
				image2
			</div>
			<div>
				image3
			</div>
			<div>
				image4
			</div>
			<div>
				image5
			</div>
		</section>

		<section>
		<Advertising 
			src={Advertising02} 
			alt="Propaganda 02"
			/>
		</section>
  	  </div>
  	);

}

export default Home;
