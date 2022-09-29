import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { FaTimes } from "react-icons/fa";
import { fetchReviewComments, postReviewComment } from "../Components/Api";
import "../StyleSheets/CommentCard.css";

const CommentCard = ({ review_id }) => {
  const [comments, setComments] = useState([]);
  const id = review_id;
  const [err, setErr] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetchReviewComments(id).then((data) => {
      setComments(data.comments);
    });
  }, [comments.length, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let body = e.target.firstElementChild.value;
    let username = "tickle122";
    let commentObj = {
      body: "uploading comment",
      comment_id: Math.random(),
    };
    setComments([commentObj, ...comments]);
    setValue("");
    postReviewComment(id, username, body).catch((err) => {
      setErr("oops, We could not post that comment. Please try again later.");
    });
  };

  const handleClick = (index, comment_id) => {
    setComments((currcomments) => {
      currcomments.splice(
        index,
        1,
        { body: "deleting comment", comment_id: Math.random() },
        { body: "", comment_id: Math.random() }
      );
      return [...currcomments];
    });
    axios
      .delete(`https://games-nc.herokuapp.com/api/comments/${comment_id}`)
      .catch((err) => {
        setErr(
          "oops, We could not delete that comment right now. Please refresh the page."
        );
      });
  };

  const handleUserInput = (e) => {
    setValue(e.target.value);
  };

  if (err) {
    return <p> {err} </p>;
  }

  return (
    <div className="commentcard">
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            name="newcomment"
            type="text"
            id="newcomment"
            placeholder="Add your comment"
            required
            value={value}
            onChange={handleUserInput}
          />
          <button>Post Comment</button>
        </form>
      </div>
      <div>
        <ul className="commentlist">
          {comments.map((comment, index) => {
            if (comment.author === "tickle122") {
              return (
                <li key={comment.comment_id} className="comment">
                  {comment.body}
                  <FaTimes
                    onClick={() => handleClick(index, comment.comment_id)}
                  />
                </li>
              );
            } else {
              return (
                <li className="comment" key={comment.comment_id}>
                  {comment.body}
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default CommentCard;
