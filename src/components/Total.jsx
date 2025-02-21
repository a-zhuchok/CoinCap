import { useState } from 'react';
import total from '../img/total.png';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';
import Portfolio from './Portfolio';

const Total = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { currencyPortfolio } = useSelector(state => state.currencyPortfolio);
  let totalValue = currencyPortfolio.reduce((acc, item) => acc + item.total, 0);
  totalValue = totalValue.toFixed(2).replace('.', ',');
  const openModal = () => {
    setModalIsOpen(true)
  };
  const closeModal = () => {
    setModalIsOpen(false)
  };
  
  return (
    <div class='total'>
      <img src={total} width={40} height={40} onClick={openModal} alt='total' />
      <div>
        <span class='total__title'>Итого:</span>
        <span class='total__value'>{totalValue} $</span>
      </div>
      <Modal class='modal' isOpen={modalIsOpen} overlayClassName='modal__overlay' onRequestClose={closeModal} style={{ content: { width: '600px', height: '400px', margin: 'auto' } }}>
        <Portfolio closeModal={closeModal} />
      </Modal>
    </div>
  )
}

export default Total