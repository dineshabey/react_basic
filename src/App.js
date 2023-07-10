import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>React components</h2>
      <MyPara text = {'HI '}/>
      <MyPara text = {'Git (version control system) and GitHub'}/>
      <MyPara text = {'Basic HTML, CSS'}/>
      <MyPara text = {'Smell the ReactJS and JS'}/>
      <MyPara text = {'JSX'}/>
      <MyPara text = {'ES6 / ES7'}/>
      <MyPara text = {'Babel'}/>
      <MyPara text = {'WebpacK'}/>
      <MyPara text = {'React file system'}/>
      <MyPara text = {'package.Json'}/>
    </div>
  );
}

export default App;

//create new components

function MyPara(props) {
  console.log(props); 
  return <p style={{ fontSize: '20px' }}>{props.text}</p>;
}