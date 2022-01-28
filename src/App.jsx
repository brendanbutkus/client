import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form'
import View from './components/View'
import Edit from './components/Edit'
import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
    <div className='App'>
      <Form/>
    </div>
      </Route>
      <Route exact path="/api/products/:_id">
        <View/>
      </Route>
      <Route exact path="/api/products/:_id/update">
      <Edit/>
      </Route>
    </Switch>
    </BrowserRouter>
  )

  
}

export default App;


