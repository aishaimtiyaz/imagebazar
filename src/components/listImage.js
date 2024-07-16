// import React,{useState} from "react";

const ListImage =({images})=>{
    return(
        <div>
        {
                images.map(value => (
                   <img 
                       src={value.urls.thumb} alt={value.alt_description}
                   />
                     
                ))
            }
        </div>
    )
}
export default ListImage;