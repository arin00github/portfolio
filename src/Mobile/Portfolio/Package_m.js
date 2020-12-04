import { useState } from 'react';
import './package_m.css';
import PackData from './Data/PackageData';
import Footer from '../Footer/Footer_m';

function Package(){


    

    const [visible, setVisible] = useState(false);
    const [index, setIndex] = useState('')

    

    
    const handleClick = (i)=>{
        setVisible(true)
        let number = PackData[i].index;
        setIndex(number)
    }


    return(
        <div id="main">
            <section id="Sec0_package" className="package">
                <div className="sect-inner">
                    <h2 className="sect-title">Package Design</h2>
                    <div className="sect-content">
                        {PackData.map((item, i)=>{
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
                {
                    visible
                    ? <div id="modal-pack-m">
                            <div className="modal-inner">
                                <div className="modal-container">
                                    <div className="modal-area">
                                        {
                                            PackData[index].subimg.map(item =>{
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
            <Footer></Footer>
        </div>
    )
}


export default Package;