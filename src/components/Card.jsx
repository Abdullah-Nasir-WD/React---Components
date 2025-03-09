import React from 'react';
import Btn from './Btn';

const Card = ({title, image, price, address, }) => {
  const cardStyle = {
    border: "1px solid silver",
    borderRadius: "8px", 
    width: '250px',
    boxShadow: '0 4px 8px rgba(38, 38, 38, 0.1)',
    padding: '16px',
    textAlign: 'center',
    backgroundColor: 'white'
}

const imageStyle = {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '16px'
};
  
return (
  <>
      <div style={cardStyle}>
          <img 
              src={image}
              alt="placeholder"
              style={imageStyle}
          />

         <div style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
          }}>

              <h3>Rs: {price}/=</h3>
              <i class="fa-regular fa-heart"></i>
         
          </div>

          <p class="flex-start"><b>Title:</b> {title}.</p>
          <p class="flex-start"><b>Address:</b> {address}.</p>
          {/* <p class="flex-start"><b>Date:</b> {PastTime}</p> */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            textAlign:'border'
          }}>
            <Btn title="Buy Now"/>
          </div>
      </div>        
  

    <script src="https://kit.fontawesome.com/70465652f7.js" crossorigin="anonymous"></script>
    </>
  );
};

export default Card;
