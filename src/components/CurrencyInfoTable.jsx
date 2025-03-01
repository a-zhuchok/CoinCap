import React from 'react';

const CurrencyInfoTable = ({ data }) => {
  const formatNum = (num) => { return (num / 1_000_000_000).toFixed(2) };

  return (
    <table className='currencyInfoTable'>
      <thead>
        <tr>
          <th>Информация</th>
          <th>Данные о валюте</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Цена</td>
          <td>{parseFloat(data.priceUsd).toFixed(2).replace('.', ',')} $</td>
        </tr>
        <tr>
          <td>Рыночная капитализация</td>
          <td>{parseFloat(formatNum(data.marketCapUsd)).toLocaleString()} млрд $</td>
        </tr>
        <tr>
          <td>Текущее количество монет в обращении</td>
          <td>{parseFloat(data.supply / 1_000_000).toLocaleString()} млн</td>
        </tr>
        <tr>
          <td>Объем торгов за 24 часа</td>
          <td>{parseFloat(formatNum(data.volumeUsd24Hr)).toLocaleString()} млрд $</td>
        </tr>
        <tr>
          <td>Изменение цены за 24 часа</td>
          <td  className={`currencyInfoTable__item--changePercent24Hr ${parseFloat(data.changePercent24Hr) < 0 ? 'negative' : 'positive' }`}>
            {parseFloat(data.changePercent24Hr).toFixed(2).replace('.', ',')} %
          </td>
        </tr>
        <tr>
          <td>Средневзвешенная цена за 24 часа</td>
          <td>
            {parseFloat(data.vwap24Hr).toLocaleString()} $
          </td>
        </tr>
        <tr>
          <td>Ранг</td>
          <td>#{data.rank}</td>
        </tr>
        <tr>
          <td>Сайт</td>
          <td><a href={data.explorer}>{data.explorer}</a></td>
        </tr>
      </tbody>
    </table>
  )
}

export default CurrencyInfoTable;