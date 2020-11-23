import { useState } from 'react';
import './Portfolio_pc.css';
import modalSlider from 'react-slick';



function Package(){


    const settings={
        dots:false,
        arrows:true,
        infinite:false,
        slidesToShow : 1,
        slidesToScroll:1,
        autoplay : true,
        speed : 1000,
        fade:true,
        className : 'modal-slider',
    }

    const [visible, setVisible] = useState(false);
    const [index, setIndex] = useState('')

    const imageUrl = [
        {
            index : 0,
            url : process.env.PUBLIC_URL +"/img/package/image01.jpg",
            subimg : [process.env.PUBLIC_URL +"/img/package/image01_01.jpg",
                    process.env.PUBLIC_URL +"/img/package/image01_02.jpg",
                    process.env.PUBLIC_URL +"/img/package/image01_03.jpg",
        ]},
        {
            index : 1,
            url : process.env.PUBLIC_URL +"/img/package/image02.jpg",
            subimg : [process.env.PUBLIC_URL +"/img/package/image02_01.jpg",
                    process.env.PUBLIC_URL +"/img/package/image02_02.jpg",
                    process.env.PUBLIC_URL +"/img/package/image02_03.jpg",
        ]
        },
            
        {
            index : 2,
            url : process.env.PUBLIC_URL +"/img/package/image03.jpg",
            subimg : [process.env.PUBLIC_URL +"/img/package/image03_01.jpg",
            process.env.PUBLIC_URL +"/img/package/image03_02.jpg",
            process.env.PUBLIC_URL +"/img/package/image03_03.jpg",
        ]},
        {
            index : 3,
            url : process.env.PUBLIC_URL +"/img/package/image04.jpg",
            subimg : [process.env.PUBLIC_URL +"/img/package/image04_01.jpg",
                    process.env.PUBLIC_URL +"/img/package/image04_02.jpg",
                    process.env.PUBLIC_URL +"/img/package/image04_03.jpg",
        ]
        },
            
        {
            index : 4,
            url : process.env.PUBLIC_URL +"/img/package/image05.jpg",
            subimg : [process.env.PUBLIC_URL +"/img/package/image05_01.jpg",
            process.env.PUBLIC_URL +"/img/package/image05_02.jpg",
            process.env.PUBLIC_URL +"/img/package/image05_03.jpg",
        ]},
        {
            index : 5,
            url : process.env.PUBLIC_URL +"/img/package/image06.jpg",
            subimg : [process.env.PUBLIC_URL +"/img/package/image06_01.jpg",
            process.env.PUBLIC_URL +"/img/package/image06_02.jpg",
            process.env.PUBLIC_URL +"/img/package/image06_03.jpg",
        ]},
        {
            index : 6,
            url : process.env.PUBLIC_URL +"/img/package/image07.jpg",
            subimg : [process.env.PUBLIC_URL +"/img/package/image07_01.jpg",
                    process.env.PUBLIC_URL +"/img/package/image07_02.jpg",
                    process.env.PUBLIC_URL +"/img/package/image07_03.jpg",
        ]
        },
    ]

    
    const handleClick = (i)=>{
        setVisible(true)
        let number = imageUrl[i].index;
        setIndex(number)
    }


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
                                    <div className="hoverbg" onClick={()=>{
                                        handleClick(i)
                                    }}>자세히보기</div>
                                    
                                </div>
                            )
                        })}
                        
                    </div>
                    
                </div>
                {visible 
                ? <div id="modal">
                    <div className="img-area">
                    <div className="img-wrap">
                        <div className="img-box">
                            <img src={imageUrl[index].subimg[0]} alt=""/>
                        </div>
                        <div className="img-box">
                            <img src={imageUrl[index].subimg[1]} alt=""/>
                        </div>
                        <div className="img-box">
                            <img src={imageUrl[index].subimg[2]} alt=""/>
                        </div>
                    </div>
                    </div>
                    
                    
                
                <button id="close-modal-btn" onClick={()=>{setVisible(false)}}>
                    <span></span>
                    <span></span>
                </button>
                </div> 
                : null}
            </section>
        </div>
    )
}


export default Package;