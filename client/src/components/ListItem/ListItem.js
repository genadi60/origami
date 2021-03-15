import {Link} from 'react-router-dom';

const ListItem = (props) => {
    return (
        <li className="ListItem"><Link to={props.path}>{props.children}</Link></li>
    );
};

export default ListItem;