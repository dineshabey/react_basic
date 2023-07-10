import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>React components</h2>
      <MyPara status='completed' text={'HI '} />
      <MyPara status='completed' text={'Git (version control system) and GitHub'} />
      <MyPara status='completed' text={'Basic HTML, CSS'} />
      <MyPara status='completed' text={'Smell the ReactJS and JS'} />
      <MyPara status='completed' text={'JSX'} />
      <MyPara status='completed' text={'ES6 / ES7'} />
      <MyPara status='ongoing' text={'Babel'} />
      <MyPara status='ongoing' text={'WebpacK'} />
      <MyPara status='notstart' text={'React file system'} />
      <MyPara status='notstart' text={'package.Json'} />
    </div>
  );
}

export default App;

//create new components and prints

function MyPara(props) {
  const {status,text} = props; //destructuring 
  return <p style={{
    fontSize: '20px',
    color: status === 'completed' ? 'green' : status === 'ongoing' ? 'orange' : 'black'
  }}>{text}</p>;
}