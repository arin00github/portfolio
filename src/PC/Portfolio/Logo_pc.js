import './Logo_pc.css';
import { useEffect } from 'react';
import LogoData from './Data/logoData'




function Logo(){

    function scrollMove_logo_pc (){
        const doc = document.documentElement;
        const logoArray = document.querySelectorAll('#Sec0_logo .sect-content')
        let scrollT = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        

        for(let i =0 ; i< logoArray.length ; i++){
             let location = logoArray[i].offsetTop;
             //console.log(location)

             if(scrollT > location - 450){
                logoArray[i].classList.add('active')
             }else{
                logoArray[i].classList.remove('active')
             }
        }
        
    }


    useEffect(()=>{
        document.addEventListener('scroll',scrollMove_logo_pc)
        return ()=> document.removeEventListener('scroll',scrollMove_logo_pc)
    },[])


    return(
        <div id="main">
            <section id="Sec0_logo" className="pc">
            <div className="sect-inner">
                    <h2 className="sect-title">logo Design</h2>
                    <div className="mouse-move">
                        <div className="mouse"></div>
                    </div>
                {
                    LogoData.map((item,index)=>{
                        return(
                        
                            <div className="sect-content" id={item.id} key={index}>
                                <div className="work-text">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                                <div className="logo-item">
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

export default Logo;