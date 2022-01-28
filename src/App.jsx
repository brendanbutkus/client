import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form'
import View from './components/View'
import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Form/>
    </div>
    <Switch>
      <Route exact path="/api/products/:_id">
        <View/>
      </Route>
    </Switch>
    </BrowserRouter>
  )

  
}

export default App;

