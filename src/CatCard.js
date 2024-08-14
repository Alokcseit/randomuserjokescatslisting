import React from 'react';
import { Link } from 'react-router-dom';
const CatCard = ({ cat }) => {
  // Split the temperament string into an array of individual temperaments
  const temperaments = cat.temperament.split(',');

  return (
    <div className="cat-card">
      <img className="cat" src={cat.image} alt={cat.name} />
      <h3 className="cat-name">{cat.name}</h3>
      <p>{cat.description}</p>
      <div style={{display: 'flex', justifyContent: 'space-between'}}> 
        <p>Origin:</p>     
        <p style={{marginRight:'200px'}}>{cat.origin}</p>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <p>Temperament:</p>
        <div style={{ display: 'flex', flexDirection: 'row' ,flexWrap: 'wrap' ,marginTop:'18px' ,rowGap:'10px'}}>
          {temperaments.map((temp, index) => (
            <button key={index} className="temperament-button" style={{borderRadius:"10px" ,fontSize:"10px" ,height:"15px", margin: '0 10px'}} >
              {temp.trim()}
            </button>
          ))}
        </div>
      </div>
      <p><strong>Life Span:</strong> {cat.life_span} years</p>
      <Link to={`/cats/${cat.id}`} style={{ cursor: 'pointer' }}>Learn more</Link>
    </div>
  );
};

export default CatCard;
