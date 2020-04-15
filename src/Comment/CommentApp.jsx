import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import styles from './index.module.css'
class CommentApp extends Component {
  constructor(){
    super()
    this.state = {
      comments: []
    }
  }
  handleSubmitComment (comment){
    if (!comment) return
    if (!comment.username) return alert('Please input your username!')
    if (!comment.content) return alert('Please input your comment!')
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
        <CommentList comments={this.state.comments}/>
      </div>
    )
  }
}

export default CommentApp