import React from 'react';

import {Link} from 'react-router-dom'

import Button from '@material-ui/core/Button';

import { Container, HeaderDiv, MainDiv, FooterDiv, BackgroundImage, Logo  } from './styles';
import Crafting from "../../assets/images/Crafting.jpg"
import elo4 from "../../assets/images/elo4.png"

function Choose() {
  const [role, setRole] = React.useState(
    localStorage.getItem('role') || ''
  );

  React.useEffect(() => {
    switch(role)
    {
      case "BUYER" : 
        //go to other page;
        break;
      case "SELLER" : 
        //go to other page;
        break;
      default:
        //go to other page;
        break;
    }
  }, []);

  const onSetRoleEvent = (roleClicked) => {
    localStorage.setItem('role', roleClicked);
    setRole(roleClicked);
  }
  
  return (
    <Container>
      <BackgroundImage src={Crafting}/>
      <MainDiv>
        <Link to="/">
          <Button variant="contained" color="primary" size="large" onClick={() => onSetRoleEvent("BUYER")}>Quero Comprar</Button>
        </Link>
        <Link to="/">
          <Button variant="contained" color="primary" size="large" onClick={() => onSetRoleEvent("SELLER")}>Quero Vender</Button>
        </Link>
      </MainDiv>
    </Container>
  )
}

export default Choose;