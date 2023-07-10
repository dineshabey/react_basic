import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>React components</h2>
      <MyPara text = {'HI '}/>

      <p>Git (version control system) and GitHub</p>
      <p>Basic HTML, CSS</p>
      <p>Smell the ReactJS and JS</p>
      <p>JSX</p>
      <p>ES6 / ES7</p>
      <p>Babel</p>
      <p>WebpacK</p>
      <p>React file system</p>
      <p>package.json</p>
    </div>
  );
}

export default App;

//create new components

function MyPara(props) {
  console.log(props);
  return <p style={{ fontSize: '20px' }}>Git is version controlle systems - MyPara </p>;
}