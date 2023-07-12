import React from 'react'
//special propertie - children  
export default function MyPara(status, children) {

    return <p style={{
        fontSize: '20px',
        color: status === 'completed' ? 'green' : status === 'ongoing' ? 'orange' : 'black'
    }}>{children}</p>;

}
