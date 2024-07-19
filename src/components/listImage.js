// import React,{useState} from "react";

const ListImage =({images})=>{
    return(
        <div className="imageList">
        {
                images.map(value => (
                   <img 
                       src={value.urls.small} alt={value.alt_description}
                   />
                     
                ))

             
            }
            
        </div>
    )
}
export default ListImage;