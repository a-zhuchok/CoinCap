import React from 'react';
import PopularCurrency from './PopularCurrency';
import Total from './Total';

const Header = () => {
  
  return (
    <div className='header'>
      <PopularCurrency />
      <Total />
    </div>
  )
}

export default Header;