// import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail';
import React, {useEffect, useState} from 'react';

const product = {id: 1, image: "https://i.ibb.co/N2sNN79/Buzo-Miguel-Angel.webp", title: "Buzo Miguel Ángel"};

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(product);
            }, 2000);
        });
        getData.then(res => setData(res));
    }, [])
    
    return (
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;