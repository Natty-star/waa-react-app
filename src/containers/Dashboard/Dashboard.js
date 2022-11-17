import { useState } from "react";
import PostDetails from "../../components/PostDetails/PostDetails";
import Posts from "../Posts/Posts";

import "materialize-css/dist/css/materialize.min.css";

const Dashboard = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "news", content: "my new post", author: "Natty" },
    { id: 2, title: "Sport", content: "sport news", author: "Mera" },
    { id: 3, title: "story", content: "music", author: "Star" },
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [activePostDetail, setActivePost] = useState("");

  const changeTitle = () => {
    const postsCopy = [...posts];
    postsCopy[0].title = newTitle;
    setPosts(postsCopy);
  };
  const onChangeTitle = (event) => {
    setNewTitle(event.target.value);
  };

  const activePostHadler = (post) => {
    setActivePost(post);
    console.log(post);
  };

  return (
    <div>
      <Posts posts={posts} activePost={activePostHadler} />
      <div>
        <input id="title" type="text" onChange={onChangeTitle}></input>
      </div>
      <div>
        <button onClick={changeTitle} type="button">
          Change Title
        </button>
      </div>
      <PostDetails activePost={activePostDetail} />
    </div>
  );
};

export default Dashboard;
