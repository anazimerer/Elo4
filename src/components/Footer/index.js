import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '../../assets/images/cards.png';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
  },
  footer_link: {
    marginLeft: '80px',
    marginTop: '20px',
  },
  footer_nav: {
    display: 'flex',
    flexDirection: 'collumn',
    width: '300px',
    fontSize: '15px',
  },
  footer_span: {
    fontSize: '24px',
    lineHeight: '27px',
    fontWeight: 'bold',
  },
  footer_ul: {
    listStyle: 'none',
    marginRight: '90px',
  },
  footer_li: {
    color: '#797979',
    display: 'lis-Item',
    fontSize: '16px',
    lineHeight: '20px',
    marginTop: '9px',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <div className={classes.footer_link}>
            <span className={classes.footer_span}>Sobre o Elo</span>
            <nav className={classes.footer_nav}>
              <ul className={classes.footer_ul}>
                <li className={classes.footer_li}>Quem Somos</li>
                <li className={classes.footer_li}>Pessoas e Lojas</li>
                <li className={classes.footer_li}>Produtos fora de serie</li>
                <li className={classes.footer_li}>Carreira</li>
              </ul>
            </nav>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.footer_link}>
            <span className={classes.footer_span}>Meios de pagamento</span>
            <nav className={classes.footer_nav}>
              <ul className={classes.footer_ul}>
                <li className={classes.footer_li}>
                  <img src={Card} />
                </li>

                <li className={classes.footer_li}>
                  Parcelado em até 12x sem juros
                </li>
              </ul>
            </nav>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.footer_link}>
            <span className={classes.footer_span}>Saiba Mais</span>
            <nav className={classes.footer_nav}>
              <ul className={classes.footer_ul}>
                <li className={classes.footer_li}>Como Coprar</li>
                <li className={classes.footer_li}>Pagamento Seguro</li>
                <li className={classes.footer_li}>Central de atendimento</li>
                <li className={classes.footer_li}>Quero abrir minha loja</li>
              </ul>
            </nav>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
