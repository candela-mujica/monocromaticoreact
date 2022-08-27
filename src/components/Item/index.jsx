import './item.css';
import {Link} from 'react-router-dom';
import React from 'react';

const Item = ({ info }) => {
    return (
        <Link to={`/detalle/${info.id}`} className="product">
            <img  src={info.image} alt=""/> 
            <p className="title">{info.title}</p>
            <p className="price">${info.price}</p>
        </Link>
    );
}

export default Item;