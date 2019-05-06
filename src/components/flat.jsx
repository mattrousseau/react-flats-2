import React from 'react';

const Flat = ({ flat, selectFlat, selected }) => {
  const clickHandle = (e) => {
    selectFlat(flat);
  };

  return (
    <div className={`card${selected ? ' active' : ''}`} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${flat.imageUrl}')` }}>
      <div className="card-category">{flat.price} {flat.priceCurrency}</div>
      <div className="card-description">
        <h2>{flat.name}</h2>
      </div>
      <a className="card-link" href="#" onClick={clickHandle} ></a>
    </div>
  );
};

export default Flat;
