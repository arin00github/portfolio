import { Route, Switch } from 'react-router-dom';
import './Mobile.css'
import Header from './Header/Header';
import Main from './Main/Main';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Web from './Portfolio/Web';
import Package from './Portfolio/Package';
import CssEffect from './Portfolio/Css';
import Contact from './Contact/Contact';
function MobileIndex (){
    return(
        
        <div id="wrap" className="mobile">
            <Header/>
            <Switch>
                <Route exact path="/m" component={Main}></Route>
                <Route path="/m/About" component={About}></Route>
                <Route exact path="/m/Portfolio" component={Portfolio}></Route>
                <Route path="/m/Portfolio/web" component={Web}></Route>
                <Route path="/m/Portfolio/package" component={Package}></Route>
                <Route path="/m/Portfolio/css" component={CssEffect}></Route>
                <Route path="/m/Contact" component={Contact}></Route>
                
            </Switch>
        </div>
    )
}

export default MobileIndex;