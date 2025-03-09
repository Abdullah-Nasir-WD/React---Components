import React from 'react'


function Btn(props) {

  return (
   <button style={{
        padding: '5px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: 'black',
        color: 'orange',
        margin: '5px',
        fontSize: 20
   }}
    onClick={props.container}>{props.title ? props.title : "Click Me"}</button>
  )
}

export default Btn
