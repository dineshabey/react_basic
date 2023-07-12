import logo from './logo.svg';
import './App.css';
import Home from './Home';

const courceContent = [
  {
    status: 'completed',
    text: "Git (version control system) and GitHub",
    isVisibale: 'true',
  },
  {
    status: 'completed',
    text: "Introducion to PHP",
    isVisibale: 'true',


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
      <Home />
      {/* {courceContent.map((val, key) => {
        return <CourceContentItem>
          <p style={{
            fontSize: '20px',
            backgroundColor: 'wheat',
            color: val.status === 'completed' ? 'green' : val.status === 'ongoing' ? 'orange' : 'black'
          }}>

            {val.text}
            <span style={{ color: 'red', fontSize: '20px', fontWeight: 'bold' }}> - {val.status}</span>
          </p>
        </CourceContentItem>
      })} */}

    </div>
  );
}

export default App;

//create new components and prints
//special propertie - children 
function MyPara({ status, isVisibale, children }) {
  // console.log(text)
  // const { status, text } = props; //destructuring 
  return <p style={{
    fontSize: '20px',
    color: status === 'completed' ? 'green' : status === 'ongoing' ? 'orange' : 'black'
  }}>{children}</p>;
}
//special propertie - children  
function CourceContentItem({ children }) {
  return <p style={{ backgroundColor: 'wheat' }}>{children}</p>
}


function MyParaOne({ status, text }) {
  // console.log(text)
  // const { status, text } = props; //destructuring 
  return <p style={{
    fontSize: '20px',
    color: status === 'completed' ? 'green' : status === 'ongoing' ? 'orange' : 'black'
  }}>

  </p>;
}