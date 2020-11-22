import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

function Header(){

    useEffect(()=>{

        const menuList = document.getElementsByClassName('list');
        for(let i =0; i < menuList.length ; i++){
            menuList[i].addEventListener('mouseover',()=>{
                menuList[i].classList.add('active')
            })

            menuList[i].addEventListener('mouseleave',()=>{
                menuList[i].classList.remove('active')
            })
        }
        
    },[])



    return(
        <header id="header">
            <div className="header-wrap">
                <div className="header-inner">
                    <h1 className="logo"><Link to="/">Portfolio</Link></h1>
                    <nav><ul className="gnb">
                        <li className="list"><Link to="/About">About</Link>
                        </li>
                        <li className="list"><Link to="/Portfolio/web">Web</Link></li>
                        <li className="list"><Link to="/Portfolio/package">Package</Link></li>
                        <li className="list"><Link to="/Portfolio/logo">Logo</Link></li>
                        <li className="list"><Link to="/Contact">Contact</Link>
                        </li>
                    </ul></nav>
                    <button className="btn-header">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </button>
                </div>  
            </div>
        </header>
    )
}

export default Header;