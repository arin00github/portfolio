
import { useEffect } from 'react';
//import Vertical from 'react-slick';
import './Main_m.css';
import HomeSlider from './homeSlide'

function Main (){

    
    
    

    
    
    

    useEffect(()=>{
       
        
    },[])
    
    

    return(
        <>
        
        <div id="main" className="home">
            
                <section id="Sec0_main" className="mobile">
                    <div className="sect-inner">
                        <HomeSlider></HomeSlider>
                        <div className="name-intro">
                            <p>Lee hyojeong</p>
                            <p>portfolio</p>
                        </div>
                        <div className="line"></div>
                    </div>
                </section>
                <section id="Sec1_main" className="mobile">
                    <div className="sect-inner">
                        <div className="sect-title">
                            <h2>About Me</h2>
                            <span className="line"></span>
                        </div>
                        <div className="sect-content">
                            <div className="cont-left">
                                <div className="text01">
                                    <p>안녕하세요. 새로운 프론트앤드 맴버가 되고 싶은 <span>이효정</span> 입니다.</p>
                                </div>
                                <div className="desc">
                                    <p>산업디자인과를 전공했으나 디자인단계를 넘어 실제로 서비스를 구현하고 싶어 프론트앤드를 시작하게 되었습니다. 디자이너와 개발자 일을 동시에 할 수 있습니다</p>
                                </div>
                            </div>
                        </div>
                            
                    </div>    
                </section>
                <section id="Sec2_main" className="mobile">
                    <div className="sect-head"></div>
                    <div className="sect-inner">
                        <div className="sect-title">
                            <h2>Portfolio</h2>
                            <span className="line"></span>
                        </div>
                        <div className="sect-content">
                            <div className="work-text">
                                <h4>Portfolio</h4>
                                <div className="desc">
                                The website has passed every test site complies with web standards. Information related to this site
                                </div>
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
                    </div>
                </section>
                <section id="Sec3_main" className="mobile">
                    <div className="sect-head"></div>
                    <div className="sect-inner">
                        <div className="sect-title">
                            <h2>Contact</h2>
                            <span className="line"></span>
                        </div>
                        <div className="sect-content">
                            <div className="work-text">
                                <h4>Portfolio</h4>
                                <div className="desc">
                                The website has passed every test site complies with web standards. Information related to this site
                                </div>
                                <ul className="list">
                                    <li>4 unique portfolio layouts</li>
                                    <li>Testimonials slider</li>
                                    <li>Original about page layout</li>
                                    <li>Interactive Buttons</li>
                                </ul>
                            </div>
                            <div className="package-wrap">
                                <div className="package item01">
                                    <img src={process.env.PUBLIC_URL +"/img/main/package01.png"} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            
            
                
                
        </div>
        </>
    )
}

export default Main;