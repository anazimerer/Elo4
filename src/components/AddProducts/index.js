import React, { useState, useEffect } from 'react';
import api from '../../service/api';

import { 
        AddProductContainer,
        AddProductInputContainer
     } 
from './styles';

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

        api.post('/products', body,)
          .then(() => {
            window.alert('Produto cadastrado com sucesso');
          }).catch(error => {
              window.alert('Erro ao cadastrar produto');
          });}

    return(
        <AddProductContainer>
            <AddProductInputContainer>
                <input type="text" value={name}
                    placeholder="Nome do produto"
                    onChange={ (e) => setName(e.target.value) }
                />

                <input type="text" value={description}
                    placeholder="Descrição do produto"
                    onChange={ (e) => setDescription(e.target.value) }
                />

                <input type="text" value={price}
                    placeholder="Preço do produto"
                    onChange={ (e) => setPrice(e.target.value) }
                />

                <input type="text" value={paymentMethod}
                    placeholder="Forma de pagamento"
                    onChange={ (e) => setPaymentMethod(e.target.value) }
                />

                <input type="text" value={category}
                    placeholder="Categoria do produto"
                    onChange={ (e) => setCategory(e.target.value) }
                />

                <input type="text" value={photos}
                    placeholder="URL da foto do produto"
                    onChange={ (e) => setPhotos(e.target.value) }
                />

                <input type="text" value={installments}
                    placeholder="Forma de parcelamento"
                    onChange={ (e) => setInstallments(e.target.value) }
                />
                <button onClick={CreateProduct}>Criar Produto</button>
            </AddProductInputContainer>
        </AddProductContainer>
    )
}