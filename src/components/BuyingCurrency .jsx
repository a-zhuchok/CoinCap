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
  const add = (name, price, count) => {
    dispatch(addCurrency({ name: name, price: price, count: count, total: count * price }))
    closeModal()
  };

  return (
    <div class='buyingCurrency '>
      <img className='buyingCurrency __close-button' onClick={closeModal} src={close} width={20} alt='close' />
      <span class='buyingCurrency __title'>Купить {name}</span>
      <span class='buyingCurrency __text'>Введите количество:</span>
      <input class='buyingCurrency __input' value={count} onChange={handleInputChange}></input>
      <button class='buyingCurrency __button' onClick={() => add(name, price, count)}>Купить</button>
    </div>
  )
}

export default BuyingCurrency 