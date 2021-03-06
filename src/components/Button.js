import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btm--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
    }) => {
        const checkButtonStyle = STYLES.includes(buttonStyle)
            ? buttonStyle
            : STYLES[0];

        const checkButtonSize = SIZES.includes(buttonSize)
            ? buttonSize
            : SIZES[0];

        return (
            <Link to='/sign-up' className='btn-mobile'>
                <buton
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={type}>
                    {children}
                </buton>
            </Link>
        )
    };