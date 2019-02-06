import axios from 'axios'

export const updateMembers = (members = []) => {
  return {
    type: 'MEMBERS_UPDATE',
    payload: {
      members: members,
    },
  }
}

// export const fetchMembers = () => (dispatch) => {}
export const fetchMembers = (id) => {
  return (dispatch) => {
    axios.get('https://swapi.co/api/people/')
      .then(response => {
        const members = response.data.results.map((item) => {
          return {
            avatar: item.skin_color,
            name: item.name,
            title: item.hair_color,
          }
        })

        dispatch(updateMembers(members))
      })
  }
}