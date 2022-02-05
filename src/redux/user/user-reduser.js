import userType from "./user-type";
const INITIAL_STATE = {
  currentuser: null,
  errmessage: null,
};

const userReduser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userType.SIGNIN_SUCESS:
      return {
        ...state,
        currentuser: action.payload,
        errmessage: null,
      };
    case userType.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentuser: null,
        errmessage: null,
      };
    case userType.SIGNIN_FAILURE:
    case userType.SIGN_OUT_FAILURE:
    case userType.SIGN_UP_FAILURE:
      return {
        ...state,
        errmessage: action.payload,
      };
    default:
      return state;
  }
};
export default userReduser;
