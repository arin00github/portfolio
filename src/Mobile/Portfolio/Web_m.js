import { useEffect } from 'react';
import './Web_m.css';
import webData from './Data/webData'


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
                                <div className="work-text">
                                    <h4>{item.title}</h4>
                                    <p className="desc">
                                    {item.desc}
                                    </p>
                                    <ul className="list">
                                        <li>4 unique portfolio layouts</li>
                                        <li>Testimonials slider</li>
                                        <li>Original about page layout</li>
                                        <li>Interactive Buttons</li>
                                    </ul>
                                </div>
                                <div className="screen-wrap">
                                    <div className="screen pc">
                                        <img src={process.env.PUBLIC_URL +"/img/main/mock6_1.png"} alt=""/>
                                    </div>
                                    <div className="screen tablet">
                                        <img src={process.env.PUBLIC_URL +"/img/main/mock6_2.png"} alt=""/>
                                    </div>
                                    <div className="screen mobile">
                                        <img src={process.env.PUBLIC_URL +"/img/main/mock6_3.png"} alt=""/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

                </div>
                        
            </section>
        </div>
    ) 
}

export default Web;