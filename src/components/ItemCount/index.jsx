import './itemCount.css';
import React,{useState, useEffect} from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(parseInt(initial));

    const decrease = () => {
        setCount(count - 1);
    }

    const increase = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        setCount(parseInt(initial));
    }, [initial])

    return (
        <div className="counter">
            <button disabled={count <= 1} onClick={decrease} className="cant">-</button>
            <span className="span">{count}</span>
            <button disabled={count >= stock} onClick={increase} className="cant">+</button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)} className="boton">Agregar al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;