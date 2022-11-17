import "./PostDetails.css";
import axios from "axios";
import { useEffect, useState } from "react";
const PostDetails = (props) => {
  const [post, setPost] = useState({});

  const deleteHandler = (id) => {
    console.log(id);
    axios
      .delete("http://localhost:8080/api/v1/posts/" + id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/posts/" + props.activePost)
      .then((response) => {
        setPost(response.data);
        console.log(post);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [props.activePost]);
  return (
    <div>
      {post != null && (
        <div className="post card">
          <div>
            <span className="card-title">Post Detail Information</span>
          </div>
          <div className="col s12 m5">
            <div className="card-panel  ">
              <div>
                <h3>{post.title}</h3>
              </div>
              <div>
                <h5>{post.author}</h5>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button
              onClick={() => deleteHandler(props.activePost)}
              className="
              btn-floating
              halfway-fab waves-effect
              waves-light red"
            >
              <i className="material-icons">delete</i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
