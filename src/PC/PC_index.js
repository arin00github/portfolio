import { Route, Switch } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { lazy } from 'react';
import Header from './Header/Header_pc';
//import Main from './Main/Main_pc';
//import About from './About/About_pc';
//import Web from './Portfolio/Web_pc';
//import Package from './Portfolio/Package_pc';
//import CSSEffect from './Portfolio/Css_pc';
//import Contact from './Contact/Contact_pc';
import './PC_index.css';


let Main = lazy(()=>{return import('./Main/Main_pc')});
let About = lazy(()=>{return import('./About/About_pc')});
let Web = lazy(()=>{return import('./Portfolio/Web_pc')});
let Package = lazy(()=>{return import('./Portfolio/Package_pc')});
let Logo = lazy(()=>{return import('./Portfolio/Logo_pc')});
let CSSEffect = lazy(()=>{return import('./Portfolio/Css_pc')});
let Contact = lazy(()=>{return import('./Contact/Contact_pc')});



function PCIndex (){


    
    
    
    

    useEffect(()=>{
        function numberCount(target_frame, target_number){
            this.count = 0; this.diff = 0;
            this.target_elem = document.getElementById('progress-bar');
            this.container = document.getElementById('progress');
            this.target_count = parseInt(target_number);
            this.target_frame = document.getElementById(target_frame);
            this.timer = null;
            this.counter();
        };
        numberCount.prototype.counter = function(){
            
            this.diff = this.target_count - this.count;
            var self = this;
            
    
            if(this.diff > 0){
                self.count += Math.ceil(this.diff / 5);
                self.target_elem.style.width = `${self.count}%`
            }
            this.target_frame.innerHTML = this.count.toString();
    
            if(this.count < this.target_count){
                this.timer = setTimeout(function(){
                    self.counter();
                }, 60);
            }else{
                clearTimeout(this.timer);
                self.target_elem.classList.add('close');
                self.target_frame.classList.add('close')
                self.container.classList.add('close')
            }
        };
        function callCount(target, number) {
            return new numberCount(target, number);
        }
        callCount('progress-text','100')


        

        // document.addEventListener('scorll',function(){
        //     const doc = document.documentElement;;
        //     let scrollT = window.pageYOffset;
            
        //     console.log(header)
        //     if(scrollT > 300){
        //         header.classList.add('change')
        //         console.log('change')
        //     }else{
        //         header.classList.remove('change')
        //     }

        // })

        return callCount('progress-text','100')
    },[])
    
    

    return(
        <>
        <div className="pc" id="progress">
            <div id="loading">
                <div className="loading-text">
                    <span className="loading-text-words">L</span>
                    <span className="loading-text-words">O</span>
                    <span className="loading-text-words">A</span>
                    <span className="loading-text-words">D</span>
                    <span className="loading-text-words">I</span>
                    <span className="loading-text-words">N</span>
                    <span className="loading-text-words">G</span>
                </div>
            </div>		
            <span id="progress-bar"></span>
            <span id="progress-text">0%</span>
        </div>
        
        <div id="wrap" className="pc">
            <Header />
            <Suspense fallback={<div>로딩중이에요</div>}>
                <Switch>
                    <Route exact path="/" component={Main}></Route>
                    <Route path="/About" component={About}></Route>
                    <Route path="/web" component={Web}></Route>
                    <Route path="/logo" component={Logo}></Route>
                    <Route path="/package" component={Package}></Route>
                    <Route path="/css" component={CSSEffect}></Route>
                    <Route path="/Contact" component={Contact}></Route>
                </Switch>
            </Suspense>
            
        </div>
        </>
    )
}

export default PCIndex;