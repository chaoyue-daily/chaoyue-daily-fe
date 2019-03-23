import {
  LOG_IN
} from '../const'

const INITIAL_STATE = {
  loginUser: "Yang Chaoyue",
  currentTab: 0,
}

export default function user (state = INITIAL_STATE, action) {
  const { type,payload } = action;
  switch (type) {
    case LOG_IN:
      state.currentTab = payload;
      return {...state}
    default:
      return state
  }
}
