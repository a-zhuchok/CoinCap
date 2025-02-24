import { useEffect } from 'react';
import Header from './components/Header';
import CurrencyTable from './pages/CurrencyTable';
import CurrencyInfo from './pages/CurrencyInfo';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetCurrencyList } from './redux/CurrencyListSlice';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchGetCurrencyList()) }, [dispatch]);
  const { status } = useSelector(state => state.currencyList);

  return (
    <>
      {status === 'loading' && <p>Загрузка...</p>}
      {status === 'failed' && <p>Ошибка. Что-то пошло не так...</p>}
      {status === 'succeeded' &&
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<CurrencyTable />} />
            <Route path='/CurrencyInfo/:symbol' element={<CurrencyInfo />} />
          </Routes>
        </div>}
    </>
  )
}

export default App;