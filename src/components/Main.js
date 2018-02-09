import React from 'react'

import Header from './Header'
import MessageLeft from './MessageLeft'
import MessageRight from './MessageRight'
import Input from './Input'

class Main extends React.Component {

  render() {
    return (
      <div className="container">
        <Header />
        <div className="chat-box">
          <MessageLeft />
          <MessageRight />
          <Input />
        </div>
      </div>
    )
  }

}

export default Main