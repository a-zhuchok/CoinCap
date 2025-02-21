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
  }, []);
  const { data, status } = useSelector(state => state.currencyInfo);

  return (
    <>
      {status === 'loading' && <p>Загрузка...</p>}
      {status === 'succeeded' &&
        <div class='currencyInfo'>
          <p class='currencyInfo__title'>{data.name}</p>
          <CountCurrency name={data.name} price={parseFloat(data.priceUsd).toFixed(2)} />
          <CurrencyInfoTable data={data} />
          <CurrencyChart id={data.id} />
          <button class='currencyInfo__button'><Link to={`/`}>Назад</Link></button>
        </div>}
    </>
  )
}

export default CurrencyInfo