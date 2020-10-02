import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './styles/index.scss';
import Contact from './component/pages/Contact';
import ContactDetail from './component/pages/ContactDetail';
import ContactAdd from './component/pages/ContactAdd';
import ContactUpdate from './component/pages/ContactUpdate';

import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={Contact} />
            <Route path="/ContactDetail/:id" component={ContactDetail} />
            <Route path="/ContactAdd" component={ContactAdd} />
            <Route path="/ContactUpdate/:id" component={ContactUpdate} />
          </Switch>
        </Router>
    </Provider>
  );
}

export default App;
