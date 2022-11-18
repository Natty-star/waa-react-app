import { useEffect, useState } from "react";
import PostDetails from "../../components/PostDetails/PostDetails";
import Posts from "../Posts/Posts";
import axios from "axios";

import "materialize-css/dist/css/materialize.min.css";
import AddPost from "../../components/AddPost/AddPost";

const Dashboard = () => {
  const [newTitle, setNewTitle] = useState("");
  const [activePostDetail, setActivePost] = useState("");
  // const [selected, setSelected] = useState(false);

  const [posts, setPosts] = useState([
    { id: 1, title: "news", content: "my new post", author: "Natty" },
    { id: 2, title: "Sport", content: "sport news", author: "Mera" },
    { id: 3, title: "story", content: "music", author: "Star" },
  ]);

  const fetchPosts = () => {
    axios
      .get("http://localhost:8080/api/v1/posts")
      .then((resopnse) => {
        setPosts(resopnse.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const changeTitle = () => {
    const postsCopy = [...posts];
    postsCopy[0].title = newTitle;
    setPosts(postsCopy);
  };
  const onChangeTitle = (event) => {
    setNewTitle(event.target.value);
  };

  const activePostHadler = (post) => {
    setActivePost(post.id);
  };

  return (
    <>
      <div className="center">
        <h2>Posts</h2>
      </div>

      <Posts posts={posts} activePost={activePostHadler} />
      {/* <div>
        <input id="title" type="text" onChange={onChangeTitle}></input>
      </div>
      <div>
        <button onClick={changeTitle} type="button">
          Change Title
        </button>
      </div> */}
      <AddPost />
      <PostDetails activePost={activePostDetail} />
    </>
  );
};

export default Dashboard;
