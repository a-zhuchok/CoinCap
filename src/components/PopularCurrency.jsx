import React from 'react';

const PopularCurrency = ({ data }) => {

  return (
    <div class='popular-сurrency'>
      <span class='popular-сurrency__title'>Популярные криптовалюты:</span>
      <div class='popular-сurrency__items'>
        <div class='popular-currency__item'>
          <span>{data[0].symbol}</span>
          <span>{parseFloat(data[0].priceUsd).toFixed(2)} $</span>
        </div>
        <div class='popular-currency__item'>
          <span>{data[1].symbol}</span>
          <span>{parseFloat(data[1].priceUsd).toFixed(2)} $</span>
        </div>
        <div class='popular-currency__item'>
          <span>{data[2].symbol}</span>
          <span>{parseFloat(data[2].priceUsd).toFixed(2)} $</span>
        </div>
      </div>
    </div>
  )
}

export default PopularCurrency