import './Post.css';

const Post = (props) => {
    return (
        <div className="Post">
            <img src="/blue-origami-bird.png" alt="Blue origami bird"></img>
            <p className="Description">
                {props.children}
            </p>
            <div>
                <span>
                    <small>Author:</small>
                    Some Anonymously
                </span>
            </div>
        </div>
    );
};

export default Post;