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
   }}>
    {props.title ? props.title : "Click"}
   </button>
  )
}

export default Btn
