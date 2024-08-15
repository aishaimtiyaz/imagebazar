
import React, { useState } from "react";

const SearchImage = ({ images, setImages, setSearchTerm, setPage }) => {
  const [localSearchTerm, setLocalSearchTerm] = useState('random');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(localSearchTerm);
    setImages([]);  // Clear previous images
    setPage(1);     // Reset page to 1 for new search
  };

  return (
    <div className="inputHeader bg-teal-600 w-screen h-14 text-white text-lg flex justify-around fixed top-0 z-10 items-center">
      <form onSubmit={handleSearch} className="form flex items-center justify-center w-4/5 h-10 gap-2">
        <input className="border-none outline-1 outline-teal-600 rounded-md w-1/3 p-4 h-1/2 text-slate-500" type="text" placeholder="Search images" onChange={(e) => setLocalSearchTerm(e.target.value)} />
        <button type="submit" className="submitButton border-none rounded-md h-10 w-32 hover:bg-teal-500">Search</button>
      </form>
    </div>
  );
};

export default SearchImage;
