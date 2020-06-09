import styled from 'styled-components';

export const Container = styled.div`
    display:grid;
`;
export const SubMenu = styled.div`
    display:grid;
    height: 250px;
`;
export const ContainerSup = styled.div`
    grid-row-start: 1;
    grid-row-end: 2;
    background-color: #1DA89A;
`;

export const ContainerInf = styled.div`
    background-color: #FFFFFF;
    text-align: center;
    justify-content: center;
`;
export const Products = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
`
export const Product = styled.div`
    text-align: center;
`
export const DescDel = styled.div`
    width: 300px;
    margin: 1rem;
    display: grid;
    grid-template-columns: repeat(12, 1fr)
`
export const Desc = styled.div`
    font-size: 20px;
    grid-column: 1/12;
    text-align: center;
`
export const Delete = styled.div`
    grid-column-start: 12;
    text-align: center;
`