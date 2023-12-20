import Post from "../post/Post";
import "./index.css";

const PostList = ({ postListData, getFromChildId }) => {
  return (
    <div className="PostList">
      {postListData.map((post) => (
        <Post postData={post} getFromChildId={getFromChildId} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
