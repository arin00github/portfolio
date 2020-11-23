import {BrowserView, MobileView} from 'react-device-detect'
import Mobile from './mobile/Mobile';
import PC from './PC/PC_index'
import './App.css';

function App() {

  
  

  
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
