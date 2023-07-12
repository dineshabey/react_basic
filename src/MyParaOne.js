import React from 'react'

export default function MyParaOne(status, text) {
    return <p style={{
        fontSize: '20px',
        color: status === 'completed' ? 'green' : status === 'ongoing' ? 'orange' : 'black'
    }}>

    </p>;
}
