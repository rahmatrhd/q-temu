const INITIAL_STATE = {
  pageTitle: 'HIJUP',
  footer: 'by rahmathd',
  // memberList: []
}


const appReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'PAGE_TITLE_CHANGE':
      return {
        ...state,
        pageTitle: action.payload.title,
      }
    // case 'TEXT_FOOTER_CHANGE':
    //   return

    default:
      return state
  }

  // if (action.type === 'PAGE_TITLE_CHANGE')
  //   return {
  //     ...state,
  //     pageTitle: 'Nasi Padang'
  //   }
  // else if (action.type === 'GOJEK_MCD')
  //   return {
  //     ...state,
  //     pageTitle: 'Big Mac'
  //   }
  // else
  //   return state
}

export default appReducer