import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGetCurrencyInfo } from '../redux/CurrencyInfoSlice';
import CountCurrency from '../components/CountCurrency';
import CurrencyInfoTable from '../components/CurrencyInfoTable';
import { Link } from 'react-router-dom';
import CurrencyChart from '../components/CurrencyChart';
import { fetchGetCurrencyHistory } from '../redux/CurrencyHistorySlice';

const CurrencyInfo = () => {
  const dispatch = useDispatch();
  const { symbol } = useParams();
  useEffect(() => {
    dispatch(fetchGetCurrencyInfo(symbol))
    dispatch(fetchGetCurrencyHistory(symbol))
  }, [dispatch]);
  const { data, status } = useSelector(state => state.currencyInfo);

  return (
    <>
      {status === 'loading' && <p>Загрузка...</p>}
      {status === 'failed' && <p>Ошибка. Что-то пошло не так...</p>}
      {status === 'succeeded' &&
        <div className='currencyInfo'>
          <p className='currencyInfo__title'>{data.name}</p>
          <CountCurrency name={data.name} price={parseFloat(data.priceUsd).toFixed(2)} />
          <CurrencyInfoTable data={data} />
          <CurrencyChart id={data.id} />
          <button className='currencyInfo__button'><Link to={`/`}>Назад</Link></button>
        </div>}
    </>
  )
}

export default CurrencyInfo;