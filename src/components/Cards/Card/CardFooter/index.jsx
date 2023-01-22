import React from 'react'
import './style.scss'

export const CardFooter = ({ isAvailable, isSelected, footerSelectedText, taste, handleClick }) => {
    return <div className='card__footer'>
        {
            isAvailable ?
                isSelected ?
                    <span>{footerSelectedText}</span>
                    : <span>Чего сидишь? Порадуй котэ,
                        <button
                            className='card__button'
                            type='button'
                            onClick={handleClick}> купи.
                        </button>
                    </span>
                :
                <span>Печалька, {taste} закончился.</span>
        }
    </div>
}