import { 
  FETCH_CONTACT_UPDATE_REQUEST,
  FETCH_CONTACT_UPDATE_SUCCESS,
  FETCH_CONTACT_UPDATE_FAILURE
 } from './contactUpdateTypes';

const initialState = {
  loading: false,
  contactUpdate: [],
  error: ''
}

const contactUpdateReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_CONTACT_UPDATE_REQUEST : return {
      ...state,
      loading: true
    }
    case FETCH_CONTACT_UPDATE_SUCCESS : return {
      loading: false,
      contactUpdate: action.payload,
      error: ''
    }
    case FETCH_CONTACT_UPDATE_FAILURE : return {
      loading: false,
      contactUpdate: [],
      error: action.payload
    }
    default: return state
  }
}

export default contactUpdateReducer