import axios from "axios";
import React,{useState} from "react";

const SearchImage =({setImages})=>{
const [searchTerm,setSearchTerm] = useState('');



async function fetchingImages(e)
    {
        e.preventDefault();
        try{
            const response = await axios.get("https://api.unsplash.com/search/photos",{
                headers: { "Accept-Version":"v1", "Authorization":"Client-ID BCpLU6HvGZVkZ2L0NX8xO_j4LVnB7B2cHbc8_nOzwTQ"},
    
                params:{query:searchTerm}
            });
            setImages(response.data.results);
            // console.log("here"+response.data.results);
            
        }
        catch(err)
        {
            console.log(err);
        }
    }

    return(
    <div>
       <form onSubmit={(e)=>fetchingImages(e)}>
            <input type="text" placeholder="Search images" onChange={(e)=>setSearchTerm(e.target.value)} value={searchTerm}/>
            <button type="submit">Search</button>
       </form>
    </div>
    );
}
export default SearchImage;