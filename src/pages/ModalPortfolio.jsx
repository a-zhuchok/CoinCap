import {useState} from 'react';
import close from '../img/close.png';
import {addCurrency} from '../redux/AddCurrencySlice';
import { useSelector, useDispatch } from 'react-redux';

const ModalPortfolio=({closeModal, name, price}) =>{
    const dispatch = useDispatch();
    const [count, setCount] = useState()
    const handleInputChange = (event) => {
        setCount(event.target.value);
      };
    const add=(name, price, count)=>{
  
        dispatch(addCurrency({name:name, price:price, count:count, total:count*price}))
        closeModal()
       }
  return (
    
    <div class='modalPortfolio'>
        <img className='modalPortfolio__close-button' onClick={closeModal} src={close} width={20}  alt='close'/>
        <span class='modalPortfolio__title'>Купить {name}</span>
        <span class='modalPortfolio__text'>Введите количество:</span>
        <input class='modalPortfolio__input'  value={count} onChange={handleInputChange}></input>
        <button class='modalPortfolio__button' onClick={()=>add(name, price, count)}>Купить</button>
    </div>
  )
}

export default ModalPortfolio