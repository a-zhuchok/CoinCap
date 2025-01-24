import React from 'react';

const PopularCurrency = ({ data }) => {

  return (
    <div class='popular-сurrency'>
      <p class='popular-сurrency__title'>Популярные криптовалюты:</p>
      <div class='popular-сurrency__items'>
        <div class='popular-currency__item'>
          <p>{data[0].symbol}</p>
          <p>{parseFloat(data[0].priceUsd).toFixed(2)} $</p>
        </div>
        <div class='popular-currency__item'>
          <p>{data[1].symbol}</p>
          <p>{parseFloat(data[1].priceUsd).toFixed(2)} $</p>
        </div>
        <div class='popular-currency__item'>
          <p>{data[2].symbol}</p>
          <p>{parseFloat(data[2].priceUsd).toFixed(2)} $</p>
        </div>
      </div>
    </div>
  )
}

export default PopularCurrency