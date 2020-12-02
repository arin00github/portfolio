
import './App.css';
import {BrowserView, MobileView} from 'react-device-detect'
import PC from './PC/PC_index'
import Mobile from './Mobile/Mobile_index'
import { useEffect } from 'react';


function App() {

  


  useEffect(()=>{
    
  },[])
  
  

  
  return (
    <div className="App" id="App">
      <BrowserView>
        <PC/>
      </BrowserView>
      <MobileView>
        <Mobile></Mobile>
      </MobileView>
     
      
      
    </div>
  );
}

export default App;
