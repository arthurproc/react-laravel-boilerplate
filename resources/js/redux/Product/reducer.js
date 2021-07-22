import actions from './actions';

const initialState = {
  products: [],
  loader: false,
  error: null
}

function Reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_PRODUCT:
      return {...state, loader: true}
    case actions.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload.data,
        loader: false,
      }
    case actions.GET_PRODUCT_FAILURE:
      return {
        ...state,
        error: 'Something went wrong',
        products: [],
        loader: false,
      }
    case actions.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload.data,
        loader: false,
      }
    default:
      return state
  }
}

export default Reducer;
