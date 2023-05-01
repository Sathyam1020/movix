import './App.css'
import { useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfiguration } from './redux/Slices/HomeSlice';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//* PAGES
import Footer from './components/footer/Footer';
import Header from './components/header/header'
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import SearchResults from './pages/searchResults/SearchResults';
import Explore from './pages/explore/Explore';
import Four04 from './pages/404/Four04';


function App() {

  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home)
  console.log(url)

  useEffect(() => {
    apiTesting();
  }, [])

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular")
    .then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    })
  };

  return (
    <div>
      <h1>React</h1>
      {url?.total_pages}
    </div>
  )
}

export default App;
