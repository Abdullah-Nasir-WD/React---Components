import React from 'react';
import Btn from './Btn';

const Card = ({title , address , description , image}) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '250px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    textAlign: 'center',
    backgroundColor: '#fff',
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '16px'
  };
  

  return (
    <>


    <div style={{
        marginTop: '20px'
    }}>
        <div style={cardStyle}>
            <div>
                <img 
                    src={image} 
                    alt="Placeholder" 
                    style={imageStyle}
                />

            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <h3>{title}</h3>
                <i class="fa-regular fa-heart"></i>
            </div>
            <div>
            <p>{description}</p>
            <h5>{address}</h5>
            <Btn title="Buy Now !"/>

            </div>
        </div>

    </div>
    

    <script src="https://kit.fontawesome.com/70465652f7.js" crossorigin="anonymous"></script>
    </>
  );
};

export default Card;
