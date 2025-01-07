import React from 'react'

const Error = ({ error }) => {

    const errorStyle = {
        color: '#f31',
        margin: '1rem 0'
    }

    if(!error) return null;
    return (
        <p style={errorStyle}>{error}</p>
    )
}

export default Error
