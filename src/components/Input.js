import React from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions/chatActions'

class Input extends React.Component {

  constructor() {
    super()
    this.state = {
      text: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.submitChat = this.submitChat.bind(this)
  }

  submitChat(e) {
    e.preventDefault()
    let date = new Date()
    this.props.add(this.state.text, date)
    this.setState({
      text: ''
    })
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={ this.submitChat }>
        <div className="enter-message">
          <input type="text" placeholder="Enter your message.." onChange={ this.handleChange } value={ this.state.text }/>
          <button className="send">Send</button>
        </div>
      </form>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    add: (chat, id) => dispatch(addMessage(chat, id))
  }
}

export default connect(null, mapDispatchToProps)(Input)