import {useEffect} from 'react';
import Header from '../components/Header';
import CurrencyList from '../components/CurrencyList';
import { useDispatch, useSelector } from 'react-redux';
import {fetchGetCurrencyList} from '../redux/CurrencyListSlice';

const Main=() =>{
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchGetCurrencyList())
  }, []);
  const { status, data } = useSelector(state => state.currencyList);

  return (
    <>
    {status === 'loading' && <p>Загрузка...</p>}
    {status === 'succeeded' &&
    <div>
        
    <Header data={data}/>
    <CurrencyList data={data}/>
   </div>}
   </>
  )
}

export default Main