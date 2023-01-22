import React, { useState } from 'react'
import './style.css'
import catFoto from './img/cat-photo.png'
import { Circle } from '../Circle';

export const Card = ({ data }) => {

    const textDefault = 'Сказочное заморское яство'
    const textSelHover = 'Котэ не одобряет?'


    const [isSelected, setIsSelected] = useState(false)
    const [cardHeader, setCardHeader] = useState(textDefault)

    const handleClick = () => {
        setIsSelected(!isSelected)
    }

    const handleMouseOver = () => {
        if (isSelected) {
            setCardHeader(textSelHover)
        }
    }

    const handleMouseOut = () => {
        setCardHeader(textDefault)
    }

    return <div className={`card_${isSelected ? 'selected' : 'default'}`}>
        <div className="card__border" onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className="card__content">

                <div className="card__text-container">
                    <div className='card__header'>
                        {cardHeader}
                    </div>
                    <div className='card__title'> {data.name} </div>
                    <div className='card__subtitle'> {data.taste} </div>

                    <div className='card__text'>
                        <div className='card__comment'> {data.quantity} </div>
                        <div className='card__comment'> {data.present} </div>
                        <div className='card__comment'> {data.dop_info} </div>
                    </div>
                </div>


                <div className='card__foto'>
                    <img alt='cat foto' src={catFoto} />
                </div>

                <div className="card__elem_right-bottom">
                    <Circle text={`${data.weight} кг`}/> 
                </div>
            </div>
        </div>
        <div className='card__footer'>
            <p>Чего сидишь? Порадуй котэ,
                <button
                    className='card__button'
                    type='button'
                    onClick={handleClick}>купи.
                </button>
            </p>
        </div>
    </div>
}