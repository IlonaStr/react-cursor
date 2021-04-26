import React from "react";

const Post = (props) => {
  console.log(props);
  return (
    <div className="page">
      <div className="user">
        <div className="user-photo">
          <img src={props.author.photo} alt="user-photo" />
        </div>
        <div className="user-info">
          <div className="user-name">{props.author.name}</div>
          <div className="user-pic">
            <img src={`${process.env.PUBLIC_URL}/pics/approval.png`} />
          </div>
          <div className="user-nick">{props.author.nickname}</div>
          <div className="date">{props.date}</div>
          <div className="info-below">
            <img src={`${process.env.PUBLIC_URL}/pics/down_chevron.png`} />
          </div>
        </div>
      </div>
      <div className="main">
        <div className="main-content">{props.content}</div>
        <div className="main-image">
          <img src={props.image} />
        </div>
      </div>
      <div className="public">
        <div className="public-comment">
          <img src={`${process.env.PUBLIC_URL}/pics/bubble.png`} /> {props.comment}
        </div>
        <div className="public-retweet">
          <img src={`${process.env.PUBLIC_URL}/pics/retweet.png`} /> {props.retweet}
        </div>
        <div className="public-like">
          <img src={`${process.env.PUBLIC_URL}/pics/heart.png`} /> {props.like}
        </div>
        <div className="public-share">
          <img src={`${process.env.PUBLIC_URL}/pics/upload.png`} />
        </div>
      </div>
    </div>
  );
};

export default Post;
