import './About_pc.css';
import { useEffect } from 'react';
import SkillPart from './Skill_pc';
import Footer from '../Footer/Footer_pc';
function About (){
    useEffect(()=>{
        const tabBtn = document.getElementsByClassName('tabbtn')

       for(let i =0; i < tabBtn.length ; i++){
           tabBtn[i].addEventListener('click',(e)=>{
                e.preventDefault();
                

                if(e.target.classList.contains('tabbtn')){
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
                }else if(e.target.classList.contains('btnimg')){
                    e.preventDefault();
                    
                    let upTarget = e.target.parentNode;
                    let attr = upTarget.getAttribute('href');
                    let setAttr = attr.replace('#','')
                    //console.log(setAttr);
                    let findTab = document.getElementById(setAttr);
                    let newTarget = upTarget.parentNode;
                    //console.log(newTarget);
                    if(newTarget.classList.contains('close') || !findTab.classList.contains('open')){
                        findTab.classList.add('open')
                        findTab.classList.remove('close')
                        newTarget.classList.add('open')
                        newTarget.classList.remove('close')
                    }else if(findTab.classList.contains('open')){
                        findTab.classList.remove('open')
                         findTab.classList.add('close')
                         newTarget.classList.remove('open')
                         newTarget.classList.add('close')
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
        {title : "title01",
        content : "과제나 직무가 어렵더라도 당황하거나 좌절하지 않습니다. 이번 프론트앤드 공부 시작도 난이도가 올라갈 수록 재미가 있었고, 드디어 제대로 배운다는 생각이 들었습니다. 시간이 나면 잘만든 홈페이지 소스코드를 보면서 어떻게 만들었는지 분석하거나 따라해보기 하는데 상당히 재밌습니다."},
        {title : "title02",
        content : "직무는 책임감 있는 태도로 성실하게 임할 수 있습니다. 대학교 동안에 미술학원 강사 알바를 한곳에서 6년동안 꾸준히 한 경력이 있습니다. 대입을 준비하는 고3학생들을 담당했기 때문에 꾸준히 나올 수 있도록 스케줄 관리를 잘 하였습니다 "},
        {title : "title03",
        content : "언제나 협업하기 좋은 사람이 되도록 노력합니다. 2년간 회사를 다니면서 타 부서에 관한 일도 이해를 하고 있는 것이 중요하다는 것을 느꼈습니다. 같은 부서의 동료가 일을 다하기 힘들어 하면 일의 분량을 덜어 도와주기도 합니다."},
        {title : "title04",
        content : "동료들이 인정하는 워커홀릭입니다. 언제나 협업하기 좋은 사람이 되도록 노력합니다. 2년간 회사를 다니면서 타 부서에 관한 일도 이해를 하고 있는 것이 중요하다는 것을 느꼈습니다. 같은 부서의 동료가 일을 다하기 힘들어 하면 일의 분량을 덜어 도와주기도 합니다."},
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
                            <div className="myImage">
                                <img src={ process.env.PUBLIC_URL +"/img/main/my_photo.jpg"} width="100%" alt=""/>
                            </div>
                        </div>
                    </div>
                        
                </div>    
            </section>
            <section id="Sec2_about" className="pc">
            <div className="sect-inner">
                <div className="tab-title">
                    <h2>Education & Career</h2>
                    <button className="tabbtn" >
                        <a href="#tab01" className="not">
                            <img src={process.env.PUBLIC_URL +"/img/icon/free-icon-back.png"} className="btnimg" alt=""/>
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
                        <a href="#tab02" className="not">
                            <img src={process.env.PUBLIC_URL +"/img/icon/free-icon-back.png"} className="btnimg" alt=""/>
                        </a>
                    </button>
                </div>
                <SkillPart></SkillPart>
                </div>
            </section>
            <section id="Sec4_about" className="pc">
                <div className="sect-inner">
                    <div className="tab-title">
                        <h2>I'm the person</h2>
                        <button className="tabbtn" >
                            <a href="#tab03" className="not">
                                <img src={process.env.PUBLIC_URL +"/img/icon/free-icon-back.png"} className="btnimg" alt=""/>
                            </a>
                        </button>
                    </div>
                    <div className="tab-container" id="tab03" >
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
            <Footer/>
        </div>
    )
}

export default About;