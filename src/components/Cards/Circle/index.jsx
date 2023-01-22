import React from 'react'
import './style.scss'

export const Circle = ({ largeText, smallText }) => {
    return <div className='circle'>
        <span className='circle__text_large'>{largeText}</span> 
        <span className='circle__text_small'>{smallText}</span>
    </div>
}