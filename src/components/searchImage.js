import axios from "axios";
import React,{useState,useEffect} from "react";

const SearchImage =({images,setImages})=>{
const [searchTerm,setSearchTerm] = useState('random');
const [page,setPage] = useState(1);

 useEffect(()=>{
    fetchingImages(null);
},[]);

async function fetchingImages(e=null)
    {
        if(e != null)
        {
            e.preventDefault();
        }
        
        try{
            const response = await axios.get("https://api.unsplash.com/search/photos",{
                headers: { "Accept-Version":"v1", "Authorization":`Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`},
    
                params:{query:searchTerm,
                    per_page:10,
                    page:page
                }
            });

            if(e && e.target.className == "nextButton")
                {
                    setImages([...images, ...response.data.results]);
                    setPage(page+1);
                }
            else
                {
                    setImages(response.data.results);
                }
                
            
            
            
        }
        catch(err)
        {
            console.log(err);
        }
    }

    return(
    <div className="inputHeader">
       <form onSubmit={(e)=>fetchingImages(e)}>
            <input type="text" placeholder="Search images" onChange={(e)=>setSearchTerm(e.target.value)} />

            <button type="submit" className="submitButton">Search</button>

             <button className="nextButton" onClick={(e)=>fetchingImages(e)}>Next</button>

       </form>
    </div>
    );
}
export default SearchImage;