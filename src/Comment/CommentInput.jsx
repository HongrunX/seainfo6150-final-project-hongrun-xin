import React, { Component } from 'react'
import styles from './index.module.css'
class CommentInput extends Component {
  constructor (){
    super()
    this.state = {
      username: '',
      content: ''
    }
  }
  handleUsernameChange (event){
    this.setState({
      username: event.target.value
    })
  }
  handleContentChange (event){
    this.setState({
      content: event.target.value
    })
  }
  handleSubmit (){
    if (this.props.onSubmit){
      const {username, content} = this.state
      this.props.onSubmit({username, content})
    }
    this.setState({content: ''})
  }
  render () {
    return (
      <div className={styles.commentInput}>
        <div className={styles.commentField}>
          <span className={styles.commentFieldName}>Username：</span>
          <div className={styles.commentFieldInput}>
            <input value={this.state.username}
            onChange={this.handleUsernameChange.bind(this)}/>
          </div>
        </div>
        <div className={styles.commentField}>
          <span className={styles.commentFieldName}>Comments：</span>
          <div className={styles.commentFieldInput}>
            <textarea value={this.state.content}
                      onChange={this.handleContentChange.bind(this)}/>
          </div>
        </div>
        <div className={styles.commentFieldButton}>
          <button onClick={this.handleSubmit.bind(this)}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput