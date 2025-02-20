import {useState, useEffect} from 'react';
import plus from '../img/plus.png';
import { useNavigate, Link } from 'react-router-dom';
import {addCurrency} from '../redux/AddCurrencySlice';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import ModalPortfolio from '../pages/ModalPortfolio';

const Main=({data}) =>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalCurrentName, setModalCurrentName] = useState('');
  const [modalCurrentPrice, setModalCurrentPrice] = useState('');
  const formatNum=(num)=> {
    return (num / 1_000_000_000).toFixed(2);
 }  

 const add=(a)=>{
  dispatch(addCurrency(a))
 }
 const openModal = (name, price) => {
  setModalIsOpen(true)
  setModalCurrentName(name)
  setModalCurrentPrice(price)
};
const closeModal = () => {
  setModalIsOpen(false)
};
Modal.setAppElement('#root');
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
              <td class='currency-list__item--symbol'><Link to={`/CurrencyInfo/${value.id}`}>{value.symbol}</Link></td>
              <td class='currency-list__item--name'>{value.name}</td>
              <td class='currency-list__item--vwap24Hr'>{parseFloat(value.vwap24Hr).toFixed(2)}</td>
              <td class='currency-list__item--changePercent24Hr'>{parseFloat(value.changePercent24Hr).toFixed(2)}%</td>
              <td class='currency-list__item--marketCapUsd'>{parseFloat(formatNum(value.marketCapUsd)).toLocaleString()} млрд $</td>
              <td class='currency-list__item--priceUsd'>{parseFloat(value.priceUsd).toFixed(2)} $</td>
              <td class='currency-list__item--add'><img src={plus} onClick={()=>openModal(value.symbol, parseFloat(value.priceUsd).toFixed(2))} width={15} height={15} alt='plus'/></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal class='modal' isOpen={modalIsOpen} overlayClassName='modal__overlay' onRequestClose={closeModal} style={{ content: { width: '500px', height:'400px', margin:'auto' } }}>
      <ModalPortfolio closeModal={closeModal} name={modalCurrentName} price={modalCurrentPrice}/>
      </Modal>
    </div>
  )
}

export default Main