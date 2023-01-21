import React from 'react'
import { Card } from './Card';
import './style.css'
import data from '../../store/data.json';

export const Cards = () => {

    const products = data.Products;
   
    return <div className='cards'>
        <p className='cards__header'> Ты сегодня покормил кота?</p>
        <div className='cards__content'>

            {products.map((item) => <Card
                key={item.id} 
                data={item} 
                />)}
        </div>
    </div>
}