import React, { useState } from 'react'
import './style.scss'
import catFoto from './img/cat-photo.png'
import { CardFooter } from './CardFooter';
import { CardContent } from './CardContent';
import { CardHeader } from './CardHeader';
import { getCardClass } from './func';

export const Card = ({ data }) => {

    const textDefault = data.topDefault
    const textSelHover = data.topSelectedHover

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

    return <div className={getCardClass(data.isAvailable, isSelected)}>
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

    </div>
}