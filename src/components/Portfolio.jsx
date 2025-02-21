import React from 'react';
import close from '../img/close.png';
import { useSelector, useDispatch } from 'react-redux';
import { deleteCurrency } from '../redux/CurrencyPortfolioSlice';

const Portfolio = ({ closeModal }) => {
  const dispatch = useDispatch();
  const { currencyPortfolio } = useSelector(state => state.currencyPortfolio);
  let totalValue = currencyPortfolio.reduce((acc, item) => acc + item.total, 0);
  const handleDeleteCurrency = (name) => { dispatch(deleteCurrency(name)) };

  return (
    <div class='portfolio'>
      <img class='portfolio__close-button' onClick={closeModal} src={close} width={20} alt='close' />
      <span class='portfolio__title'>Портфель</span>
      <table class='portfolio__table'>
        <thead>
          <tr>
            <th>Название</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Итого</th>
          </tr>
        </thead>
        <tbody>
          {currencyPortfolio.map((value) => (
            <tr key={value.id}>
              <td>{value.name}</td>
              <td>{value.price.replace('.', ',')} $</td>
              <td>{value.count}</td>
              <td>{(value.price * value.count).toFixed(2).replace('.', ',')} $</td>
              <td><img class='portfolio__delete-button' onClick={() => handleDeleteCurrency(value.name)} src={close} width={10} alt='close' /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <span>Итого: {totalValue.toFixed(2).replace('.', ',')} $</span>
    </div>
  )
}

export default Portfolio