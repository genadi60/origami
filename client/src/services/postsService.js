import DB from '../config';

const getAllPosts = () => {
    return fetch(DB.posts)
        .then(res => res.json())
        .catch((err) => {
            console.log("Error: ", err);
        });
};

export default getAllPosts;