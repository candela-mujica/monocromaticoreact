import React from 'react';
import {useCartContext} from '../../context/CartContext';
import './itemCart.css';

const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();
    
    return(
        <div className='itemCart'>
            <img src={product.image} alt={product.title}/>
            <div>
                <p className="nombre">{product.title}</p>
                <p className="dato">Cantidad: {product.quantity}</p>
                <p className="dato">Precio por unidad: ${product.price}</p>
                <p className="dato">Subtotal: ${product.quantity * product.price}</p>
                <button onClick={() => removeProduct(product.id)} className="eliminar">Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart