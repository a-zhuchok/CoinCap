import React from 'react';
import { useSelector } from 'react-redux';

const PopularCurrency = () => {
  const { data } = useSelector(state => state.currencyList);

  return (
    <div className='popularCurrency'>
      <span className='popularCurrency__title'>Популярные криптовалюты:</span>
      <div className='popularCurrency__items'>
        <div className='popularCurrency__item'>
          <span>{data[0].symbol}</span>
          <span>{parseFloat(data[0].priceUsd).toFixed(2).replace('.', ',')} $</span>
        </div>
        <div className='popularCurrency__item'>
          <span>{data[1].symbol}</span>
          <span>{parseFloat(data[1].priceUsd).toFixed(2).replace('.', ',')} $</span>
        </div>
        <div className='popularCurrency__item'>
          <span>{data[2].symbol}</span>
          <span>{parseFloat(data[2].priceUsd).toFixed(2).replace('.', ',')} $</span>
        </div>
      </div>
    </div>
  )
}

export default PopularCurrency;