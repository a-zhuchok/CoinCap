import React from 'react';

const CurrencyInfoTable=({data}) =>{

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
              <td>{parseFloat(data.priceUsd).toFixed(2)}$</td>
            </tr>
            <tr>
              <td>Рыночная капитализация</td>
              <td>{parseFloat(data.marketCapUsd).toLocaleString()}$</td>
            </tr>
            <tr>
              <td>Текущее количество монет в обращении</td>
              <td>{parseFloat(data.supply).toLocaleString()}$</td>
            </tr>
            <tr>
              <td>Объем торгов за 24 часа</td>
              <td>{parseFloat(data.volumeUsd24Hr).toLocaleString()}$</td>
            </tr>
            <tr>
              <td>Изменение цены за 24 часа</td>
              <td
                className={parseFloat(data.changePercent24Hr) > 0 ? "positive" : "negative"}
              >
                {parseFloat(data.changePercent24Hr).toFixed(2)}%
              </td>
            </tr>
            <tr>
              <td>Средневзвешенная цена за 24 часа</td>
              <td>
                {parseFloat(data.vwap24Hr).toLocaleString()}$
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

export default CurrencyInfoTable