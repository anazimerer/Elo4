import React from 'react';

import {Link} from 'react-router-dom'

import { Container, HeaderDiv, MainDiv, FooterDiv, Option_Button  } from './styles';

function Choose() {
  return (
    <Container>
      <HeaderDiv />

      <MainDiv>
        <Link to="/">
          <Option_Button>Quero Comprar</Option_Button>
        </Link>
        <Link to="/">
          <Option_Button onClick="">Quero Vender</Option_Button>
        </Link>
      </MainDiv>

      <FooterDiv />
    </Container>
  )
}

export default Choose;