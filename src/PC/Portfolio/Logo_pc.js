import './Logo_pc.css';




function Logo(){
    return(
        <div id="main">
            <section id="Sec0_logo" className="pc">
                <div className="sect-inner">
                    <h2 className="sect-title">logo Design</h2>
                    <div className="sect-content" id="logo01">
                        <div className="work-text">
                            <h4>RDC 1945</h4>
                        </div>
                        <div className="logo-item">
                            <img src={process.env.PUBLIC_URL + "/img/main/package01.png"} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="sect-inner">
                    <h2 className="sect-title">logo Design</h2>
                    <div className="sect-content" id="logo01">
                        <div className="work-text">
                            <h4>RDC 1945</h4>
                        </div>
                        <div className="logo-item">
                            <img src={process.env.PUBLIC_URL + "/img/brand/logo02.jpg"} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="sect-inner">
                    <h2 className="sect-title">logo Design</h2>
                    <div className="sect-content" id="logo01">
                        <div className="work-text">
                            <h4>RDC 1945</h4>
                        </div>
                        <div className="logo-item">
                            <img src={process.env.PUBLIC_URL + "/img/main/package01.png"} alt=""/>
                        </div>
                    </div>
                </div>
                
                
                
            </section>
        </div>
    )
}

export default Logo;