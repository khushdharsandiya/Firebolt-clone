import React, { useState, useEffect } from 'react';
import '../style/Filter/PriceFilter.css';

const PriceFilter = ({ onFilter, initialMinPrice, initialMaxPrice }) => {
  const [min, setMin] = useState(initialMinPrice);
  const [max, setMax] = useState(initialMaxPrice);

  useEffect(() => {
    setMin(initialMinPrice);
    setMax(initialMaxPrice);
  }, [initialMinPrice, initialMaxPrice]);

  const handleFilter = () => {
    onFilter(Number(min), Number(max));
  };

  return (
    <div className="price-filter">
      <input
        type="number"
        placeholder="Min Price"
        value={min}
        onChange={e => setMin(e.target.value)}
        className="price-input"
      />
      <input
        type="number"
        placeholder="Max Price"
        value={max}
        onChange={e => setMax(e.target.value)}
        className="price-input"
      />
      <button onClick={handleFilter} className="filter-button">Filter</button>
    </div>
  );
};

export default PriceFilter;
