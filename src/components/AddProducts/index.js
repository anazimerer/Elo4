import React, { useState } from 'react';
import { 
    Grid, 
    Button,
    makeStyles,
    TextField,
    Container,
}
from '@material-ui/core';

import api from '../../service/api';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: 25,
    },
    textField: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    margin: {
        marginLeft: theme.spacing(2),
        marginTop: 5,
    }
  }));

export default function AddProducts () {
    
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [category, setCategory] = useState('');
    const [photos, setPhotos] = useState('');
    const [installments, setInstallments] = useState('');

    const ClearAll = () =>{

        setName('')
        setDescription('');
        setPrice('')
        setPaymentMethod('');
        setCategory('');
        setPhotos('');
        setInstallments('');
    }

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
            ClearAll();
          }).catch(error => {
              window.alert('Erro ao cadastrar produto');
              ClearAll();
          });}

          const classes = useStyles();

    return(
        <Container >
            <form className={classes.root}>
                <Grid item xs={12}>
                    <TextField value={name}
                        fullWidth
                        margin="dense"
                        style={{ margin: 10 }}
                        placeholder="Nome do produto"
                        onChange={ (e) => setName(e.target.value) }
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField value={description}
                        fullWidth
                        style={{ margin: 10 }}
                        placeholder="Descrição do produto"
                        onChange={ (e) => setDescription(e.target.value) }
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField value={price}
                        fullWidth
                        style={{ margin: 10 }}
                        placeholder="Preço do produto"
                        onChange={ (e) => setPrice(e.target.value) }
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField value={paymentMethod}
                        fullWidth
                        style={{ margin: 10 }}
                        placeholder="Forma de pagamento"
                        onChange={ (e) => setPaymentMethod(e.target.value) }
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField value={category}
                        fullWidth
                        style={{ margin: 10 }}
                        placeholder="Categoria do produto"
                        onChange={ (e) => setCategory(e.target.value) }
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField value={photos}
                        fullWidth
                        style={{ margin: 10 }}
                        placeholder="URL da foto do produto"
                        onChange={ (e) => setPhotos(e.target.value) }
                    />
                </Grid>
            
                <Grid item xs={12}>
                    <TextField value={installments}
                        fullWidth
                        style={{ margin: 10 }}
                        placeholder="Forma de parcelamento"
                        onChange={ (e) => setInstallments(e.target.value) }
                    />
                </Grid>

                <Grid container
                    direction="row"
                    justify="flex-end"
                    alignItems="flex-end"
                >
                    <Button variant="outlined" color="secondary" size="small"
                        onClick={ClearAll}> 
                            Limpar
                    </Button>

                    <Button variant="contained" color="primary" size="small"
                        onClick={CreateProduct} className={classes.margin}>
                            Criar Produto
                    </Button>
                </Grid>
            </form>
        </Container>
    )
}