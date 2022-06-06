
import {FETCH_RANDOM_IMAGE_START,FETCH_RANDOM_IMAGE_SUCCESS,FETCH_RANDOM_IMAGE_FAILED,CLEAR_IMAGE_STATE} from '../actionType'

const initialState = {
  images : [],
  isLoading : false,
  error : [],
  params : "Nft"
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RANDOM_IMAGE_START:
      return {
       ...state , 
       isLoading : true
      }
     case FETCH_RANDOM_IMAGE_SUCCESS:
       let tempimages ; 
       if(state.params === action.payload.params) {
            tempimages = [...state.images , ...action.payload.response]
       } else {
           tempimages = [ ...action.payload.response]
       }
      return {
       ...state , 
       isLoading : false,
       images : tempimages,
       params : action.payload.params
      }
      
    case FETCH_RANDOM_IMAGE_FAILED:
      return {
       ...state , 
       isLoading : false,
       error : action.payload
      }
    case CLEAR_IMAGE_STATE :{
      return {
        ...state,
        images:[],
        error:[]
      }
    } 

    default:
      return state
  }
}
