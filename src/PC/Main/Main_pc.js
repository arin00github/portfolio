
import { useEffect } from 'react';
//import Vertical from 'react-slick';
//import { Link } from 'react-router-dom';
import './Main_pc.css';
import HomeSlider from './homeSlide';
import SkillPart from '../About/Skill_pc';
import '../About/Skill_pc.css';
import Footer from '../Footer/Footer_pc';

function Main (){

    
    
    function scrollMove (){
        
        const doc = document.documentElement;
        const webArray = document.querySelectorAll(".main-page")
        let scrollT = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        
        for(let i = 0; i < webArray.length ; i++){
            let location = webArray[i].offsetTop

            if(scrollT > location - 200){
                webArray[i].classList.add('active')
            }else{
                webArray[i].classList.remove('active')
            }
        }

        // const sideBar = document.getElementById('sidebar');

        // if(scrollT > 600){
        //     sideBar.classList.add('active')
        // }else{
        //     sideBar.classList.remove('active')
        // }
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
                        {/* <div className="line"></div> */}
                        <HomeSlider></HomeSlider>
                        {/* <div className="name-intro">
                            <p>Lee hyojeong</p>
                            <p>portfolio</p>
                        </div> */}
                       
                        {/* <div className="anime">
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
                         </div> */}
                    </div>
                </section>
                <section id="Sec1_main" className="section-page main-page">
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
                <section id="Sec2_main" className="section-page main-page">
                    <div className="sect-inner">
                        <div className="sect-title">
                            <h2>Professional</h2>
                            <span className="line"></span>
                        </div>
                        <div className="sect-content">
                            <SkillPart></SkillPart>
                           
                            
                        </div>
                    </div>
                </section>
                <section id="Sec3_main" className="main-page">
                    <div className="sect-inner">
                        <div className="sect-title">
                            <h2>Portfolio</h2>
                            <span className="line"></span>
                        </div>
                        <div className="sect-content">
                            <div className="port-wrap">
                                <div className="port">
                                    <div className="circle"></div>
                                    <h5>Web 포트폴리오</h5>
                                    <button>보러가기</button>
                                </div>
                                <div className="port">
                                    <div className="circle"></div>
                                    <h5>Web 포트폴리오</h5>
                                    <button>보러가기</button>
                                </div>
                                <div className="port">
                                    <div className="circle"></div>
                                    <h5>Web 포트폴리오</h5>
                                    <button>보러가기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section id="Sec4_main" className="main-page">
                    <div className="sect-inner">
                        <div className="sect-title">
                            <h2>Contact</h2>
                            <span className="line"></span>
                        </div>
                        <div className="sect-content">
                            <p className="contact-mail">leeleejin325@gmail.com</p>
                            <p>메일을 보내주시면 3일안에 답장을 드리겠습니다</p>
                        </div>
                    </div>
                   
                </section> */}
               <Footer/>
                {/* <div id="sidebar">
                    <div className="sidebar-inner">
                        <div>section</div><div className="sect-name">Intro</div>
                    </div>
                </div>
             */}
            
                
                
        </div>
        </>
    )
}




export default Main;