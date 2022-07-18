import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import React, {useState, useEffect} from 'react';
import Title from '../Title';

const products = [
    {id: 1, image: "https://i.ibb.co/N2sNN79/Buzo-Miguel-Angel.webp", title: "Buzo Miguel Ángel"},
    {id: 2, image: "https://i.ibb.co/4ghkxyX/Collar-Letra.webp", title: "Collar Letra"},
    {id: 3, image: "https://i.ibb.co/H48C2kf/Aros-Gold-Caras.webp", title: "Aros Gold Caras"},
];

export const ItemListContainer = ({texto}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });
        getData.then(res => setData(res));
    }, [])

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`);
    }
   
    return (
        <>
            <Title greeting={texto}/>
            <ItemCount initial={1} stock={10} onAdd={onAdd}/>
            <ItemList data={data}/>
        </>
    );
}

export default ItemListContainer;