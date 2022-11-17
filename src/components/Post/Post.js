import "./Post.css";
const Post = (props) => {
  return (
    <div className="post" key={props.id} onClick={props.activePost}>
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
