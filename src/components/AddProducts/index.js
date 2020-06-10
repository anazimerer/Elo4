import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { 
    Grid, 
    Button,
    makeStyles,
}
from '@material-ui/core';

import api from '../../service/api';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));


export default function AddProducts () {
    
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [price, setPrice] = useState();
    const [paymentMethod, setPaymentMethod] = useState();
    const [category, setCategory] = useState();
    const [photos, setPhotos] = useState();
    const [installments, setInstallments] = useState();

    const CreateProduct = () => {
        const body = {
            name: name,
            description: description,
            price: price,
            paymentMethod: paymentMethod,
            category: category,
            photos: [photos],
            installments: installments
        }

        api.post('', body,)
          .then(() => {
            window.alert('Produto cadastrado com sucesso');
          }).catch(error => {
              window.alert('Erro ao cadastrar produto');
          });}

          const classes = useStyles();
          
    return(
            <Grid
                container spacing={2}
                direction="column"
                justify="space-evenly"
                alignItems="center"
            >
                <Grid item xs={12}>
                <input type="text" value={name}
                    placeholder="Nome do produto"
                    onChange={ (e) => setName(e.target.value) }
                />
                </Grid>

                <Grid item xs={12}>
                <input type="text" value={description}
                    placeholder="Descrição do produto"
                    onChange={ (e) => setDescription(e.target.value) }
                />
                </Grid>

                <Grid item xs={12}>
                <input type="text" value={price}
                    placeholder="Preço do produto"
                    onChange={ (e) => setPrice(e.target.value) }
                />
                </Grid>

                <Grid item xs={12}>
                <input type="text" value={paymentMethod}
                    placeholder="Forma de pagamento"
                    onChange={ (e) => setPaymentMethod(e.target.value) }
                />
                </Grid>

                <Grid item xs={12}>
                <input type="text" value={category}
                    placeholder="Categoria do produto"
                    onChange={ (e) => setCategory(e.target.value) }
                />
                </Grid>

                <Grid item xs={12}>
                <input type="text" value={photos}
                    placeholder="URL da foto do produto"
                    onChange={ (e) => setPhotos(e.target.value) }
                />
                </Grid>
                
                <Grid item xs={12}>
                    <input type="text" value={installments}
                        placeholder="Forma de parcelamento"
                        onChange={ (e) => setInstallments(e.target.value) }
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button variant="contained" color="primary" size="small"
                        onClick={CreateProduct} className={classes.margin}>
                            Criar Produto
                    </Button>

                    <Button variant="outlined" color="secondary" size="small"
                        onClick={CreateProduct}>
                            Limpar
                    </Button>

                </Grid>

            </Grid>
    )
}