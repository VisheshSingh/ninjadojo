import Home from './components/Home';
import Create from './components/Create';
import Navbar from './components/Navbar';
import BlogDetails from './components/BlogDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/create' component={Create} />
            <Route path='/blog/:id' component={BlogDetails} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
