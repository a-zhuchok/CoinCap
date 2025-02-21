import React from 'react';
import PopularCurrency from './PopularCurrency';
import Total from './Total';

const Header = () => {
  
  return (
    <div class='header'>
      <PopularCurrency />
      <Total />
    </div>
  )
}

export default Header