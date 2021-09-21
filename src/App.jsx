import './App.css';
import Gallery from './gallery/Gallery';
import Stars from './Stars';

const App = () => (
  <div className="App">
    <Stars className="App-stars" size={1} num={512} />
    <Stars className="App-stars" size={3} num={128} />
    <div className="App-content">
      <Gallery />
    </div>
  </div>
);

export default App;
