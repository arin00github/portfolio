import './About_m.css';
import { useEffect } from 'react';
import SkillPart from './Skill_m';
import Footer from '../Footer/Footer_m';
function About (){

    


    
    useEffect(()=>{ 
       
       const tabBtn = document.getElementsByClassName('tab-title')

       for(let i =0; i < tabBtn.length ; i++){
           tabBtn[i].addEventListener('click',(e)=>{

            if(e.target.classList.contains('tab-title')){
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
            }else if(e.target.classList.contains('not')){
                e.preventDefault();
                let tabattr = e.target.getAttribute('href')
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
               
            }else if(e.target.classList.contains('h2-title')){
                e.preventDefault();
                let $target = e.target.parentNode;
                let tabattr = $target.getAttribute('href')
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
    const personalData = [
        
        {title : "꾸준하고 책임감 있는 자세",
        content : "직무는 책임감 있는 태도로 성실하게 임할 수 있습니다. 역할을 부여 받으면 꾸준하고 성실하게 다닙니다.  대학교 동안에 미술학원 강사 알바를 한곳에서 6년동안 했던 경력이 이를 잘 보여준다고 생각합니다."},
        {title : "협업하기 좋은 사람",
        content : "언제나 협업하기 좋은 사람이 되도록 노력합니다. 시간을 가장 오랫동안 같이 보내는 팀원들과는 활발한 소통을 통해 새로운 아이디어를 내거나 문점을 개선해 나갑니다. 2년간 회사를 다니면서 타 부서에 관한 일도 이해를 하고 있는 것이 중요하다는 것을 느꼈습니다. 타 부서의 일을 이해하면서 제 업무의 역할과 방향성을 파악하고, 부서간의 원활한 소통을 돕습니다. "},
        {title : "어려움을 밑거름으로 성장",
        content : "과제나 직무가 어렵더라도 당황하거나 좌절하지 않습니다. 프론트앤드 공부 시작도 난이도가 올라갈 수록 재미가 있었고, 제대로 배운다는 생각이 들었습니다. 시간이 나면 잘만든 홈페이지 소스코드를 보면서 어떻게 만들었는지 분석하거나 따라해 봅니다."}
    ]





    return(
        <div id="main">
            <section id="Sec1_about" className="about">
                <div className="sect-inner">
                    <h2 className="sect-title">About Me</h2>
                    <p className="text01">안녕하세요. 새로운 프론트앤드 맴버가 되고 싶은 <span>이효정</span> 입니다.</p>
                    <div className="sect-content">
                        <div className="cont-left">
                            
                            <div className="desc">
                                산업디자인과를 전공했으나 디자인의 기획단계를 넘어, 적극적으로 구현하는 단계에  참여하고 싶어 프론트앤드를 시작하게 되었습니다.
                            </div>
                            <div className="desc">
                                점차 발전해 나가는 웹&앱 분야는, 조금씩 성장해 나가는 사람이 되고자 하는 평소의 제 가치관과 일치하는 부분이 있습니다.
                            </div>

                        </div>
                        <div className="cont-right">
                            <div className="myImage"></div>
                        </div>
                    </div>
                        
                </div>    
            </section>
            <section id="Sec2_about" className="about">
                <div className="sect-inner">
                    <div className="tab-title">
                        <a href="#tab01" className="not">
                        <h2 className="h2-title">Education & Career</h2>
                            <button className="tabbtn" >
                                <img src={process.env.PUBLIC_URL +"/img/icon/free-icon-back.png"} alt="" className="btnimg"/>
                            </button>
                        </a>
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
            <section id="Sec3_about" className="about">
                <div className="sect-inner">
                    <div className="tab-title">
                        <a href="#tab02" className="not">
                        <h2 className="h2-title">My Skill</h2>
                            <button className="tabbtn" >
                                
                                <img src={process.env.PUBLIC_URL +"/img/icon/free-icon-back.png"} alt="" className="btnimg"/>
                                
                            </button>
                        </a>
                    </div>
                    <SkillPart/>
                    </div>
            </section>
            <section id="Sec4_about" className="about">
                <div className="sect-inner">
                    <div className="tab-title">
                        <a href="#tab03" className="not">
                        <h2 className="h2-title">Personality</h2>
                            <button  className="tabbtn" >
                                <img src={process.env.PUBLIC_URL +"/img/icon/free-icon-back.png"} alt="" className="btnimg"/>
                            </button>
                        </a>
                    </div>
                    <div className="tab-container" id="tab03">
                        <div className="sect-content">
                            {
                                personalData.map(function(cont,idx){
                                    return(
                                <div className="personal" key={idx}>
                                    <h4>{cont.title}</h4>
                                    <p>{cont.content}</p>
                                </div>
                                    )
                                })
                            }
                            
                        </div>  
                    </div>
                    
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default About;