import { Link } from 'react-router-dom';



function SkillPart (){


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
        <div className="tab-container" id="tab02" >
                    <div className="sect-content">
                        <div className="skill-desc">
                            <div className="skill-desc-inner">
                                <h3>Coding Skill</h3>
                                <p>웹퍼블리셔역할의 인터페이스 디자인부터 프레임워크를 이용한 데이터바인딩 및 관리를 할 수 있습니다</p>
                            </div>
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
                            <div className="skill-desc-inner">
                                <h3>Design Skill</h3>
                                <p>시각디자인분야을 툴을 전반적으로 사용할 수 있습니다. 로고,패키지, 웹디자인 등의 시각분야의 디자인 작업이 가능합니다.</p>
                            </div>
                            
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
    )
}


export default SkillPart;