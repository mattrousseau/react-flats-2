import React from 'react';

import Flat from './flat.jsx';

const FlatList = ({ flats, selectFlat, selectedFlat }) => {

  return (
    <div className="flat-list">
      {flats.map(flat => (<Flat flat={flat} key={flat.lat} selectFlat={selectFlat} selected={flat.name === selectedFlat.name} />))}
    </div>
  );
};

export default FlatList;
