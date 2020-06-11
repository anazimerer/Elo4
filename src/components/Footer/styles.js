import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 90vw;
  align-content: center;
  background-color: #9159c1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ListMenu = styled.ul`
  justify-content: center;
  align-items: center;
`;
export const Menu = styled(Link)`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin-bottom: 9px;
  text-decoration: none;
  margin-right: 20px;
`;
