import './Post.css';

const Post = ({post}) => {
    return (
        <div className="Post">
            <img src="/blue-origami-bird.png" alt="Blue origami bird"></img>
            <p className="Description">
                {post.description}
            </p>
            <div>
                <span>
                    <small>Author: </small>
                    {post.author}
                </span>
            </div>
        </div>
    );
};

export default Post;