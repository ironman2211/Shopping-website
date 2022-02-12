import userType from "./user-type";



export const googleSigninStart = () => ({
  type: userType.GOOGLE_SIGNIN_START,
});
export const checkuserPersist=()=>({
  type:userType.CHECK_USER_PERSIST
})
export const emailSigninStart = (emailAndPassword) => ({
  type: userType.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
});
export const SigninSuccess = (user) => ({
  type: userType.SIGNIN_SUCESS,
  payload: user,
});
export const SigninFailure = (errmessage) => ({
  type: userType.SIGNIN_FAILURE,
  payload: errmessage,
});
export const signOutStart=()=>({
  type:userType.SIGN_OUT_START
})
export const signOutSucess=()=>({
  type:userType.SIGN_OUT_SUCCESS
})
export const signOutFailure=(err)=>({
  type:userType.SIGN_OUT_FAILURE,
  payload:err,
})



export const signUpStart=(userCredential)=>({
  type:userType.SIGNING_UP_START,
  payload:userCredential
})
export const signUpSucess=({user,additionalData})=>({
  type:userType.SIGNING_UP_SUCCESS,
  payload:{user,additionalData}
})
export const signUpFailure=(err)=>({
  type:userType.SIGNING_UP_FAILURE,
  payload:err,
})