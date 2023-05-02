import { useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfiguration } from './redux/Slices/HomeSlice';
import { Routes, Route } from 'react-router-dom';

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
    fetchApiConfig();
  }, [])

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration")
    .then((res) => {
      console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + "original", 
        poster: res.images.secure_base_url + "original", 
        profile: res.images.secure_base_url + "original", 
      }

      dispatch(getApiConfiguration(url));
    })
  };

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:mediaType/:id' element={<Details />} />
        <Route path='/search/:query' element={<SearchResults />} />
        <Route path='/explore/:mediaType' element={<Explore />} />
        <Route path='*' element={<Four04 />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
