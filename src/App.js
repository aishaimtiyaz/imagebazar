
import React,{useState} from "react";
import './App.css';
import ListImage from './components/listImage';
import SearchImage from './components/searchImage';

function App() {
  const [images,setImages] = useState([]);

  return (
    <div className="App">
     <SearchImage setImages={setImages}/>
     <ListImage images={images}/>
    </div>
  );
}

export default App;
