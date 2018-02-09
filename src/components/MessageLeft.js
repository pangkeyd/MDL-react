import React from 'react'
import { connect } from 'react-redux'

class MessageLeft extends React.Component {

  render() {
    return (
      <div>
        <div className="message-box left-img">
          <div className="message">
            <span>Bobby Giangeruso</span>
            <p>{ this.props.chat.message }</p>
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    chat: state.chatLeft
  }
}

export default connect(mapStateToProps)(MessageLeft)