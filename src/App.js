import logo from './logo.svg';
import './App.css';
import Home from './Home';
import CourceContentItem from './CourceContentItem';

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
      <Home courceContent={courceContent} />


    </div>
  );
}

export default App;






