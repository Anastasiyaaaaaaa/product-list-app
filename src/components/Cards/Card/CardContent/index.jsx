import React from 'react'
import { Circle } from '../../Circle'
import './style.scss'

export const CardContent = ({ data, catFoto }) => {
    return <>
        <div className="card__text-container">
            <div className='card__title'> {data.name} </div>
            <div className='card__subtitle'> {data.taste} </div>

            <div className='card__text'>
                <div className='card__comment'> {data.quantity} </div>
                <div className='card__comment'> {data.present} </div>
                <div className='card__comment'> {data.dopInfo} </div>
            </div>

        </div>

        <div className='card__foto'>
            <img alt='cat foto' src={catFoto} />
        </div>

        <div className="card__elem_right-bottom">
            <Circle largeText={data.weight} smallText='кг' />
        </div>
    </>
}