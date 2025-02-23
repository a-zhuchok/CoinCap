import { useState } from 'react';
import { addCurrency } from '../redux/CurrencyPortfolioSlice';
import { useDispatch } from 'react-redux';

const CountCurrency = ({ name, price }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState('');
  const handleInputChange = (event) => {
    setCount(event.target.value)
  };
  const handleAddCurrency = (name, price, count) => {
    const countNumber = Number(count);
    dispatch(addCurrency({ name: name, price: price, count: countNumber, total: countNumber * price }))
    setCount('')
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddCurrency(name, price, count)
    }
  };

  return (
    <div class='countCurrency'>
      <span class='countCurrency__title'>Введите количество:</span>
      <input class='countCurrency__input' value={count} onChange={handleInputChange} onKeyDown={handleKeyDown}></input>
      <button onClick={() => handleAddCurrency(name, price, count)}>Купить</button>
    </div>
  )
}

export default CountCurrency