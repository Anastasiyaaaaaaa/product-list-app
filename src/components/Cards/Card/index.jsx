import React from 'react'
import './style.css'
import catFoto from './img/cat-photo.png'

export const Card = ({ data }) => { 
    return <div className='сard'>
        <div className="card__header">Сказочное заморское яство</div>
        <div className="card__title"> {data.name} </div>
        <div className="card__subtitle"> {data.taste} </div>

        <div className="card__text">
            <div className="card__comment"> {data.quantity} </div>
            <div className="card__comment"> {data.present} </div>
            <div className="card__comment"> {data.dop_info} </div>
        </div>

        <div className="card__foto">
            <img alt="cat foto" src={catFoto} />
        </div>

        <div className="circle_blue">
            {data.weight} кг
        </div>

        <div className="card__footer">
            <p>Чего сидишь? Порадуй котэ, <button>купи.</button></p>
        </div>
    </div>
}