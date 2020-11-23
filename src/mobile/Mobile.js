import { Route,  Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './Mobile.css'
import Header from './Header/Header';
//import Main from './Main/Main';
//import About from './About/About';
//import Web from './Portfolio/Web';
//import Package from './Portfolio/Package';
//import CssEffect from './Portfolio/Css';
//import Contact from './Contact/Contact';

let Main = lazy(()=>{return import('./Main/Main')});
let About = lazy(()=>{return import('./About/About')});
let Web = lazy(()=>{return import('./Portfolio/Web')});
let Package = lazy(()=>{return import('./Portfolio/Package')});
let CssEffect = lazy(()=>{return import('./Portfolio/Css')});
let Contact = lazy(()=>{return import('./Contact/Contact')});
//let About = lazy(()=> import('./About/About'));  중괄호 생략하면 return 생략 가능



function MobileIndex (){

    console.log(window.innerWidth)

    return(
        
        <div id="wrap" className="mobile">
            <Header/>
            
                <Suspense fallback={<div>로딩중이에요</div>}>
                    <Switch>
                        <Route exact path="/" component={Main}></Route>
                        <Route path="/About" component={About}></Route>
                        <Route path="/web" component={Web}></Route>
                        <Route path="/package" component={Package}></Route>
                        <Route path="/css" component={CssEffect}></Route>
                        <Route path="/Contact" component={Contact}></Route>
                        
                    </Switch>
                </Suspense>
            
            
        </div>
    )
}

export default MobileIndex;