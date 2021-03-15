/* eslint-disable no-useless-constructor */
import { Component} from 'react';
import './Posts.css';
import Post from '../Post';

import getAllPosts from '../../services/postsService';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount(){
        getAllPosts()
        .then(posts => {
            this.setState({posts});
        })
    }

    render() {
        return (
            <div className="Posts">
                {this.state.posts.map(post => {
                    return <Post key={post.id} post={post}/>;
                })}
            </div>
        );
    }
}

// const Posts = () => {
//     return (
//         <div className="Posts">
//             <Post>Lorem ipsum dolor sit amet, consectetur adip</Post>
//             <Post>Lorem ipsum dolor sit amet, consectetur adip</Post>
//             <Post>Lorem ipsum dolor sit amet, consectetur adip</Post>
//             <Post>Lorem ipsum dolor sit amet, consectetur adip</Post>
//         </div>
//     );
// };

export default Posts;