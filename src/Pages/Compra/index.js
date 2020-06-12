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
      margin: "5px", 
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
    const [paymentMethod, setPaymentMethod] = useState([]);
    const [installments, setInstallments] = useState([]);

    const product = [
            {
                "description": "Anel bonito!",
                "paymentMethod": "card",
                "installments": 3,
                "photos": [
                    "https://contestimg.wish.com/api/webimage/5d1573050f87466658293983-0-feed?cache_buster=e5fb67562b5b3576eedfa3befd7fa7b7"
                ],
                "category": "Joias",
                "price": 50,
                "name": "Anel com pedra",
                "id": "3IKizH65ZSrFU03GnWiL"
            },
            {
                "paymentMethod": "card",
                "installments": 3,
                "photos": [
                    "https://www.chevrolet.com.br/content/dam/chevrolet/mercosur/brazil/portuguese/index/cars/cars-subcontent/segmento-carros/02-images/onix-premier.png"
                ],
                "category": "Carro",
                "price": 10,
                "name": "Onyx Chevrolet",
                "description": "Carro chevrolet Onyx novo 2019 / 2020",
                "id": "Aewj7zvmzfh6yK8DIwbT"
            }
        ]

    const productSetItem = () => {
        localStorage.setItem("products", JSON.stringify(product))
    }

    useEffect(() => {
        const productsBuy = localStorage.getItem("products")
        const productObject = JSON.parse(productsBuy)
        setProducts(productObject)
        const payment = localStorage.getItem("paymentMethod")
        const paymentMethod = JSON.parse(payment)
        setPaymentMethod(paymentMethod)
        const installments = localStorage.getItem("installments")
        const installmentsObject = JSON.parse(installments)
        setInstallments(installmentsObject)
    },[])

    const pay = paymentMethod.map((payment)=>{
        if (payment.paymentMethod.toUpperCase() === "CARD") {
            return(<>
                <h2>Forma de pagamento: Cartão</h2>
                <CreditCardIcon viewBox="0 0 24 17"/>
                </>
                )
        } else {
            return(<>
                <h2>Forma de pagamento: Boleto</h2>
                <ViewWeekIcon viewBox="0 0 24 17"/>
                </>
            )
        }
      })

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
            <Button className={classes.ratioLeft} variant="contained" color="primary" onClick={limparLocalStorage}>Home</Button>
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
                {pay}
                {installments.map((installment)=>{
                return(
                    <>
                    <b className={classes.font}> {installment.installments}x R$ {(valueBuy.toFixed(2)/installment.installments).toFixed(2)}</b>
                    </>)
                })}
                <TotalH2>TOTAL: R$ {valueBuy.toFixed(2)}</TotalH2>
            </ReportFinal>
        </Report>
      </Container>
    )
}

export default Compra;