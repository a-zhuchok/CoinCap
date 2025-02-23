import { useState } from 'react';
import plus from '../img/plus.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import BuyingCurrency  from '../components/BuyingCurrency ';

const CurrencyTable = () => {
  const { data } = useSelector(state => state.currencyList);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalCurrentName, setModalCurrentName] = useState('');
  const [modalCurrentPrice, setModalCurrentPrice] = useState('');
  const formatNum = (num) => { return (num / 1_000_000_000).toFixed(2) };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page)
  };
  const openModal = (name, price) => {
    setModalIsOpen(true)
    setModalCurrentName(name)
    setModalCurrentPrice(price)
  };
  const closeModal = () => {
    setModalIsOpen(false)
  };

  return (
    <div class='currencyTable'>
      <table class='currencyTable__table'>
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
        <tbody class='currencyTable__items'>
          {currentItems.map((value) => (
            <tr key={value.id}>
              <td class='currencyTable__item--rank'>{value.rank}</td>
              <td class='currencyTable__item--symbol'><Link to={`/CurrencyInfo/${value.id}`} >{value.symbol}</Link></td>
              <td class='currencyTable__item--name'>{value.name}</td>
              <td class='currencyTable__item--vwap24Hr'>{parseFloat(value.vwap24Hr).toFixed(2).replace('.', ',')} $</td>
              <td  class={`currencyTable__item--changePercent24Hr ${parseFloat(value.changePercent24Hr) < 0 ? 'negative' : 'positive' }`}>{parseFloat(value.changePercent24Hr).toFixed(2).replace('.', ',')} %</td>
              <td class='currencyTable__item--marketCapUsd'>{parseFloat(formatNum(value.marketCapUsd)).toLocaleString()} млрд $</td>
              <td class='currencyTable__item--priceUsd'>{parseFloat(value.priceUsd).toFixed(2).replace('.', ',')} $</td>
              <td class='currencyTable__item--add'>
                <img src={plus}  onClick={() =>openModal(value.symbol, parseFloat(value.priceUsd).toFixed(2))} width={15} height={15} alt='plus'/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal class='modal' isOpen={modalIsOpen} overlayClassName='modal__overlay' onRequestClose={closeModal} style={{ content: { width: '500px', height: '400px', margin: 'auto' } }}>
        <BuyingCurrency  closeModal={closeModal} name={modalCurrentName} price={modalCurrentPrice} />
      </Modal>
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button class='currencyTable__pagination' key={index} onClick={() => handlePageChange(index + 1)} disabled={currentPage === index + 1}>{index + 1}</button>
        ))}
      </div>
    </div>
  )
}

export default CurrencyTable