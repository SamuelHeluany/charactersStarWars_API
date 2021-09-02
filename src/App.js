import './App.css';
import StarWarsDetails from './Pages/StarWarsDetails';
import { BrowserRouter as Router,
        Route, 
        Switch,
        Link
} from 'react-router-dom'
import InitialPage from './Pages/InitialPage';

function App() {
  return (
    <Router>
     <div className="container">
        <Switch>
          <Route path ="/" exact component={InitialPage} />
          <Route path="/characters" component={StarWarsDetails} />
        </Switch>
        

      </div>
    </Router>
  );
}

export default App;
