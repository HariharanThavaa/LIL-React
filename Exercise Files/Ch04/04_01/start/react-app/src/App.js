import logo from './logo.svg';
import './App.css';

const [firstCity, second, third] = ["Tokyo", "Tahoe City", "Bend"]
console.log(firstCity)
console.log(second)
console.log(third)

function App({library}) {
  return (
    <div className="App">
      <h1>Hello {library}</h1>
    </div>
  );
}

export default App;
