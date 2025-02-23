import { useState } from 'react';
import close from '../img/close.png';
import { addCurrency } from '../redux/CurrencyPortfolioSlice';
import { useDispatch } from 'react-redux';

const BuyingCurrency = ({ closeModal, name, price }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState();
  const handleInputChange = (event) => {
      setCount(event.target.value)
  };
  const handleAddCurrency = (name, price, count) => {
    const countNumber = Number(count)
    dispatch(addCurrency({ name: name, price: price, count: countNumber, total: countNumber * price }))
    closeModal()
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddCurrency(name, price, count)
    }
  };

  return (
    <div class='buyingCurrency '>
      <img className='buyingCurrency__close-button' onClick={closeModal} src={close} width={20} alt='close' />
      <span class='buyingCurrency__title'>Купить {name}</span>
      <span class='buyingCurrency__text'>Введите количество:</span>
      <input class='buyingCurrency__input' value={count} onChange={handleInputChange} onKeyDown={handleKeyDown}></input>
      <button class='buyingCurrency__button' onClick={() => handleAddCurrency(name, price, count)}>Купить</button>
    </div>
  )
}

export default BuyingCurrency 