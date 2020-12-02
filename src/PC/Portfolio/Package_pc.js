import { useEffect,useState } from 'react';
import './Package_pc.css';
import packInfo from './Data/PackageData'



function Package(){

    const [visible, setVisible] = useState(false);
    const [index, setIndex] = useState('')



    function scrollMove_package_pc (){
        const doc = document.documentElement;
        const packArray = document.querySelectorAll('#Sec0_package .sect-content')
        let scrollT = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        

        for(let i =0 ; i< packArray.length ; i++){
             let location = packArray[i].offsetTop;
             //console.log(location)

             if(scrollT > location){
                packArray[i].classList.add('active')
             }else{
                packArray[i].classList.remove('active')
             }
        }

        
    }

    const handleClick = (i)=>{
        setVisible(true)
        let number = packInfo[i].index;
        setIndex(number)
        

    }


    useEffect(()=>{
        document.addEventListener('scroll',scrollMove_package_pc)
        return ()=> document.removeEventListener('scroll',scrollMove_package_pc)
    },[])

    
    
    

    return(
        <div id="main">
            <section id="Sec0_package" className="section-page package">
                <div className="sect-inner">
                    <h2 className="sect-title">Package Design</h2>
                    <div className="mouse-move">
                        <div className="mouse"></div>
                    </div>

                    {
                        packInfo.map((item,index)=>{
                            return(
                                <div className="sect-content" id={item.id} key={index}>
                                    <div className="work-text">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                        <div className="btn-wrap">
                                            <button className="morebtn"
                                            onClick={()=>{
                                                handleClick(index)
                                            }}
                                            >Read more</button>
                                        </div>
                                    </div>
                                    <div className="pack-item">
                                        <img src={item.url} alt=""/>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
       
                </div>
                {
                    visible
                    ? <div id="modal-pack-pc">
                            <div className="modal-inner">
                                <div className="modal-container">
                                    <div className="modal-area">
                                        {
                                            packInfo[index].subimg.map(item =>{
                                                return(
                                                    <img src={item} width="100%" alt=""/>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                <button id="close-modal-btn" onClick={
                                    ()=>{setVisible(false)}
                                }>
                                        <span></span>
                                        <span></span>
                                </button>
                            </div>
                        </div>
                    : null
                }
        
            </section>
        </div>
    )
}



export default Package;