import { useEffect } from "react"
import { fetchDataFromApi } from "./api"
// import './App.css'
import { getApiConfiguration } from "./redux/homeSlice"
import { useDispatch, useSelector } from "react-redux"
import { Route, Routes } from "react-router-dom"

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home"
import Details from "./pages/details/Detail";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore"
import PageNotFound from "./pages/404/PageNotFound"

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home)
  useEffect(() => {
    fetchapiConfig();
  }, []);

  const fetchapiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => { console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      }
      dispatch(getApiConfiguration(url)) });
  }

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>

  )
}

export default App;
