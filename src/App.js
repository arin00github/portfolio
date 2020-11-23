
import './App.css';
//import { lazy } from 'react';
//import {BrowserView, MobileView} from 'react-device-detect'
//import Mobile from './mobile/Mobile';
//let Mobile = lazy(()=>{import('./mobile/Mobile')})
//let PC = lazy(()=>{import('./PC/PC_index')})
import PC from './PC/PC_index'


function App() {

  
  

  
  return (
    <div className="App">
      {/* <BrowserView>
        <PC/>
      </BrowserView> 
      <MobileView>
        <Mobile/>
      </MobileView> */}
      <PC/>
    </div>
  );
}

export default App;
