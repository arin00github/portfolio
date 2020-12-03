import { useEffect } from 'react';
import './Web_pc.css';
import webData from './Data/webData';
import Footer from '../Footer/Footer_pc';

function Web(){



    function scrollMove_web (){
        const doc = document.documentElement;
        const webArray = document.querySelectorAll("#Sec0_web .sect-content")
        let scrollT = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        
        for(let i = 0; i < webArray.length ; i++){
            let location = webArray[i].offsetTop

            if(scrollT > location){
                webArray[i].classList.add('active')
            }else{
                webArray[i].classList.remove('active')
            }
        }

        
        
    }


    useEffect(()=>{
        document.addEventListener('scroll',scrollMove_web)
        return ()=> document.removeEventListener('scroll',scrollMove_web)
    },[])

   

    return(
        <div id="main">
            {/* <section id="Sec_web">

            </section> */}
            <section id="Sec0_web" className="section-page web">
                <div className="sect-inner">
                <h2 className="sect-title">Web Design</h2>
                <div className="mouse-move">
                        <div className="mouse"></div>
                    </div>
                    {
                        webData.map((item, index)=>{
                            return(
                                <div className="sect-content" id="project01" key={index}>
                                    <div className="screen-wrap">
                                        <div className="screen pc">
                                            <img src={item.screen[2]} alt=""/>
                                        </div>
                                        <div className="screen tablet">
                                            <img src={item.screen[1]} alt=""/>
                                        </div>
                                        <div className="screen mobile">
                                            <img src={item.screen[0]} alt=""/>
                                        </div>
                                    </div>
                                    <div className="work-text">
                                        <h4 number={index + 1}>{item.title}</h4>
                                        <p className="desc">
                                        {item.desc}
                                        </p>
                                        <ul className="list">
                                            {item.list.map(function(a,i){
                                                return(
                                                <li>{a}</li>
                                                )
                                            })}
                                        </ul>
                                        <div className="link-wrap">
                                            <button><a href={item.weburl} alt="" target="_blank">site 방문하기</a></button>
                                            <button><a href="">github에서 코딩확인</a></button>
                                        </div>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                
                
                </div>
                        
            </section>
            <Footer/>
        </div>
    ) 
}

export default Web;