import { all, call, put, takeLatest } from "redux-saga/effects";
import userType from "./user-type";
import {
  createUserProfileDocument,
  googleProvider,
  auth,
  getCurrentUser,
} from "../../firebase/firebase-util";
import {
  SigninSuccess,
  SigninFailure,
  signOutSucess,
  signOutFailure,
  signUpSucess,
  signUpFailure
} from "./user-action";
export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(SigninSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(SigninFailure(error));
  }
}

export function* signinWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);

    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(SigninFailure(err));
  }
}
export function* signinWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (err) {
    yield put(SigninFailure(err));
  }
}

export function* createUser() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (err) {
    yield put(SigninFailure(err));
  }
}
export function* userSignOut() {
  try {

    yield auth.signOut();
    yield put(signOutSucess());
  } catch (err) {
    yield put(signOutFailure(err));
  }
}
export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
 
    yield put(signUpSucess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}
export function* onGoogleSigninStart() {
  yield takeLatest(userType.GOOGLE_SIGNIN_START, signinWithGoogle);
}
export function* onEmailSignInStart() {
  yield takeLatest(userType.EMAIL_SIGNIN_START, signinWithEmail);
}
export function* onUserPersist() {
  yield takeLatest(userType.CHECK_USER_PERSIST, createUser);
}
export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onUserSignOut() {
  yield takeLatest(userType.SIGN_OUT_START, userSignOut);
}
export function* onSignUpStart() {
  yield takeLatest(userType.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(userType.SIGN_UP_SUCCESS, signInAfterSignUp);
}
export default function* userSaga() {
  yield all([
    call(onGoogleSigninStart),
    call(onEmailSignInStart),
    call(onUserPersist),
    call(onUserSignOut),
    // call(onSignUpStart),
    // call(onSignUpSuccess)
  ]);
}
