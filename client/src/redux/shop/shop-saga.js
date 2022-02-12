import { takeEvery, call, put } from "redux-saga/effects";
import actionTypes from "../shop/shop.type";
import {
  firestore,
  collectionSnapshotobjMap,
} from "../../firebase/firebase-util";
import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop.action";
export function* fetchCollectionStartAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();

    const collectionMap = yield call(collectionSnapshotobjMap, snapshot);
    yield put(fetchCollectionSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error));
  }
}
export function* fetchCollectionStart() {
  yield takeEvery(
    actionTypes.FETCH_COLLECTION_START,
    fetchCollectionStartAsync
  );
}
