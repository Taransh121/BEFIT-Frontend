import React from 'react'

export const Button = (props) => {
    return (
        <button className='btn btn-primary'>
            {props.children}
        </button>
    )
}
