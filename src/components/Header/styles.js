import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavMenu = styled(Link)`
  color: #000;
  font-family: 'puritan';
  font-size: 14;
  line-height: 16px;
  margin: 0 16px;
  padding-bottom: 3px;
  text-decoration: none;
  margin-left: 20px;
  &:hover {
    filter: brightness(80%);
    border-bottom: 3px solid #1da89a;
    transition: 900ms;
  }
`;
