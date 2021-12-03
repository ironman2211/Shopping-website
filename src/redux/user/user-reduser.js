import { userType } from './user-type';
const INITIAL_STATE = {
  currentuser: null,
};

const userReduser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userType.SET_CURRENT_USER:
      return {
        ...state,
        currentuser: action.payload,
      };
    default:
      return state;
  }
};
export default userReduser;
