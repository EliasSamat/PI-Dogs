import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from "./componentes/landingPage" 
import HomePage from './componentes/HomePage.jsx';
import Detailpage from './componentes/DetailPage.jsx';
import FormPage from './componentes/formPage.jsx';
function App() {
  return (
    <div className="App">
      <Router>
       <Route path="/" exact component={Landing}/>
       <Route path="/homePage" component={HomePage}/>
       <Route path="/detail/" component={Detailpage}/>
       <Route path="/fromPage" component={FormPage}/>
    

      </Router>   
    </div>
  );
}

export default App;
