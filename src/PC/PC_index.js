import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header_pc';
import Main from './Main/Main_pc';
import About from './About/About_pc';
import Portfolio from './Portfolio/Portfolio_pc';
import Web from './Portfolio/Web_pc';
import Package from './Portfolio/Package_pc';
import Logo from './Portfolio/Logo_pc';
import Contact from './Contact/Contact_pc';
import './PC_index.css';


function MobileIndex (){
    return(
        
        <div id="wrap" className="pc">
            <Header/>
            <Switch>
                <Route exact path="/" component={Main}></Route>
                <Route path="/About" component={About}></Route>
                <Route exact path="/Portfolio" component={Portfolio}></Route>
                <Route path="/Portfolio/web" component={Web}></Route>
                <Route path="/Portfolio/package" component={Package}></Route>
                <Route path="/Portfolio/logo" component={Logo}></Route>
                <Route path="/Contact" component={Contact}></Route>
                
            </Switch>
        </div>
    )
}

export default MobileIndex;