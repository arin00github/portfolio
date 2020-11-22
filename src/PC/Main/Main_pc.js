
//import { useEffect } from 'react';
import { useEffect, useRef } from 'react';
import Vertical from 'react-slick';
import './Main_pc.css';
import HomeSlider from './homeSlide'

function Main (){
    const slider = useRef();

    

    const settings={
        dots:false,
        arrows:false,
        infinite:false,
        slidesToShow : 1,
        slidesToScroll:1,
        vertical:true,
        verticalSwiping:true,
        swipeToSlide :true,
        className : 'main-slider',
        afterChange : function(current){
            const gridLine = document.querySelector('.grid');
            //const portBox = document.querySelector('.port-box');
            if(current === 2){
                gridLine.classList.add('active')
            }else{
                gridLine.classList.remove('active')
            }
        },


    }

    // let slickListDiv = document.getElementsByClassName('slick-list')[0]
    // slickListDiv.addEventListener('wheel', event => {
    //   event.preventDefault()
    //   event.deltaY > 0 ? this.innerSlider.slickNext() : this.innerSlider.slickPrev()
    // })

    useEffect(()=>{

        const section0 = document.getElementById('Sec0')
        section0.style.width = window.innerWidth;
        let refSlider = slider.current.innerSlider;
        //console.log(refSlider)
        let slickListDiv = document.getElementsByClassName('slick-list');
        slickListDiv[0].addEventListener('mousewheel', event => {
          event.preventDefault()
          event.deltaY > 0 ? refSlider.slickNext() : refSlider.slickPrev()
        })
    },[])
    
    const imageData = [
        {url : process.env.PUBLIC_URL +"/img/package/image01.jpg"},
        {url : process.env.PUBLIC_URL +"/img/package/image02.jpg"},
        {url : process.env.PUBLIC_URL +"/img/package/image03.jpg"},
    ]



    return(
        <div id="main" className="home">
            <Vertical {...settings} ref={slider}>
                <section id="Sec0" className="section-page">
                    <div className="sect-inner">
                        <HomeSlider></HomeSlider>
                    </div>
                </section>
                <section id="Sec1" className="section-page">
                    <div className="sect-inner">
                        <h2 className="sect-title">About Me</h2>
                        <div className="myphoto small"></div>
                        <p className="text01">안녕하세요. 새로운 프론트앤드 맴버가 되고 싶은 <span>이효정</span> 입니다.</p>
                        <div className="sect-content">
                            <div className="cont-left">
                                <div className="diagram">
                                    <div className="circle left">
                                        <span className="unit"></span>
                                        <span className="kr">디자이너</span>
                                        <span className="eng">Designer</span>
                                    </div>
                                    <div className="circle right">
                                        <span className="unit"></span>
                                        <span className="kr">프론트앤드</span>
                                        <span className="eng">FrontEnd</span>
                                    </div>
                                </div>
                                <div className="desc">
                                    산업디자인과를 전공했으나 디자인단계를 넘어 실제로 서비스를 구현하고 싶어 프론트앤드를 시작하게 되었습니다. 디자이너와 개발자 일을 동시에 할 수 있습니다
                                </div>
                            </div>
                            <div className="cont-right">
                                <div className="myImage"></div>
                            </div>
                        </div>
                            
                    </div>    
                </section>
                <section id="Sec2" className="section-page">
                    <div className="sect-inner">
                        
                        <div className="grid">
                            <span className="line01"></span>
                            <span className="line02"></span>
                            <span className="line03"></span>
                            <span className="line04"></span>
                            <span className="line05"></span>
                            <span className="line06"></span>
                        </div>
                        <div className="sec2-content">
                            <div className="port-box box01">
                                <div className="port-img">
                                    <img src={imageData[0].url} alt=""/>
                                </div>
                            </div>
                            <div className="port-box box02">
                                <div className="port-img">
                                    <img src={imageData[1].url} alt=""/>
                                </div>
                            </div>
                            <div className="port-box box03">
                                <div className="port-img">
                                    <img src={imageData[2].url} alt=""/>
                                </div>
                            </div>
                            <div className="sec2-text">
                                <h3>Portfolio, while Studying FrontEnd</h3>
                            </div>
                        </div>
                        <div className="sec2-content-mb">
                            <div className="port-box"></div>
                        </div>
                    </div>
                </section>
                <section id="Sec3" className="section-page">
                    <h1>section03</h1>
                </section>
            </Vertical>
            
                
                
        </div>
    )
}

export default Main;