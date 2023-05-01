import './App.css'
import { useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { getApiConfiguration } from './redux/Slices/HomeSlice';

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
