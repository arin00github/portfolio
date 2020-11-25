import { useEffect } from 'react';
import './Web_m.css';


function Web(){



    useEffect(()=>{
        
    },[])

    const WebUrl = [
        {imgurl : process.env.PUBLIC_URL +"/img/web/portfolio_01.jpg",
         title : 'DRX esport site',
         desc : 'DragonX 라는 esport 구단을 소개하는 홈페이지 입니다. fullpage.js 플러그인을 사용하여 스크롤페이지 형식으로 만든 웹사이트입니다. 스크롤로 페이지가 바뀔 시 애니메이션이 자연스럽게 나올 수 있도록 만들었습니다.',
        weburl : "https://arin00github.github.io/portfolio_DRX/",
        point : ["스크롤페이지", "PC전용", ]
        },
        {imgurl : process.env.PUBLIC_URL +"/img/web/portfolio_03.jpg",
        title : 'FiLa online Store',
        desc: 'React를 이용해서 만든 스포트 브랜드 온라인 스토어 입니다. Redux를 이용하여 데이터 구조를 만들었고, Router를 이용해 주소를 나눴습니다.',
        weburl : "https://arin00github.github.io/portfolio_Fila/"
        },
        {imgurl : process.env.PUBLIC_URL +"/img/web/portfolio_02.jpg",
        title : 'Seoul Website',
        desc : '서울을 소개하는 웹사이트입니다. Css와 javascript를 애니메이션 움직임을 만드는데 적극적으로 사용하였습니다. 웹사이트 안의 일러스트들도  Illustrator 를 이용하여 직접 작업하였습니다.'},
    ]


    return(
        <div id="main">
            {/* <section id="Sec_web">

            </section> */}
            <section id="Sec0_web" className="section-page web">
                <div className="sect-inner">
                <h2 className="sect-title">Web Design</h2>
                <div className="sect-content project01" id="project01">
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
                <div className="sect-content project02" id="project02">
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
                <div className="sect-content project03" id="project03">
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
        </div>
    ) 
}

export default Web;