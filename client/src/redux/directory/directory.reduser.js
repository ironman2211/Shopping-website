import DATA from './directorydata.js';
const INITIAL_STATE = {
  sections: DATA,
};

const dirctoryReduser = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default dirctoryReduser;
