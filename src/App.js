import logo from './logo.svg';
import './App.css';

const courceContent = [
  {
    status: 'completed',
    text: "Git (version control system) and GitHub",

  },
  {
    status: 'completed',
    text: "Introducion to PHP",

  },
  {
    status: 'completed',
    text: "HTML/CSS",

  },
  {
    status: 'completed',
    text: "Intoduction to Laravel",

  },
  {
    status: 'completed',
    text: "Laravel MVC Architecture",

  },
  {
    status: 'completed',
    text: "Introduction Controller",

  },
  {
    status: 'ongoing',
    text: "Blade engine",

  },
  {
    status: 'ongoing',
    text: "Model(Query builder and equelent query)",

  },
  {
    status: 'incomplete',
    text: "Start CRUD operations",

  },

];

function App() {
  return (
    <div className="App">
      {courceContent.map((val, key) => {
        return <MyPara key={key} status={val.status} text={val.text} />
      })}
      {/* <h2>React components</h2>
      <MyPara status='completed' text={'HI '} />
      <MyPara status='completed' text={'Git (version control system) and GitHub'} />
      <MyPara status='completed' text={'Basic HTML, CSS'} />
      <MyPara status='completed' text={'Smell the ReactJS and JS'} />
      <MyPara status='completed' text={'JSX'} />
      <MyPara status='completed' text={'ES6 / ES7'} />
      <MyPara status='ongoing' text={'Babel'} />
      <MyPara status='ongoing' text={'WebpacK'} />
      <MyPara status='notstart' text={'React file system'} />
      <MyPara status='notstart' text={'package.Json'} /> */}
    </div>
  );
}

export default App;

//create new components and prints

function MyPara({status,text}) {
  // console.log(text)
  // const { status, text } = props; //destructuring 
  return <p style={{
    fontSize: '20px',
    color: status === 'completed' ? 'green' : status === 'ongoing' ? 'orange' : 'black'
  }}>{text}</p>;
}