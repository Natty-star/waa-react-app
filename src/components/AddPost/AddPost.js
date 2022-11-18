import axios from "axios";
import { useRef } from "react";

const AddPost = () => {
  const newPostForm = useRef();

  const addPostHandler = () => {
    const formData = newPostForm.current;
    const data = {
      title: formData["title"].value,
      author: formData["author"].value,
      content: formData["content"].value,
    };

    axios
      .post("http://localhost:8080/api/v1/posts", data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="container">
      <form ref={newPostForm}>
        <div className="center">
          {/* <i className="material-icons md-48">new</i> */}
          <h6 className="center"> Add Post </h6>
        </div>

        <label>Title</label>
        <input type="text" label={"title"} name={"title"} />
        <label>Author</label>
        <input type="text" label={"author"} name={"author"} />
        <label>Content</label>
        <input type="text" label={"content"} name={"content"} />
      </form>

      <div className="center">
        <button
          className="btn waves-effect waves-light "
          onClick={addPostHandler}
          name="action"
        >
          Submit
          <i className="material-icons right">send</i>
        </button>
      </div>
    </div>
  );
};

export default AddPost;
