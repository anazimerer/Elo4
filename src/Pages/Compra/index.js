import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import CreditCardIcon from '@material-ui/icons/CreditCard';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import { SubMenu, Container, ContainerSup } from '../Vendedor/styles';
import { Report, ReportFinal, ImageCard, TotalH2 } from './style'
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      marginBottom: '1rem',
    }, 
    ratioLeft: {
      textAlign: "left", 
      margin: '5px',
    },
    iconCenter: {
        margin: "0 0 -5 0"
    },
    font: {
      fontSize: '20px',
      }
    })
  )
function Compra() {
    const classes = useStyles();
    const [products, setProducts] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState();
    const [installments, setInstallments] = useState();
    useEffect(() => {
        const productsBuy = localStorage.getItem("cart")
        const productObject = JSON.parse(productsBuy)
        setProducts(productObject)
        const paymentMethod = JSON.parse(localStorage.getItem("paymentMethod"))
        setPaymentMethod(paymentMethod)
        const installments = localStorage.getItem("installments")
        const installmentsObject = JSON.parse(installments)
        setInstallments(installmentsObject)
    },[])
    const valueBuy =  products.reduce((acumulador, product) => 
        acumulador + product.price, 0);
    const limparLocalStorage = () => {
      localStorage.clear()
    }
    return(
      <Container>
        <SubMenu>
          <ContainerSup></ContainerSup>
          <Link to="/">
            <Button className={classes.ratioLeft} variant="contained" color="primary" onClick={limparLocalStorage}>Quero Comprar</Button>
          </Link>
        </SubMenu>
        <Report>
          {products.map((product) => {
            return(
                <Card className={classes.root}>
                  <ImageCard src={product.photos} title={product.name}/>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      R$ {product.price.toFixed(2)}
                    </Typography>
                  </CardContent>
              </Card>
            )})}
            <hr />
            <ReportFinal>
              {paymentMethod === "card" &&
                <>
                  <h2>Forma de pagamento: Cartão</h2>
                  <CreditCardIcon viewBox="0 0 24 17"/>
                </>
                } {paymentMethod === "boleto" &&
                <>
                  <h2>Forma de pagamento: Boleto</h2>
                  <ViewWeekIcon viewBox="0 0 24 17"/>
                </>
                }
              <b className={classes.font}> {installments}x R$ {(valueBuy.toFixed(2)/installments).toFixed(2)}</b>
              <TotalH2>TOTAL: R$ {valueBuy.toFixed(2)}</TotalH2>
            </ReportFinal>
        </Report>
      </Container>
    )
}
export default Compra;