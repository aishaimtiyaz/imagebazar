
import React,{useState} from "react";
import './App.css';
import ListImage from './components/listImage';
import SearchImage from './components/searchImage';

function App() {
  const [images,setImages] = useState([]);

  return (
    <div className="App">
      <div className="SearchImage"><SearchImage images={images} setImages={setImages}/></div>

      <div> <ListImage images={images}/> </div>

      <div className="footer">@copyright</div>
    </div>
  );
}

export default App;
