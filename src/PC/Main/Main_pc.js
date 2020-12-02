
import { useEffect } from 'react';
//import Vertical from 'react-slick';
import { Link } from 'react-router-dom';
import './Main_pc.css';
import HomeSlider from './homeSlide'

function Main (){

    
    
    function scrollMove (){
        const doc = document.documentElement;
        const section01 = document.getElementById('Sec1_main');
        const section02 = document.getElementById('Sec2_main');
        const section03 = document.getElementById('Sec3_main');
        
        let scrollT = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

        if(scrollT > section01.offsetTop -300){
            section01.classList.add('active')
        }else{
            section01.classList.remove('active')
        }

        if(scrollT > section02.offsetTop - 200){
            section02.classList.add('active')
        }else{
            section02.classList.remove('active')
        }

        if(scrollT > section03.offsetTop - 300){
            section03.classList.add('active')
        }else{
            section03.classList.remove('active')
        }


        const sideBar = document.getElementById('sidebar');

        if(scrollT > sideBar.offsetTop){
            sideBar.classList.add('active')
        }else{
            sideBar.classList.remove('active')
        }
    }

    
    
    

    useEffect(()=>{
        document.addEventListener('scroll', scrollMove)
        
        return ()=> document.removeEventListener('scroll', scrollMove);
        
    },[])
    
    

    return(
        <>
        
        <div id="main" className="home">
            
                <section id="Sec0_main" className="section-page">
                    <div className="sect-inner">
                        <HomeSlider></HomeSlider>
                        <div className="name-intro">
                            <p>Lee hyojeong</p>
                            <p>portfolio</p>
                        </div>
                        <div className="line"></div>
                        <div className="anime">
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                            <div className="item"></div>
                         </div>
                    </div>
                </section>
                <section id="Sec1_main" className="section-page">
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
                            <div className="cont-right">
                                <div className="myImage">
                                    <img src={ process.env.PUBLIC_URL +"/img/main/my_photo.jpg"} alt=""/>
                                </div>
                            </div>
                        </div>
                            
                    </div>    
                </section>
                <section id="Sec2_main" className="section-page">
                    <div className="sect-inner">
                        <div className="sect-title">
                            <h2>Web FrontEnd</h2>
                            <span className="line"></span>
                        </div>
                        <div className="sect-content">

                            
                            {/* <div className="screen-wrap">
                                <div className="screen pc">
                                    <img src={process.env.PUBLIC_URL +"/img/main/web01_mockup_pc.png"} alt=""/>
                                </div>
                                <div className="screen tablet">
                                    <img src={process.env.PUBLIC_URL +"/img/main/web01_mockup_tablet.png"} alt=""/>
                                </div>
                                <div className="screen mobile">
                                    <img src={process.env.PUBLIC_URL +"/img/main/web01_mockup_mobile.png"} alt=""/>
                                </div>
                            </div>
                            <div className="work-text">
                                <div className="desc">
                                웹퍼블리셔역할의 인터페이스 디자인부터 프레임워크를 이용한 웹사이트 구축, 데이터바인딩 및 데이터관리를 할 수 있습니다.
                                </div>
                                <ul className="list">
                                    <li>미디어쿼리를 이용한 반응형사이트 작업</li>
                                    <li>javascript와 jquery를 이용한 기능부여</li>
                                    <li>React의 컴포넌트 제작 및 구축</li>
                                    <li>React Redux와 Router를 이용한 온전한 사이트 구축</li>
                                </ul>
                                <div className="link-wrap">
                                    <button><Link to="/web">포트폴리오 더 보기</Link></button>
                                </div>
                            </div> */}
                            
                            
                        </div>
                    </div>
                </section>
                <section id="Sec3_main" className="section-page">
                    <div className="sect-inner">
                        <div className="sect-title">
                            <h2>Visual Designer</h2>
                            <span className="line"></span>
                        </div>
                        <div className="sect-content">
                            <div className="package-wrap">
                                <div className="package item01">
                                    <img src={process.env.PUBLIC_URL +"/img/main/package01.png"} alt=""/>
                                </div>
                            </div>
                            <div className="work-text">
                                <div className="desc">
                                웹퍼블리셔역할의 인터페이스 디자인부터 프레임워크를 이용한 데이터바인딩 및 관리를 할 수 있습니다
                                </div>
                                <ul className="list">
                                    <li>4 unique portfolio layouts</li>
                                    <li>Testimonials slider</li>
                                    <li>Original about page layout</li>
                                    <li>Interactive Buttons</li>
                                </ul>
                                <div className="link-wrap">
                                    <button><Link to="/package">포트폴리오 더 보기</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div id="sidebar">
                    <div className="sidebar-inner">
                        <div>section</div><div className="sect-name">Intro</div>
                    </div>
                </div>
            
            
                
                
        </div>
        </>
    )
}

export default Main;