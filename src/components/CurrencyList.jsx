import React from 'react';
import plus from '../img/plus.png';

const CurrencyList=({data})=> {

  function formatNum(num) {
     return (num / 1_000_000_000).toFixed(2);
  }  
 
  return (
    <div class='currency-list'>
      <table class='currency-list__table'>
        <thead>
          <tr>
            <th>№</th>
            <th></th>
            <th>Name</th>
            <th>VWAP (24Hr)</th>
            <th>Change (24Hr)</th>
            <th>Market Cap</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody class='currency-list__items'>
          {data.map((value) => (
            <tr key={value.id}>
              <td class='currency-list__item--rank'>{value.rank}</td>
              <td class='currency-list__item--symbol'>{value.symbol}</td>
              <td class='currency-list__item--name'>{value.name}</td>
              <td class='currency-list__item--vwap24Hr'>{parseFloat(value.vwap24Hr).toFixed(2)}</td>
              <td class='currency-list__item--changePercent24Hr'>{parseFloat(value.changePercent24Hr).toFixed(2)}%</td>
              <td class='currency-list__item--marketCapUsd'>{parseFloat(formatNum(value.marketCapUsd)).toLocaleString()} млрд $</td>
              <td class='currency-list__item--priceUsd'>{parseFloat(value.priceUsd).toFixed(2)} $</td>
              <td class='currency-list__item--add'><img src={plus} width={15} height={15} alt='plus'/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CurrencyList