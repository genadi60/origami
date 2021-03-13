import './Footer.css';
import ListItem from '../ListItem';
const Footer = () => {
    return (
        <footer class="Footer">
            <ul>
                <ListItem> Going to 1</ListItem>
                <ListItem> Going to 2</ListItem>
                <ListItem> Going to 3</ListItem>
                <ListItem> Going to 4</ListItem>
                <ListItem> Going to 5</ListItem>
                <ListItem> Going to 6</ListItem>
                <ListItem> Going to 7</ListItem>
                <ListItem> Going to 8</ListItem>
                <ListItem> Going to 9</ListItem>
                <ListItem> Going to 10</ListItem>
                <ListItem> Going to 11</ListItem>
                <li className="ListItem"><a href="/"><img src="/blue-origami-bird-flipped.png" alt="origami bird"></img></a></li>
            </ul>
            <p>Software University &copy; 2021</p>
        </footer>
    );
};

export default Footer;