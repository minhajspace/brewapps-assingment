import axios from 'axios'
import {FETCH_RANDOM_IMAGE_START,FETCH_RANDOM_IMAGE_SUCCESS,FETCH_RANDOM_IMAGE_FAILED} from '../actionType'

export function fetchImage (page,params){
    return  async (dispatch) => {
        dispatch({type:FETCH_RANDOM_IMAGE_START})
     try{
      const response =await axios.get(`https://api.unsplash.com/search/photos/?page=${page}&query=${params}&client_id=6QDxVPT42nrcJs5H9TdPmcLCJaiM7KVby-Xvg0B9Ke0&per_page=10&order_by=relevant;`)
      dispatch({type:FETCH_RANDOM_IMAGE_SUCCESS,payload:{params : params , response : response.data.results}})
     }catch(err){ 
      dispatch({type:FETCH_RANDOM_IMAGE_FAILED,err:err.response.data})
     }
    }
}