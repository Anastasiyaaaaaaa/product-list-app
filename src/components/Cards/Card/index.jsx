import React, { useState } from 'react'
import './style.scss'
import catFoto from './img/cat-photo.png'
import { CardFooter } from './CardFooter';
import { CardContent } from './CardContent';
import { CardHeader } from './CardHeader';

export const Card = ({ data }) => {

    const textDefault = 'Сказочное заморское яство'
    const textSelHover = 'Котэ не одобряет?' 

    const [isSelected, setIsSelected] = useState(false)
    const [cardHeader, setCardHeader] = useState(textDefault)

    const handleClick = () => {
        if (data.isAvailable) {
            setIsSelected(!isSelected)
        }
    }

    const handleMouseOver = () => {
        if (isSelected) {
            setCardHeader(textSelHover)
        }
    }

    const handleMouseOut = () => {
        setCardHeader(textDefault)
    }

    return <div className={`card_${data.isAvailable ?
        isSelected ? 'selected' : 'default'
        :
        'disable'
        }`}>
        <div className="card__border" onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className="card__container">

                <CardHeader
                    cardHeader={cardHeader} />
                <CardContent
                    catFoto={catFoto}
                    data={data}
                />
            </div>
        </div>
        <CardFooter
            isAvailable={data.isAvailable}
            isSelected={isSelected}
            footerSelectedText={data.footerSelected}
            taste={data.taste}
            handleClick={handleClick} />

    </div >
}