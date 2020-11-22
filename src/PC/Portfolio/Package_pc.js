import './Portfolio.css';


function Package(){

    const imageUrl = [
        {url : process.env.PUBLIC_URL +"/img/package/image01.jpg"},
        {url : process.env.PUBLIC_URL +"/img/package/image02.jpg"},
        {url : process.env.PUBLIC_URL +"/img/package/image03.jpg"},
        {url : process.env.PUBLIC_URL +"/img/package/image04.jpg"},
        {url : process.env.PUBLIC_URL +"/img/package/image05.jpg"},
        {url : process.env.PUBLIC_URL +"/img/package/image06.jpg"},
        {url : process.env.PUBLIC_URL +"/img/package/image07.jpg"},
    ]

    return(
        <div id="main">
            <section id="Sec0" className="section-page package">
                <div className="sect-inner">
                    <h2 className="sect-title">Package Design</h2>
                    <div className="sect-content">
                        {imageUrl.map((item, i)=>{
                            return(
                                <div className="card" key={i}>
                                    <img src={item.url} alt=""/>
                                    <div className="hoverbg">자세히보기</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Package;