import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const CurrencyChart = () => {
  const { data, status } = useSelector(state => state.currencyHistory);

  return (
    <div className='currencyChart'>
      {status === 'loading' && <p>Загрузка данных...</p>}
      {status === 'failed' && <p>Ошибка. Что-то пошло не так...</p>}
      {status === 'succeeded' && (
        <ResponsiveContainer height={300} width={500}>
          <LineChart data={data.map(item => ({
            priceUsd: parseFloat(item.priceUsd).toFixed(2),
            date: new Date(item.date).toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
          }))}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='date' />
            <YAxis domain={['dataMin', 'dataMax']} />
            <Tooltip />
            <Line type='monotone' dataKey='priceUsd' stroke='#8884d8' strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}

export default CurrencyChart;