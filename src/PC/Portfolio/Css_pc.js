import './Css_m.css';
import Css01 from './Css_box/Css_01'
import Css02 from './Css_box/Css_02'
import Css03 from './Css_box/Css_03'



function Logo(){
    return(
        <div id="main">
            <section id="Sec0_css" className="pc">
                <div className="sect-inner">
                    <div className="sect-title">
                        <h2>Css effect</h2>
                        <p>마우스를 올리면 애니메이션이 실행됩니다</p>
                    </div>
                    
                    <div className="sect-content">
                    <div className="card">
                        <div className="card-desc">
                            <h4>falling Star</h4>
                        </div>
                        <div className="card-source">
                            <Css02/>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-desc">
                            <h4>Clip Circle</h4>
                        </div>
                        <div className="card-source">
                            <Css01/>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-desc">
                            <h4>Tilting Circle</h4>
                        </div>
                        <div className="card-source">
                            <Css03/>
                        </div>
                    </div>
                </div>
                </div>
                
                
            </section>
        </div>
    )
}

export default Logo;