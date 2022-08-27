import './cart.css';
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import React from 'react';
import {Link} from 'react-router-dom';
import {useCartContext} from '../../context/CartContext';
import ItemCart from '../ItemCart';

const Cart = () => {
    const {cart, totalPrice, clearCart} = useCartContext();

    const orden = {
        buyer: {
            name: 'x',
            email: 'x',
            message: 'x',
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
    
    const clear = () {
    clearCart()
    }
    if (cart.length === 0) {
        return (
            <>
                <p className="vacio">Carrito vacío</p>
                <Link to='/' className="agregar">Agregar productos</Link>
            </>
        );
    }

    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            <p className="total">Total: ${totalPrice()}</p>
            <button onClick={handleClick} className="terminar">Terminar compra</button>
            <button oncClick={clear}> Borrar cart  </button>
        </>
    )
}

export default Cart
