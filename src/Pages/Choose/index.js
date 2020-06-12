import React from 'react';

import Home from '../Home';
import Seller from '../Vendedor';

import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { Container, MainDiv, BackgroundImage } from './styles';
import Crafting from '../../assets/images/Crafting.jpg';

function Choose() {
  const [role, setRole] = React.useState(localStorage.getItem('role') || '');

  switch (role) {
    case 'BUYER':
      console.log(role);
      return <Home />;
    case 'SELLER':
      console.log(role);
      return <Seller />;
    default:
      console.log('stay');
      break;
  }

  const onSetRoleEvent = (roleClicked) => {
    localStorage.setItem('role', roleClicked);
    setRole(roleClicked);
  };

  return (
    <Container>
      <BackgroundImage src={Crafting} />
      <MainDiv>
        <Link to="/inicio">
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => onSetRoleEvent('BUYER')}
          >
            Quero Comprar
          </Button>
        </Link>
        <Link to="/Vendedor">
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => onSetRoleEvent('SELLER')}
          >
            Quero Vender
          </Button>
        </Link>
      </MainDiv>
    </Container>
  );
}

export default Choose;
