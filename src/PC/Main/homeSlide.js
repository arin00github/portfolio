
import MainSlider from 'react-slick';



function homeSlide (){

    const settings = {
        dots:false,
        arrows:false,
        infinite:true,
        slidesToShow : 1,
        slidesToScroll:1,
        autoplay : true,
        autoplaySpeed : 5000,
        speed : 1000,
        fade:true,
        className : 'home-slider',
    }

    

    return(
        <MainSlider {...settings}>
            <div className="main-item">
                <div className="main-text-wrap">
                    <div className="main-text">
                        <span className="type txt01"><span>I'm Creator</span></span>
                    </div>
                    <div className="sub-text"><span>Creativity comes from everyday life</span></div>
                </div>
            </div>
            <div className="main-item">
                <div className="main-text-wrap">
                    <div className="main-text">
                        <span className="type txt02"><span>I'm Designer</span></span>
                    </div>
                    <div className="sub-text"><span>Visualize What I Think</span></div>
                </div>
                
            </div>
            <div className="main-item">
                <div className="main-text-wrap">
                    <div className="main-text">
                        <span className="type txt03"><span>I'm Developer</span> </span>
                    </div>
                    <div className="sub-text"><span>Make Dynamic functions by Coding</span></div>
                </div>
                
            </div>
            <div className="main-item">
                <div className="main-text-wrap">
                    <div className="main-text"> 
                        <span className="type txt04"><span>I'm Influencer</span></span>
                    </div>
                    <div className="sub-text"><span>Have a good influence on Society</span></div>
                </div>
                
            </div>
        </MainSlider>
    )
}

export default homeSlide;