import React from 'react'
import { connect } from 'react-redux'

class MessageRight extends React.Component {

  render() {
    return (
      <div>
        { this.props.item.map(r => (
          <div className="message-box right-img" key={ r.id }>
            <div className="message">
              <span>Mike Moloney</span>
              <p>{ r.message }</p>
            </div>
          </div>
        )) }
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    item: state.chatRight
  }
}

export default connect(mapStateToProps)(MessageRight)