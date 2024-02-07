import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfiguration } from "./store/homeSlice";

import PageNotFound from "./pages/404/PageNotFound";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/explore";
import SearchResult from "./pages/searchResult/SearchResult";
import Home from "./pages/home/Home";


function App() {
  const dispatch = useDispatch()
  const {url} = useSelector(state => state.home);


  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      dispatch(getApiConfiguration(res))
    });
  };

  return <div className="app">
    <h2>Movix</h2>
    <h2>{url?.total_pages}</h2>
  </div>;
}

export default App;
