import React,{useState,useEffect} from 'react'
import ImageComponent from './Imagecomponent';
import {useSelector,useDispatch} from "react-redux"
import {fetchImage} from '../store/actions/image.action'
import InfinitScroll from "react-infinite-scroll-component";
import {CLEAR_IMAGE_STATE} from '../store/actionType'



function ImageList ()  {
    const images = useSelector(state => state.unsplaceImages.images)
    const dispatch = useDispatch()
    const [page , setPage] = useState(1)
    const [params ,setParams] = useState("Nft")

    const handleSearchSubmit = (e) => {
      console.log(params)
      e.preventDefault()
      dispatch({type:CLEAR_IMAGE_STATE})
      dispatch(fetchImage(page,params))
    }

     const handleNextImageCall = () => {
       setPage(page + 1)
    }

    useEffect(()=>{
       dispatch(fetchImage(page,params))
    },[page])

   const displayLoadingText = () => {
     return   <div className='emply-container'>{ images.length === 0 ?<p>Nothing to display </p>: <p>Loading...</p>}</div>
    }

  const filters = ["Nft","Cars","Flowers","Hills","Nature","Robot"]

  const onFilterClick  = (item) => {
     setParams(item)
     dispatch(fetchImage(page,item))
  }

  return <>
         <div className="gray-background">
             <div className='d-flex mx-1 flex-warp filter-container flex-col'>
             <h2>Live Spaces</h2>
             <p>All NFTs on cyber either belong to or were inted by their space creator</p>
            </div>

         
        
          <div className='d-flex mx-1 flex-warp filter-container'>
              {filters.map((filterItem)=>{
                return <button onClick={()=>onFilterClick(filterItem)} className='flex-1 filters'>{filterItem}  </button>
              })}
             

            </div>
         <InfinitScroll
          dataLength={images.length}
          next={()=>handleNextImageCall()}
          hasMore={true}
          loader={displayLoadingText()}
         
        >
          
          <div >
           
            <div className='image-container'>
                {images && images.map((imageItem,index)=>{
              return <ImageComponent  image={imageItem} index={index}/>
          })}

            </div>
          
           
          </div>

            
         
        </InfinitScroll>
         </div>
        
        </>
}

export default ImageList