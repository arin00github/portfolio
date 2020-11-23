import './Main.css'
import Mainslider from 'react-slick';

function Main(){

    const settings ={
        dots:false,
        infinite:true,
        slidesToShow : 1,
        slidesToScroll:1, 
        arrows:false,
        autoplay:true,
        autoplaySpeed:4000,
        fade:true

    }


    return(
        <div di="main">
            <section id="Sec0" className="mobile main">
                    <div className="sect-inner">
                        <Mainslider {...settings} className="main-slider">
                            <div className="main-item">     
                                <div className="main-text">
                                    <span className="type txt01"><span>I'm Creator</span></span>
                                </div>
                            </div>
                            <div className="main-item">  
                                <div className="main-text">
                                    <span className="type txt02"><span>I'm Designer</span></span>
                                </div>
                            </div>
                            <div className="main-item">
                                <div className="main-text">
                                    <span className="type txt03"><span>I'm Developer</span> </span>
                                </div>
                            </div>
                            <div className="main-item">
                                <div className="main-text"> 
                                    <span className="type txt04"><span>I'm Generation</span></span>
                                </div>
                            </div>
                        </Mainslider>
                    </div>
            </section>
        </div>
    )
}

export default Main;