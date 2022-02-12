import actionTypes from './shop.type';
import {firestore,collectionSnapshotobjMap} from '../../firebase/firebase-util'
export const fetchCollectionStart = () => ({
  type: actionTypes.FETCH_COLLECTION_START,
  
});
export const fetchCollectionSuccess = collections => ({
  type: actionTypes.FETCH_COLLECTION_SUCCESS,
  payload:collections
});
export const fetchCollectionFailure = (errMessage) => ({
  type: actionTypes.FETCH_COLLECTION_FAILURE,
  payload:errMessage
});

export const fetchCollectionStartAsync=()=>{
  return dispatch=>{
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionStart())
    collectionRef.get().then(snapshot => {
      const collectionMap = collectionSnapshotobjMap(snapshot);
      dispatch(fetchCollectionSuccess(collectionMap))
  }).catch(err=>dispatch(fetchCollectionFailure(err)))
}
}

  
