import { useEffect } from 'react';
import './Web_m.css';
import webData from './Data/webData'
import Footer from '../Footer/Footer_m';

function Web(){



    useEffect(()=>{
        
    },[])

    


    return(
        <div id="main">
            {/* <section id="Sec_web">

            </section> */}
            <section id="Sec0_web" className="section-page web">
                <div className="sect-inner">
                <h2 className="sect-title">Web Design</h2>

                {
                    webData.map((item, index)=>{
                        return(
                            <div className="sect-content project01" id="project" key={index}>
                                
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
                                    <h4>{item.title}</h4>
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
                                            <button><a href={item.giturl} alt="" target="_blank">github에서 코딩확인</a></button>
                                        </div>
                                </div>
                            </div>
                        )
                    })
                }

                </div>
                         
            </section>
            <Footer></Footer> 
        </div>
    ) 
}

export default Web;