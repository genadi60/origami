import './Header.css';
import ListItem from '../ListItem';

const Header = () => {
    return (
        <nav className="Navigation">
            <ul>
                <li className="ListItem"><a href="/"><img src="/white-origami-bird.png" alt="origami bird"></img></a></li>
                <ListItem>Going to 1 </ListItem>
                <ListItem>Going to 2 </ListItem>
                <ListItem>Going to 3 </ListItem>
                <ListItem>Going to 4 </ListItem>
                <ListItem>Going to 5 </ListItem>
                <ListItem>Going to 6 </ListItem>
                <ListItem>Going to 7 </ListItem>
                <ListItem>Going to 8 </ListItem>
                <ListItem>Going to 9 </ListItem>
                <ListItem>Going to 10 </ListItem>
                <ListItem>Going to 11 </ListItem>
            </ul>
        </nav>
    );
}

export default Header;