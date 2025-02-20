import { useState } from 'react';
import total from '../img/total.png';
import { useSelector, useDispatch } from 'react-redux';

const Total=() =>{
  const dispatch = useDispatch();
  const { currencyPortfolio } = useSelector(state => state.currencyPortfolio);
  let totalValue=currencyPortfolio.reduce((acc, item) => acc + item.total, 0)

  return (
    <div class='total'>
      <img src={total} width={40} height={40} alt='total'/>
      <div>
      <span class='total__title'>Итого:</span>
      <span class='total__value'>{totalValue} $</span>
      </div>
   </div>
  )
}

export default Total