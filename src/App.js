import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { About, Home, Error, SingleCocktail } from './routes'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cocktail/:id" children={<SingleCocktail />} />
          <Route exact path="*" component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
