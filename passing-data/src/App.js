
import './App.css';
import Data2 from './propsConcept/Data2';
import Data3 from './propsConcept/Data3';
import Data4 from './propsConcept/Data4'
import Data5 from './propsConcept/Data5'


function App() {
  return (
    <div className="App">
    
      <h1>Props Passing Concept</h1>
      <hr />
      <Data2/>
      <hr />
      <div>
        <Data3 directMsg="Hello" />
      </div>
      <div>
      <Data4 msg=" Hey"/>
      </div>
      <div>
        <Data5 data4msg="Nice" />
      </div>

    </div>
  );
}

export default App;
