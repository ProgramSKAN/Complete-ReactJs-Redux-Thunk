/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const CommentDetail = props => {
    // console.log(props);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a className="author">{props.author}</a>
        <div className="metadata">
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.content}</div>
        <div className="actions">
          <a className="reply">Reply</a>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;