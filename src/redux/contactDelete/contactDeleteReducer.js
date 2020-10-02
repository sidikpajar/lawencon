import { 
  FETCH_CONTACT_DELETE_REQUEST,
  FETCH_CONTACT_DELETE_SUCCESS,
  FETCH_CONTACT_DELETE_FAILURE
 } from './contactDeleteTypes';

const initialState = {
  loading: false,
  contactDelete: [],
  error: ''
}

const contactDeleteReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_CONTACT_DELETE_REQUEST : return {
      ...state,
      loading: true
    }
    case FETCH_CONTACT_DELETE_SUCCESS : return {
      loading: false,
      contactDelete: action.payload,
      error: ''
    }
    case FETCH_CONTACT_DELETE_FAILURE : return {
      loading: false,
      contactDelete: [],
      error: action.payload
    }
    default: return state
  }
}

export default contactDeleteReducer