import { SET_AUTHED_USERS } from '../actions/authedUsers'

export default function authedUsers (state=null, action){
  switch(action.type){
    case SET_AUTHED_USERS:
      return action.id
    default:
      return state
  }
}