import React, { useState } from 'react'
import './style.css'
import catFoto from './img/cat-photo.png'

export const Card = ({ data }) => {

    const [isSelected, setIsSelected] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected)
    }
    const handleMouseOver = () => {
        setIsHovered(true)
    }
    const handleMouseOut = () => {
        setIsHovered(false)
    }

    return <div className={`card_${isSelected ? 'selected' : 'default'}`}>
        <div className="card__border" onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className="card__content">

                <div className="card__text-container"> 
                        <div className='card__header'>Сказочное заморское яство</div> 
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

                <div className='circle'>
                    {data.weight} кг
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