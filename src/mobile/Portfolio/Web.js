import './Portfolio.css';


function Web (){

    const WebUrl = [
        {url : process.env.PUBLIC_URL +"/img/web/portfolio_01.jpg",
         title : 'DRX esport site',
         desc : 'DragonX 라는 esport 구단을 소개하는 홈페이지 입니다. fullpage.js 플러그인을 사용하여 스크롤페이지 형식으로 만든 웹사이트입니다. 스크롤로 페이지가 바뀔 시 애니메이션이 자연스럽게 나올 수 있도록 만들었습니다.  '},
        {url : process.env.PUBLIC_URL +"/img/web/portfolio_03.jpg",
        title : 'FiLa online Store',
        desc: 'React를 이용해서 만든 스포트 브랜드 온라인 스토어 입니다. Redux를 이용하여 데이터 구조를 만들었고, Router를 이용해 주소를 나눴습니다. '},
        {url : process.env.PUBLIC_URL +"/img/web/portfolio_02.jpg",
        title : 'Seoul Website',
        desc : '서울을 소개하는 웹사이트입니다. Css와 javascript를 애니메이션 움직임을 만드는데 적극적으로 사용하였습니다. 웹사이트 안의 일러스트들도  Illustrator 를 이용하여 직접 작업하였습니다.'},
    ]


    return(
        <div id="main">
            <section id="Sec0" className="section-page web">
                <div className="sect-inner">
                <h2 className="sect-title">Web Design</h2>
                <div className="sect-content">
                    {WebUrl.map((item, idx)=>{
                        return(
                            <div className="card" key={idx}>
                                <div className="project-img">
                                    <img src={item.url} alt=""/>
                                    <div className="hoverbg">방문하기</div>
                                </div>
                                <div className="project-desc">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                </div>
                        
            </section>
        </div>
    )
}

export default Web;