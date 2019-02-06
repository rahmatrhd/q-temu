const INITIAL_STATE = {
  data: [],
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'MEMBERS_UPDATE':
      return {
        ...state,
        data: action.payload.members,
      }
    default:
      return state
  }
}