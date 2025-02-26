
import './App.css';
import Accordian from './components/accordian';
import StarRating from './components/star-rating';
import RandomColor from './components/random-color';

function App() {
  return (
    <div className="App">
      {/* Accordian Component */}
      <Accordian/>

      {/* Random-color component */}
      <RandomColor/>
      <StarRating noOfStars={10}/>
      <StarRating/>
    </div>
  );
}

export default App;
