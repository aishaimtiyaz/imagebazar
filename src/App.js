import React, { useState } from "react";
import './App.css';
import ListImage from './components/listImage';
import SearchImage from './components/searchImage';
import axios from "axios";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('random');

  const fetchMoreImages = async () => {
    try {
      const response = await axios.get("https://api.unsplash.com/search/photos", {
        headers: { "Accept-Version": "v1", "Authorization": `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}` },
        params: {
          query: searchTerm,
          per_page: 10,
          page: page
        }
      });

      setImages(prevImages => [...prevImages, ...response.data.results]);
      setPage(prevPage => prevPage + 1);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App flex flex-col">
      <div className="SearchImage">
        <SearchImage images={images} setImages={setImages} setSearchTerm={setSearchTerm} setPage={setPage} />
      </div>

      <div>
        <ListImage images={images} fetchMoreImages={fetchMoreImages} />
      </div>

      <div className="footer flex items-center justify-evenly w-full h-10 bg-teal-600 text-white">
        @copyright
      </div>
    </div>
  );
}

export default App;
