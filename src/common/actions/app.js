export const changePageTitle = (title) => {
  return {
    type: 'PAGE_TITLE_CHANGE',
    payload: {
      title: title
    },
  }
}

export const changeFooter = () => {
  return {
    type: 'TEXT_FOOTER_CHANGE'
  }
}