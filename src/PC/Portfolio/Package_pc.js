import { useState } from 'react';
import './Package_pc.css';



function Package(){


    

    const [visible, setVisible] = useState(false);
    const [index, setIndex] = useState('')

    const imageUrl = [
        {
            index : 0,
            url : window.location.origin +"/img/package/image03_thum.png",
            subimg : [process.env.PUBLIC_URL +"/img/package/image01_01.jpg",
                    process.env.PUBLIC_URL +"/img/package/image01_02.jpg",
                    process.env.PUBLIC_URL +"/img/package/image01_03.jpg",
        ]},
        {
            id:"package01",
            index : 1,
            url : process.env.PUBLIC_URL +"/img/package/image04_thum.png",
            subimg : [process.env.PUBLIC_URL +"/img/package/image02_01.jpg",
                    process.env.PUBLIC_URL +"/img/package/image02_02.jpg",
                    process.env.PUBLIC_URL +"/img/package/image02_03.jpg",
        ]
        },
            
        {
            id:"package02",
            index : 2,
            url : process.env.PUBLIC_URL +"/img/package/image03_thum.png",
            subimg : [process.env.PUBLIC_URL +"/img/package/image03_01.jpg",
            process.env.PUBLIC_URL +"/img/package/image03_02.jpg",
            process.env.PUBLIC_URL +"/img/package/image03_03.jpg",
        ]},
        {
            id:"package03",
            index : 3,
            url : process.env.PUBLIC_URL +"/img/package/image04_thum.png",
            subimg : [process.env.PUBLIC_URL +"/img/package/image04_01.jpg",
                    process.env.PUBLIC_URL +"/img/package/image04_02.jpg",
                    process.env.PUBLIC_URL +"/img/package/image04_03.jpg",
        ]
        },
            
        {
            id:"package04",
            index : 4,
            url : process.env.PUBLIC_URL +"/img/package/image05_thum.png",
            subimg : [process.env.PUBLIC_URL +"/img/package/image05_01.jpg",
            process.env.PUBLIC_URL +"/img/package/image05_02.jpg",
            process.env.PUBLIC_URL +"/img/package/image05_03.jpg",
        ]},
        {
            id:"package05",
            index : 5,
            url : process.env.PUBLIC_URL +"/img/package/image06_thum.png",
            subimg : [process.env.PUBLIC_URL +"/img/package/image06_01.jpg",
            process.env.PUBLIC_URL +"/img/package/image06_02.jpg",
            process.env.PUBLIC_URL +"/img/package/image06_03.jpg",
        ]},
        {
            id:"package06",
            index : 6,
            url : process.env.PUBLIC_URL +"/img/package/image07_thum.png",
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
            <section id="Sec0_package" className="section-page package">
                <div className="sect-inner">
                    <h2 className="sect-title">Package Design</h2>
                    {
                        imageUrl.map((item,index)=>{
                            return(
                                <div className="sect-content" id={item.id} key={index}>
                                    <div className="work-text">
                                        <h4>RDC 1945</h4>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis impedit nam consectetur, commodi nisi laborum dolorem vel cumque quidem laudantium dicta non rerum voluptatum? Facilis eum consequatur ipsam modi voluptatum?</p>
                                    </div>
                                    <div className="pack-item">
                                        <img src={item.url} alt=""/>
                                    </div>
                                </div>
                            )
                        })
                    }
                    
                    
                    
                
                
                
                
                </div>
                
                    
                
                
            </section>
        </div>
    )
}


export default Package;