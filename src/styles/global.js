import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing:border-box;
}
body{
  background:#fff no-repeat center top;
  -webkit-font-smoothing:antialiased;
}
body, input, button {
  font:14px Arial, sans-serif;
}
button{
  cursor:pointer;
}
`;
