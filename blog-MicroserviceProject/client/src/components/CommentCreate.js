import React, { useState } from "react";
import axios from "axios";

export default ({ postId }) => {
  const [content, setContent] = useState("");
  const onSubmitFunction = async (event) => {
    event.preventDefault();
    await axios.post(`http://localhost:4001/post/${postId}/comments`, {
      content,
    });
    // Resetting the input value
    setContent("");
  };
  return (
    <div>
      <form onSubmit={onSubmitFunction}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            value={content}
            onChange={(event) => setContent(event.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
