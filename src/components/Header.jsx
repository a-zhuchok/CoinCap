import React from 'react';
import PopularCurrnce from './PopularCurrency';
import Total from './Total';

const Header=({data}) =>{

  return (
    <div class='header'>
        <PopularCurrnce data={data}/>
        <Total/>
    </div>
  )
}

export default Header