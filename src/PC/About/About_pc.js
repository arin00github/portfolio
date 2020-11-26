import './About_pc.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function About (){
    useEffect(()=>{
        const tabBtn = document.getElementsByClassName('tabbtn')

       for(let i =0; i < tabBtn.length ; i++){
           tabBtn[i].addEventListener('click',()=>{
                let child = tabBtn[i].children[0];
               let tabattr = child.getAttribute('href')
               let changattr = tabattr.replace('#','')
               let findTab = document.getElementById(changattr);
               if(findTab.classList.contains('close') || !findTab.classList.contains('open')){
                   findTab.classList.add('open')
                   findTab.classList.remove('close')
                   tabBtn[i].classList.add('open')
                   tabBtn[i].classList.remove('close')
               }else if(findTab.classList.contains('open')){
                    findTab.classList.remove('open')
                    findTab.classList.add('close')
                    tabBtn[i].classList.remove('open')
                    tabBtn[i].classList.add('close')
               }
           })
       }
        
    },[])


    const careerData = [
        { period : '2012.03 ~ 2018.02',
          activity : '홍익대학교 산업디자인학과 공간디자인 전공'
        },
        { period : '2018.05 ~ 2020.06',
          activity : '팩플러스 패키지 디자인부서 근무'
        },
        { period : '2020.06 ~ 2020.12',
          activity : '국비지원 프론트앤드 전문가 양성 입문'
        },
    ]
    const chartData = [
        {code:'HTML', percent : 90,
        desc:["웹표준의 대한 이해","svg, iframe등의 신기능 활용." ,"DOM구조의 효율적인 코딩."]},
        {code:'CSS', percent : 96,
        desc:["폰트,색상,형태 등 자유자재 표현","CSS최신기능 이해" ,"적극적인 animation효과 사용"]},
        {code:'Javascript', percent : 80,
        desc:["객체,함수 개념의 이해","JQuery 사용 가능" ,"스크린 상의 돔을 조작하는 데 능숙"]},
        {code:'React', percent : 80,
        desc:["class,function 타입 모두 가능","react연관 라이브러리 소스를 사용" ,"redux를 이용한 데이터바인딩 능력"]}
    ]



    return(
        <div id="main">
            <section id="Sec1_about" className="pc">
                <div className="sect-inner">
                    <h2 className="sect-title">About Me</h2>
                    <p className="text01">안녕하세요. 새로운 프론트앤드 맴버가 되고 싶은 <span>이효정</span> 입니다.</p>
                    <div className="sect-content">
                        <div className="cont-left">
                            
                            <div className="desc">
                                산업디자인과를 전공했으나 디자인단계를 넘어 실제로 서비스를 구현하고 싶어 프론트앤드를 시작하게 되었습니다. 디자이너와 개발자 일을 동시에 할 수 있습니다
                            </div>
                            <div className="desc">
                                점차 발전해 나가는 웹&앱 분야처럼 점점 성장하고 싶은 제 자신과 잘 맞다고 생각하여 프론트앤드에 입분하게 되었습니다. 
                            </div>

                        </div>
                        <div className="cont-right">
                            <div className="myImage"></div>
                        </div>
                    </div>
                        
                </div>    
            </section>
            <section id="Sec2_about" className="pc">
            <div className="sect-inner">
                <div className="tab-title">
                    <h2>Education & Career</h2>
                    <button className="tabbtn" >
                        <a href="#tab01">
                            <img src={process.env.PUBLIC_URL +"/img/icon/free-icon-back.png"} alt=""/>
                        </a>
                    </button>
                </div>
                <div className="tab-container" id="tab01" >
                    <div className="sect-content">
                    <h2 className="sect-text">Education<br/>&Career</h2>
                        <div className="my-list">
                            <ul>
                                {
                                    careerData.map((item, i)=>{
                                        return(
                                        <li key={i}><span>{item.period}</span><span>{item.activity}</span></li>
                                        )
                                    })
                                }
                            </ul>
                       
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section id="Sec3_about" className="pc">
                <div className="sect-inner">
                    <div className="tab-title">
                    <h2>My skill</h2>
                    <button className="tabbtn" >
                        <a href="#tab02">
                            <img src={process.env.PUBLIC_URL +"/img/icon/free-icon-back.png"} alt=""/>
                        </a>
                    </button>
                </div>
                <div className="tab-container" id="tab02" >
                    <div className="sect-content">
                        <div className="skill-desc">
                            <h3>Coding Skill</h3>
                            <p>웹퍼블리셔역할의 인터페이스 디자인부터 프레임워크를 이용한 데이터바인딩 및 관리를 할 수 있습니다</p>
                        </div>
                        <div className="card-wrap">
                            {
                                chartData.map((skill, idx)=>{
                                    return(
                                        <div className="card" key={idx}>
                                            <div className="box">
                                                <div className="percent">
                                                    <svg>
                                                        <circle cx="70" cy="70" r="70"></circle>
                                                    </svg>
                                                    <div className="data">
                                                        <h2 className="number">{skill.percent}<span>%</span></h2>
                                                        <h3 className="text">{skill.code}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-list">
                                                <ul>
                                                    <li>{skill.desc[0]}</li>
                                                    <li>{skill.desc[1]}</li>
                                                    <li>{skill.desc[2]}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                            
                    </div>
                    <div className="sect-content">
                        <div className="skill-desc">
                            <h3>Coding Skill</h3>
                            <p>시각디자인분야을 툴을 전반적으로 사용할 수 있습니다. 로고,패키지, 웹디자인 등의 시각분야의 디자인 작업이 가능합니다.</p>
                        </div>
                        <div className="stickbar-wrap">
                            <ul className="stickBar">
                                <li><h4>Photoshop</h4><span className="bar"><span className="bar01 per"></span></span></li>
                                <li><h4>Illustrator</h4><span className="bar"><span className="bar01 per"></span></span></li>
                                <li><h4>Figma</h4><span className="bar"><span className="bar01 per"></span></span></li>
                            </ul>
                            <ul className="stickBar">
                                <li><h4>After Effect</h4><span className="bar"><span className="bar01 per"></span></span></li>
                                <li><h4>SketchUp</h4><span className="bar"><span className="bar01 per"></span></span></li>
                                <li><h4>Indesign</h4><span className="bar"><span className="bar01 per"></span></span></li>
                            </ul>
                        </div>
                        <div className="skill-link">
                            <button><Link to="/package">package 포트폴리오 보기</Link></button>
                            <button><Link to="/logo">logo 포트폴리오 보기</Link></button>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </section>
            <section id="Sec4_about" className="pc">
                <div className="sect-inner">
                    <div className="tab-title">
                        <h2>I'm the person</h2>
                        <button className="tabbtn" >
                            <a href="#tab03">
                                <img src={process.env.PUBLIC_URL +"/img/icon/free-icon-back.png"} alt=""/>
                            </a>
                        </button>
                    </div>
                    <div className="tab-container" id="tab03" >
                        <div className="sect-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusamus, rerum qui sunt quo repellendus sed ad consequuntur in cumque nesciunt officia, molestias aspernatur sapiente neque veniam exercitationem maxime? Libero!
                        </div>   
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;