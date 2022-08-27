import './cart.css';
import React from 'react';
import {Link} from 'react-router-dom';
import {useCartContext} from '../../context/CartContext';
import ItemCart from '../ItemCart';
import ContactForm from '../ContactForm/index';

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    if (cart.length === 0) {
        return (
            <div className="vacio">
                <p>Carrito vacío</p>
                <Link to='/' className="agregarP">Agregar productos</Link>
            </div>
        );
    }

    return (
        <>
            {
                cart.map(product => <ItemCart key={product.id} product={product}/>)
            }
            <p className="total">Total: ${totalPrice()}</p>
            <ContactForm/>
        </>
    )
}

export default Cart