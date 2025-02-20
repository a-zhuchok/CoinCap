import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchGetCurrencyInfo } from '../redux/CurrencyInfoSlice';
import CountCurrency from '../components/CountCurrency';
import CurrencyInfoTable from '../components/CurrencyInfoTable';
import { useNavigate, Link } from 'react-router-dom';

const CurrencyInfo=() =>{
  const dispatch = useDispatch();
  const { symbol } = useParams()
  useEffect(()=>{dispatch(fetchGetCurrencyInfo(symbol))}, [])
  const { data, status } = useSelector(state => state.currencyInfo);

  return (
    <>
    {status === 'loading' && <p>Загрузка...</p>}
    {status === 'succeeded' &&
    <div class='currencyInfo'>  
    <p class='currencyInfo__title'>{data.name}</p>
    <CountCurrency/>
    <CurrencyInfoTable data={data}/>
    <button class='currencyInfo__button'><Link to={`/`}>Назад</Link></button>
   </div>}
   </>
  )
}

export default CurrencyInfo