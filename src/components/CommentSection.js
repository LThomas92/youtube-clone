import React from "react";
import faker from "faker";

const CommentSection = () => {
  return (
    <div className="ui comments">
      <h3 className="ui dividing header">Leave a Comment</h3>
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={faker.image.avatar()}></img>
        </a>
        <div className="content">
          <a href="/" className="author">
            John Doe
          </a>
          <div class="metadata">
            <span className="date">Today at 5:42PM</span>
          </div>
          <div className="text">This is amazing!</div>

          <div className="actions">
            <a href="/" className="reply">
              Reply
            </a>
          </div>
        </div>
      </div>
      <form className="ui reply form">
        <div className="field">
          <textarea></textarea>
        </div>
        <div className="ui blue labeled submit icon button">
          <i className="icon edit"></i> Add Reply
        </div>
      </form>
    </div>
  );
};

export default CommentSection;
