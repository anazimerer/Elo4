import styled from 'styled-components';

export const Container = styled.div`
    margin: 5% 4.2% 5% 2%;
    display: flex;
    justify-content: space-between;
`

export const Deafault = styled.div`

`

// Left Panels
export const Panel = styled.div`
    min-height: 15vh;
    border-style: solid;
    border-color: grey;
    border-width: 1px;
    & > div{
        margin: 10px 10px;
    }
`

export const NonHeightPanel = styled.div`
    border-style: solid;
    border-color: grey;
    border-width: 1px;
    & > div{
        margin: 10px 10px;
    }
`

export const AvatarPanel = styled.div`
    display: grid;
    grid-template-columns: 50px;
    grid-template-rows:25px; 
    & > img{
        grid-row-start: 1;
        grid-row-end:2;
    }
    & > p{
        grid-column-start: 2;
        margin-bottom: 15px;
    }
`

export const DataTable = styled.div`
    min-width: 15vw;
    width: 100%;

    & > table{
        width: 100%;
        margin: auto;

        & > tr{
            text-align: center;
        }   
        & > td, tr{
            vertical-align: bottom;
        } 
    }
`
// Left Panels

// Mid Panel
export const MainImage = styled.img`
    width: 400px;
    height: 400px;
`
export const SecondaryImage = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
`
// Mid Panel

// Right Panel
export const BuyPanel = styled.div`
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`
