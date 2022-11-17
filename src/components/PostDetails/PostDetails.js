import "./PostDetails.css";
const PostDetails = (props) => {
  return (
    <div>
      {props.activePost != null && (
        <div className="post">
          <div className="col s12 m5">
            <div className="card-panel  ">
              <div>
                <h3>{props.activePost.title}</h3>
              </div>
              <div>
                <h5>{props.activePost.author}</h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
