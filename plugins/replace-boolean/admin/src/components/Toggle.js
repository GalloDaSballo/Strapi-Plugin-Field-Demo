import React from 'react'

export default ({onChange, name, value}) => (
    <div>
        <label htmlFor={name}>{name}</label>
        <span
            onClick={() => {
                onChange({target: { name, value: !value}})
            }}
        >
            {value ? 'TRUE' : 'FALSE'}
        </span>
    </div>
)