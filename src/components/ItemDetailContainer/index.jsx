import React, {useEffect, useState} from 'react';
import ItemDetail from '../ItemDetail';
import {useParams} from 'react-router-dom';

const products = [
    {id: 1, image: "https://i.ibb.co/ZNzK0z2/Barbijo-Bordado-Flores.webp", category: 'ropa', title: "Barbijo Bordado Flores"},
    {id: 2, image: "https://i.ibb.co/N2mJ2rg/Buzo-Heather.webp", category: 'ropa', title: "Buzo Heather"},
    {id: 3, image: "https://i.ibb.co/N2sNN79/Buzo-Miguel-Angel.webp", category: 'ropa', title: "Buzo Miguel Ángel"},
    {id: 4, image: "https://i.ibb.co/FbwZVCZ/Remera-Abbey-Road.webp", category: 'ropa', title: "Remera Abbey Road"},
    {id: 5, image: "https://i.ibb.co/VSkL8ML/Remera-Freddie-Mercury.webp", category: 'ropa', title: "Remera Freddie Mercury"},
    {id: 6, image: "https://i.ibb.co/LdvLPCz/Remera-Louis-Tomlinson.webp", category: 'ropa', title: "Remera Louis Tomlinson"},
    {id: 7, image: "https://i.ibb.co/6BY6gSP/Anillo-de-alambre.webp", category: 'bijouterie', title: "Anillo de alambre"},
    {id: 8, image: "https://i.ibb.co/H48C2kf/Aros-Gold-Caras.webp", category: 'bijouterie', title: "Aros Gold Caras"},
    {id: 9, image: "https://i.ibb.co/4ghkxyX/Collar-Letra.webp", category: 'bijouterie', title: "Collar Letra"},
    {id: 10, image: "https://i.ibb.co/c83g6LX/Collar-Margaritas.webp", category: 'bijouterie', title: "Collar Margaritas"},
    {id: 11, image: "https://i.ibb.co/Q8rSCvH/Pulsera-con-Dije.webp", category: 'bijouterie', title: "Pulsera con dije"},
    {id: 12, image: "https://i.ibb.co/8YD2ZWd/Pulsera-Cherry.webp", category: 'bijouterie', title: "Pulsera Cherry"},
];

export const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    const {detalleId} = useParams();

    useEffect(() => {
        const getData = new Promise (resolve => {
            setTimeout(() => {
                resolve(products);
            }, 1000);
        });
        getData.then(res => setData(res.find(product => product.id === parseInt(detalleId))));
    }, [])
    
    return (
        <ItemDetail data={data}/>
    );
}

export default ItemDetailContainer;