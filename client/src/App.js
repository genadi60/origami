import {Route, Link, NavLink, Redirect, Switch} from 'react-router-dom';

import './App.css';
import Aside from './components/Aside';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="Container">
        <Aside/>
        <main className="Main">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/home" component={Main} />
          <Route path="/about" component={About} />
          <Route render={()=><section><h1>404</h1><p>Page Not Found</p></section>} />
        </Switch>
        </main>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
