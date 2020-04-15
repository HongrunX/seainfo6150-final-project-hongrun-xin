import React, { Component } from 'react'
import styles from './index.module.css'
class Comment extends Component {
  render () {
    return (
      <div className={styles.comment}>
        <div className={styles.commentUser}>
          <span>{this.props.comment.username} </span>:
        </div>
        <p>{this.props.comment.content}</p>
      </div>
    )
  }
}
export default Comment