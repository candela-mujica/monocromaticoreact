import {addDoc, collection, getFirestore} from 'firebase/firestore';
import React from 'react';
import {Link} from 'react-router-dom';
import {useCartContext} from '../../context/CartContext';
import ItemCart from '../ItemCart';

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    const orden = {
        buyer: {
            name: 'x',
            email: 'x',
            phone: 'x',
            adress: 'x',
        },
        items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
        total: totalPrice(),
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordenesCollection = collection(db, 'ordenes');
        addDoc(ordenesCollection, orden)
        .then(({id}) => console.log(id))
    }

    if (cart.length === 0) {
        return (
            <>
                <p>Carrito vacío</p>
                <Link to='/'>Agregar productos</Link>
            </>
        );
    }

    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            <p>Total: ${totalPrice()}</p>
            <button onClick={handleClick}>Terminar compra</button>
        </>
    )
}

export default Cart