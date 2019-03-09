import {
  LOG_IN
} from '../const'

export const login = (payload) => {
  return {
    type: LOG_IN,
    payload
  }
}
