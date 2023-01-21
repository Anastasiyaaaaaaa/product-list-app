import React from 'react'
import { Card } from './Card';
import './style.css'
import data from '../../store/data.json';

export const Cards = () => {
    return <div className='cards'> 
        <p className='cards__header'> Ты сегодня покормил кота?</p>
        <div className='cards__content'>

            {data.Products.map((item) => <Card
                key={item.id}
                data={item} />)}
        </div>
    </div>
}