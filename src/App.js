import {BrowserView, MobileView} from 'react-device-detect'
import Mobile from './mobile/Mobile';
import PC from './PC/PC_index'
import './App.css';

function App() {
  // const PTK = {
  //   isMobile: /LG|SAMSUNG|Samsung|iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i.test(navigator.userAgent),
  //   winW : window.innerWidth,
  //   winH : window.innerHeight
  // }

       
  // function verticalCheck(){ //세로가 가로보다 큰지 확인. boolean값으로 반환
  //   return window.innerHeight >= window.innerWidth
  // } 
  // function mobileCheck(){
  //   if(PTK.isMobile || verticalCheck()){
  //     //모바일 발견 or 세로스크린 중 하나라도 true면 모바일로 인식
  //     window.location.href = ""
  //     console.log('모바일기기 입니다.')
  //   }else{
  //     window.location.href = ""
  //     console.log('모바일기기가 아닙니다.')
  //     document.body.classList.add('js-pc');
  //   }
  // }
  
  

  // useEffect(()=>{
  //   if(document.readyState === 'complete'){
  //     mobileCheck()
  //   }else{
  //     return ()=> document.removeEventListener('load', mobileCheck);
  //   }
    
    
  //   },[mobileCheck])
  return (
    <div className="App">
      <BrowserView>
        <PC/>
      </BrowserView>
      <MobileView>
        <Mobile/>
      </MobileView>
      
      
    </div>
  );
}

export default App;
