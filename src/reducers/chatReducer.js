let date = new Date()

let chatLeft = {
  id: date,
  message: 'Kiw, How are you doing?',
  user: 'bot'
}

let initialState = {
  chatLeft: chatLeft,
  chatRight: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        chatLeft: chatLeft,
        chatRight: state.chatRight.concat([{
          message: action.payload.chat,
          id: action.payload.id
        }])
      }
    default:
      return state
  }
}

export default reducer