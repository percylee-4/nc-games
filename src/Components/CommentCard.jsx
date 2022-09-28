import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { FaTimes } from "react-icons/fa";

const CommentCard = ({ review_id }) => {
  const [comments, setComments] = useState([]);
  const id = review_id;
  const [err, setErr] = useState(null);

  useEffect(() => {
    axios
      .get(`https://games-nc.herokuapp.com/api/reviews/${id}/comments`)
      .then((res) => {
        setComments(res.data.comments);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let comment = e.target.firstElementChild.value;
    let commentObj = {
      body: comment,
      comment_id: Math.random(),
      author: "tickle122",
    };
    setComments([commentObj, ...comments]);
    document.getElementById("newcomment").value = "";

    axios
      .post(`https://games-nc.herokuapp.com/api/reviews/${id}/comments`, {
        username: "tickle122",
        body: comment,
      })
      .catch((err) => {
        setErr("oops, We could not post that comment. Please try again later.");
      });
  };

  const handleClick = (index, comment_id) => {
    setComments((currcomments) => {
      currcomments.splice(index, 1);
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

  if (err) {
    return <p> {err} </p>;
  }

  return (
    <div>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            name="newcomment"
            type="text"
            id="newcomment"
            placeholder="Add your comment"
            required
          />
          <button>Post Comment</button>
        </form>
      </div>
      <div>
        <ul>
          {comments.map((comment, index) => {
            if (comment.author === "tickle122") {
              return (
                <li key={comment.comment_id}>
                  {comment.body}
                  <FaTimes
                    onClick={() => handleClick(index, comment.comment_id)}
                  />
                </li>
              );
            } else {
              return <li key={comment.comment_id}> {comment.body} </li>;
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default CommentCard;
