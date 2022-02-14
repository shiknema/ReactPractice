import CallingWithAxioswithAysncAwait from './component/AxiosWithAysncAwait';
import AxiosCall from './component/AxiosCall'

function App() {
  return (
    <div className="App">

      <h2> CURD operation Uing AXIOS </h2>
      <hr/>
      <AxiosCall />
      <hr />
      <h2>API call Using Aysnc Await with Axios </h2>
      <hr/>
      <CallingWithAxioswithAysncAwait />

    </div>
  );
}

export default App;
