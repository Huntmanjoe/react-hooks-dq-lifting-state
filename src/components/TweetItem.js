import React, { useState } from "react";

function TweetItem(props) {
  const defaultCount = props.tweet.favorite_count
  const [likes, setLikes] = useState(defaultCount)

  function handleLikes() {
    setLikes(likes => likes + 1)
  }


  return (
    <div className="event">
      <div className="label">
        <img alt="CoffeeDad" src={props.photo} />
      </div>
      <div className="content">
        <div className="summary">
          {props.handle}
          <div className="date">{props.tweet.created_at}</div>
        </div>
        <div className="extra text">{props.tweet.text}</div>
        <div className="meta">
          <button
            onClick={() => handleLikes()}
            className="ui tiny basic labeled icon like button"
          >
            <i className="like icon"></i> {likes} Likes
          </button>
        </div>
      </div>
    </div>
  );
}

export default TweetItem;
