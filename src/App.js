
import './App.css';
import {BrowserView, MobileView} from 'react-device-detect'
import PC from './PC/PC_index'
import Mobile from './Mobile/Mobile_index'


function App() {

  
  

  
  return (
    <div className="App">
      {/* <BrowserView>
        <PC/>
      </BrowserView>
      <MobileView>
        <Mobile></Mobile>
      </MobileView> */}
      <Mobile></Mobile>
      
    </div>
  );
}

export default App;
