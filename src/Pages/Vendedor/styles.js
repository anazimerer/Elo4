import styled from 'styled-components';

export const Container = styled.div`
    display:grid;
`;
export const SubMenu = styled.div`
`;
export const ContainerSup = styled.div`
    grid-row-start: 1;
    grid-row-end: 2;
    background-color: #1DA89A;
    height: 150px;
`;

export const ContainerInf = styled.div`
    background-color: #FFFFFF;
    text-align: center;
    justify-content: center;
    height: 125px;
    padding: 1rem;
`;
export const Products = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
`
export const Product = styled.div`
    text-align: center;
`
export const Location = styled.span`
    font-size: 20px;
`

export const SectionAddProduct = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    `
export const ImageCard = styled.img`
    width: 300px;
    height: 200px;
`