import {
  LOG_IN
} from '../const'

const INITIAL_STATE = {
  loginUser: "Yang Chaoyue"
}

export default function user (state = INITIAL_STATE, action) {
  const { type,payload } = action;
  switch (type) {
    case LOG_IN:
      state.loginUser = payload;
      return {...state}
    default:
      return state
  }
}
