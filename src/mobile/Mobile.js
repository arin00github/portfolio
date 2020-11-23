import { Route, Switch } from 'react-router-dom';
import './Mobile.css'
import Header from './Header/Header';
import Main from './Main/Main';
import About from './About/About';
import Web from './Portfolio/Web';
import Package from './Portfolio/Package';
import CssEffect from './Portfolio/Css';
import Contact from './Contact/Contact';
function MobileIndex (){

    console.log(window.innerWidth)

    return(
        
        <div id="wrap" className="mobile">
            <Header/>
            <Switch>
                <Route exact path="/" component={Main}></Route>
                <Route path="/About" component={About}></Route>
                <Route path="/Portfolio/web" component={Web}></Route>
                <Route path="/Portfolio/package" component={Package}></Route>
                <Route path="/Portfolio/css" component={CssEffect}></Route>
                <Route path="/Contact" component={Contact}></Route>
                
            </Switch>
        </div>
    )
}

export default MobileIndex;