import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Header_pc.css';

function Header(){

    useEffect(()=>{
        const doc = document.documentElement;
        console.log(doc)
        const header = document.getElementById('header')
        console.log(header)

        
        
        

        document.addEventListener('scorll',function(){
            let scrollT = window.pageYOffset
            console.log(scrollT)
            
            
            if(scrollT > 300){
                header.classList.add('change')
                console.log('change')
            }else{
                header.classList.remove('change')
            }

        })

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
        <>
        <header id="header" className="pc">
            <div className="header-wrap">
                <div className="header-inner">
                    <h1 className="logo"><Link to="/">Portfolio</Link></h1>
                    <nav><ul className="gnb">
                        <li className="list"><Link to="/About">About</Link>
                        </li>
                        <li className="list"><Link to="/web">Web</Link></li>
                        <li className="list"><Link to="/package">Package</Link></li>
                        <li className="list"><Link to="/logo">Logo</Link></li>
                        <li className="list"><Link to="/css">CSS</Link></li>
                        <li className="list"><Link to="/Contact">Contact</Link>
                        </li>
                    </ul></nav>
                </div>  
            </div>
        </header>
        </>
    )
}

export default Header;