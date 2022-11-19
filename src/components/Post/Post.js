import { useContext } from "react";
import { SelectedPost } from "../../context/contextTest";
import "./Post.css";
const Post = (props) => {
  const { selected, setSelected } = useContext(SelectedPost);

  console.log(props.id);

  return (
    <div
      className="post"
      key={props.id}
      onClick={() => setSelected(props.title)}
    >
      <div className="col s12 m5">
        <div className="card-panel  ">
          <div>
            <h3>{props.title}</h3>
          </div>
          <div>
            <h5>{props.author}</h5>
          </div>
        </div>
      </div>
      {/* <h1> {props.title}</h1>
      <div className="Field">{props.content}</div>
      <div className="Field">{props.author}</div> */}
    </div>
  );
};

export default Post;
