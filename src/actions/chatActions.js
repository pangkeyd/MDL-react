export const addMessage = (chat, id) => ({
  type: 'ADD_MESSAGE',
  payload: {
    chat: chat,
    id: id
  }
})