import { Link } from 'react-router-dom';
import './Portfolio.css'

function Portfolio(){
    
    return(
        <div className="main">
            <section id="Sec0" className="section-page">
                    <div className="sect-inner">
                        <h2 className="sect-title">Portfolio</h2>
                        <div className="sect-content">
                            <div className="cate-menu">
                                <div className="cate-list">
                                    <h2><Link to="/m/Portfolio/web">Web & Mobile</Link></h2>
                                </div>
                                <div className="cate-list">
                                    <h2><Link to="/m/Portfolio/package">Package</Link></h2>
                                </div>
                                <div className="cate-list">
                                    <h2><Link to="/m/Portfolio/css">Css</Link></h2>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
        </div>
    )
}

export default Portfolio;