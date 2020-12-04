
import { useEffect } from 'react';
//import Vertical from 'react-slick';
import './Main_m.css';
import HomeSlider from './homeSlide'
import Footer from '../Footer/Footer_m';
// import Skills from '../About/Skill_m';
//import '../About/Skill_m.css'
function Main (){

    
    

    useEffect(()=>{
       
        
    },[])
    
    

    return(
        <>
        
        <div id="main" className="home">
            
                <section id="Sec0_main" className="mobile">
                    <div className="sect-inner">
                        <HomeSlider></HomeSlider>
                    </div>
                </section>
                {/* <section id="Sec1_main" className="mobile">
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
                </section> */}

                <Footer></Footer>
            
            
                
                
        </div>
        </>
    )
}

export default Main;