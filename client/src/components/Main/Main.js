import './Main.css';
import Aside from '../Aside';
import Posts from '../Posts';

const Main = () => {
    return (
        <div className="Container">
            <Aside/>
            <main className="Main">
                <h1>Sooooooome Heading</h1>
                <Posts/>
            </main>
        </div>
    );
};

export default Main;