const ListItem = (props) => {
    return (
        <li className="ListItem"><a href="#">{props.children}</a></li>
    )
};

export default ListItem;