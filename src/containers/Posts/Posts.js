import Post from "../../components/Post/Post";

const Posts = (props) => {
  const posts = props.posts.map((post) => {
    return (
      <div key={post.id}>
        <Post
          title={post.title}
          content={post.content}
          author={post.author}
          activePost={() => props.activePost(post)}
        />
      </div>
    );
  });
  return posts;
};

export default Posts;
