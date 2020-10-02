import { 
  FETCH_CONTACT_DETAIL_REQUEST,
  FETCH_CONTACT_DETAIL_SUCCESS,
  FETCH_CONTACT_DETAIL_FAILURE
 } from './contactDetailTypes';

const initialState = {
  loading: false,
  contactDetail: [],
  error: ''
}

const contactDetailReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_CONTACT_DETAIL_REQUEST : return {
      ...state,
      loading: true
    }
    case FETCH_CONTACT_DETAIL_SUCCESS : return {
      loading: false,
      contactDetail: action.payload,
      error: ''
    }
    case FETCH_CONTACT_DETAIL_FAILURE : return {
      loading: false,
      contactDetail: [],
      error: action.payload
    }
    default: return state
  }
}

export default contactDetailReducer