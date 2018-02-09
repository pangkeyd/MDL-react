import { createStore } from 'redux'

import reducers from '../reducers/chatReducer'

let store = createStore(reducers)

export default store