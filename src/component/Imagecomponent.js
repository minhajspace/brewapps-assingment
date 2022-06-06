import React from 'react'
import {useSelector, useselector} from "react-redux"


const  ImageComponent = ({image,index}) => {  
    
  return <>
     <div className='image-container-main'>
         <img style={{width:"100%",height:"200px",}} key={image.key} src={image.urls.small}  />
         <div className='d-flex flex-col background-black'>
                 <h4 className='heading-h4'>Meta trap house</h4>
             <div className='text-innerdiv'>
                   <p>@OxOfOeee</p>
                    <p>OxOfOeee</p>
                
             </div>
             <div>
             </div>
         </div>
     </div>
    
    </>

}
export default ImageComponent