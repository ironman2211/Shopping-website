import actionTypes from "./shop.type";
const INITIAL_STATE = {
  collections: null,
  isFetching: true,
  errMessage: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COLLECTION_START:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.FETCH_COLLECTION_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false,
      };
    case actionTypes.FETCH_COLLECTION_FAILURE:
      return {
        ...state,
        errMessage: action.payload,
        isFetching: true,
      };

    default:
      return state;
  }
};
export default shopReducer;
