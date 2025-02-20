import {useEffect} from 'react';
import Main from './pages/Main';
import Header from './components/Header';
import CurrencyInfo from './pages/CurrencyInfo';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {fetchGetCurrencyList} from './redux/CurrencyListSlice';
import './App.css';

const App=()=> {
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
    <Routes>
      <Route path='/' element={ <Main data={data}/>} />
      <Route path="/CurrencyInfo/:symbol" element={<CurrencyInfo />} />
    </Routes>
   </div>}
   </>
   
  )
}

export default App
