import './App.scss';
import Layout from './Components/Layout';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <div className="App">
      <div>
        <Layout content={Portfolio} />
      </div>
    </div>
  );
}

export default App;
