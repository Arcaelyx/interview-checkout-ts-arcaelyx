import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css';

import Cart from './components/Cart';
import Catalog from './components/Catalog';
import Header from './components/Header';
import NotFound from './components/NotFound';

const App = () => (
  <Router>
    <div className='App'>
      <Header />
      <div className='App-main'>
        <Switch>
          <Route path='/cart' component={Cart} />
          <Route exact path='/' component={Catalog} />
          <Route path='*' component={NotFound} />
        </Switch>
      </div>
    </div>
  </Router>
)

export default App;