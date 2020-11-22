import { Link } from 'react-router-dom';
import { useEffect } from "react";
import './Header.css'

function Header (){

    useEffect(()=>{
        const menuBtn = document.getElementById('menubtn');
        const closeBtn = document.getElementById('closebtn');
        const modal = document.getElementById('modal-menu');
        const list = document.getElementsByClassName('list');
        
        for(let i =0;i< list.length ; i++){
            list[i].addEventListener('click',function(){
                modal.style.display = "none"
            })
        }
        
        menuBtn.addEventListener('click',function(){
            modal.style.display = "block"
        })
        closeBtn.addEventListener('click',function(){
            modal.style.display = "none"
        })
        closeBtn.addEventListener('mouseover',()=>{
            closeBtn.classList.add('open')
        })
        closeBtn.addEventListener('mouseleave',()=>{
            closeBtn.classList.remove('open')
        })
    })

    return(
        <>
        <header id="header">
                <div className="header-wrap">
                    <div className="header-inner">
                        <h1 className="logo"><Link to="/">Portfolio</Link></h1>
,                        <button id="menubtn" className="navButton">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                   
                </div>
            </header>
            <div id="modal-menu" >
                <div className="modal-inner">
                    <button id="closebtn" className="navButton">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul className="gnb">
                        <li className="list"><Link to="/m">Home</Link>
                        </li>
                        <li className="list"><Link to="/m/About">About</Link>
                        </li>
                        <li className="list"><Link to="/m/Portfolio">Porfolio</Link>
                            <ul className="sub-gnb">
                                <li className="list"><Link to="/m/Portfolio/web">Web & Mobile</Link></li>
                                <li className="list"><Link to="/m/Portfolio/package">Package</Link></li>
                                <li className="list"><Link to="/m/Portfolio/css">Css</Link></li>
                            </ul>
                        </li>
                        <li className="list"><Link></Link>
                        </li>
                    </ul>
                </div>
                
            </div>
        </>
    )
}

export default Header;