import { useState } from 'react';
import close from '../img/close.png';
import { addCurrency } from '../redux/CurrencyPortfolioSlice';
import { useDispatch } from 'react-redux';

const BuyingCurrency = ({ closeModal, name, price }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState('');
  const handleInputChange = (event) => {
      setCount(event.target.value)
  };
  const handleAddCurrency = (name, price, count) => {
    const countNumber = Number(count);
    if (isNaN(countNumber) || countNumber <= 0) {
      alert('Пожалуйста, введите корректное количество')
      return
    }
    dispatch(addCurrency({ name, price, count: countNumber, total: countNumber * price }));
    closeModal();
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddCurrency(name, price, count)
    }
  };

  return (
    <div className='buyingCurrency'>
      <img className='buyingCurrency__close-button' onClick={closeModal} src={close} width={20} alt='close' />
      <span className='buyingCurrency__title'>Купить {name}</span>
      <span className='buyingCurrency__text'>Введите количество:</span>
      <input className='buyingCurrency__input' value={count} onChange={handleInputChange} onKeyDown={handleKeyDown}></input>
      <button className='buyingCurrency__button' onClick={() => handleAddCurrency(name, price, count)}>Купить</button>
    </div>
  )
}

export default BuyingCurrency;