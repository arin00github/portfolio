import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Header_m.css';

function Header(){
        

        

        
        

    useEffect(()=>{
        
        const openBtn = document.getElementById('openbtn')
        const closeBtn = document.getElementById('closebtn')
        const modal = document.getElementById('modal-w')
        const $list = document.querySelectorAll('.list-m');

        


        openBtn.addEventListener('click',function(){
            modal.style.display = "block"
        })

        closeBtn.addEventListener('click',function(){
            modal.style.display = "none"
        })

        for(let i = 0; i < $list ; i ++){
            $list[i].addEventListener('click',()=>{
                modal.style.display = "none"
                console.log('close')
            })
        }

        

        
        
    },[])



    return(
        <>
        <header id="header" className="mobile">
            <div className="header-wrap">
                <div className="header-inner">
                    {/* <h1 className="logo"><Link to="/">Portfolio</Link></h1> */}
                    <button className="btn-header" id="openbtn">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </button>
                </div>  
            </div>
        </header>
        <div id="modal-w">
            <div className="modal-inner">
                <ul className="menu">
                    <li ><Link to="/" className="list-m">Home</Link></li>
                    <li ><Link to="/About" className="list-m">About</Link></li>
                    <li ><Link to="/web" className="list-m">Web</Link></li>
                    <li ><Link to="/package" className="list-m">Package</Link></li>
                    <li ><Link to="/css" className="list-m">CSS</Link></li>
                </ul>
            </div>
            <button className="btn-header" id="closebtn">
                <span className="line"></span>
                <span className="line"></span>
            </button>
        </div>
        </>
    )
}

export default Header;