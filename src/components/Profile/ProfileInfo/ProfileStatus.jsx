import React, { Component } from 'react';

class ProfileStatus extends Component {
  state = {
    editMode: false,
    status: this.props.value
  }

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  render() {
    return (
      <div>
        {!this.state.editMode
          ?
          <div>
            <span onDoubleClick={this.activateEditMode}>{this.props.status || '---------'}</span>
          </div>
          :
          <div>
            <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
          </div>
        }
      </div>
    );
  }
}

export default ProfileStatus;